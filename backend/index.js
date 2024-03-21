import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import session, { Cookie } from "express-session";
import cors from "cors";
import env from "dotenv";

const app = express();
const port = 4000;
const saltRounds = 10;
env.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // This allows cookies to be sent to the server
  })
); //find out more about these

//database connection--------------------------------------------
const db = new pg.Client({
  //use .env file to configure the db data
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL database:", err);
  });

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // Specify the table name for sessions
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 1 year in milliseconds
      // Alternatively, set an expires date to a far future date
      // expires: new Date(Date.now() + (365 * 24 * 60 * 60 * 1000)), // 1 year in milliseconds
    },
    //cookie: {
    //  maxAge: 1000 * 60 * 5,
    //},
  })
);

//middleware--------------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

//custom middleware----------------------------------------
const requireAuth = (req, res, next) => {
  console.log("\n require middleware for auth \n");
  if (req.isAuthenticated()) {
    console.log("authenticated");
    next();
  } else {
    // res.send({
    //   isAuthenticated: false,
    // });
    if (req.session.cookie) {
      //console.log(req.session.cookie);
      //console.log(req);
    }
    console.log(
      "this is the req ;-----------------------------------------------------------",
      req
    );
    console.log("not authenticated");
    res.status(403).json({
      timeStamp: Date.now(),
      msg: "user is not authenticated , access denied",
      code: 403,
    });
  }
};

//get requests--------------------------------------------
//get test
app.get("/abc", requireAuth, async (req, res) => {
  const result = await db.query("SELECT * FROM users");
  console.log(result);
  res
    .status(200)
    .json({ message: "Login successful", loggedIn: true, roles: [2001] });
  // res.send("connected to backend");
  console.log("headers", req.headers);
  console.log("Authentication", req.isAuthenticated());
  //console.log(req.session);
  console.log("req came");
});

//login get

//post requests--------------------------------------------
// app.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: false, //put false to stop automatic redirection but we can chage tis to "/get" routes
//     failureRedirect: false,
//   }),

//   function (req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     // You can send a custom success message to the frontend console here.
//     console.log("Login successful");
//     res.status(200).send("Login successful", { name: " paka" }); //changed this line
//   },
//   function (err, req, res, next) {
//     // This function will be called if authentication fails.
//     console.log("Login failed:", err);
//     res.status(401).send("Login failed");
//   }
// );
//-------------------------------------------------------------------------------------
app.post("/login", passport.authenticate("local"), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  // You can send a custom success message to the frontend console here.
  console.log("Login successful");
  res
    .status(200)
    .cookie("connect.sid", req.sessionID, { httpOnly: true }) // Set the session cookie
    .send({ message: "Login successful", loggedIn: true, roles: [2001] });
  console.log(req.session);
});

//-----------------------------------------------------------------------------------

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (checkResult.rows.length > 0) {
      req.send("email already in use please login");
    } else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("error hashing password", err);
        } else {
          const result = await db.query(
            "INSERT INTO users (email,password) VALUES ($1,$2) RETURNING *",
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err) => {
            console.log(" registration succses");
            // res.redirect("/secrets");

            res.status(200).send("Registration successful");
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

passport.use(
  new Strategy(async function verify(username, password, cb) {
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1", [
        username,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        bcrypt.compare(password, storedHashedPassword, (err, valid) => {
          if (err) {
            //error with the password check
            console.error("Error comparing passwords: ", err);
            return cb(err);
          } else {
            if (valid) {
              //passed thepassword check
              return cb(null, user);
            } else {
              //did not passed the password check
              return cb(null, false);
            }
          }
        });
      } else {
        return cb("user not found");
      }
    } catch (err) {
      console.log(err);
    }
  })
);
//persists user data inside the session
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

//vedeo streaming API ---------------------------------------------------
const videoFileMap = {
  cdn: "",
};
app.get("/videoes/:filename", (req, res) => {
  const fileName = req.params.filename;
  const filePath = videoFileMap[fileName];
  if (!filePath) {
    return res.status(404).send("Fie not found");
  }
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").aplit("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunkSize = end - start + 1;
    const file = fs.createReadStream(filePath, { start, end });
    const head = {
      "content-Range": `bytes ${start} -${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(filePath).pipe(res);
  }
});

//not sure........................................................................
app.get("/video/:videoID", (req, res) => {
  if (req.isAuthenticated) {
  }
});
//lesson page...............................................................
app.get("/lesson", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM lesson");
    const lessons = result.rows;
    res.json(lessons);
  } catch (error) {
    console.error("error fetching lessons", error);
    res.status(500).json({ message: "internal server error" });
  }
});
//course view page..............................................................
app.get("/lesson/:lessonID", async (req, res) => {
  const lessonID = req.params.lessonID;
  try {
    const result = await db.query("SELECT * FROM courses WHERE  lessonid =$1", [
      lessonID,
    ]);
    const courses = result.rows;
    console.log(courses);
    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//inside course page............................................................
app.get("/courses/:courseID", async (req, res) => {
  // if (req.isAuthenticated()) {
  const courseID = parseInt(req.params.courseID);
  console.log(courseID);
  if (isNaN(courseID)) {
    console.log("haminenawa");
    return res.status(400).json({ error: "Invalid course ID" });
  }
  try {
    const result = await db.query("SELECT * FROM video WHERE course_id = $1", [
      courseID,
    ]);
    const result2 = await db.query("SELECT * FROM quiz WHERE courseid = $1", [
      courseID,
    ]);
    //console.log(result);
    const videos = result.rows;
    const quizes = result2.rows;
    console.log(videos);
    console.log(quizes);
    res.json({ videos: videos, quizes: quizes });
  } catch (error) {
    console.error("Error fetching videos", error);
    res.status(500).json({ message: "blah blah Internal Server Error" });
  }
  // } else {
  //   console.log("not Authenticated");
  //   res.send("not authenticated");
  // }
});

//listening on port 4000--------------------------------------------
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
