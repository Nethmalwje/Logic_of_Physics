import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import cors from "cors";
import env from "dotenv";

const app = express();
const port = 4000;
const saltRounds = 10;
env.config();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);
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

//middleware--------------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

//get requests--------------------------------------------
//get test
app.get("/abc", async (req, res) => {
  const result = await db.query("SELECT * FROM users");
  console.log(result);
  res.send("connected to backend");
});

//login get

//post requests--------------------------------------------
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: false, //put false to stop automatic redirection but we can chage tis to "/get" routes
    failureRedirect: false,
  }),

  function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    // You can send a custom success message to the frontend console here.
    console.log("Login successful");
    res.status(200).send("Login successful");
  },
  function (err, req, res, next) {
    // This function will be called if authentication fails.
    console.log("Login failed:", err);
    res.status(401).send("Login failed");
  }
);
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

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

//listening on port 4000--------------------------------------------
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
