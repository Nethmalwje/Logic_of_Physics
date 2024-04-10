import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import cors from "cors";
import env from "dotenv";
import multer from "multer";
import path from "path";

const app = express();
const port = 4000;
const saltRounds = 10;
env.config();
app.use(express.urlencoded({ extended: false }))

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
    origin: ["http://localhost:3000", "http://localhost:3001"],
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


// adding image to feedback
const storage = multer.diskStorage({
  destination:'./Upload/images',
  filename: (req, file, cb) =>  {
    return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`);

}


})


const upload = multer ({storage:storage})

app.use('/images',express.static('./Upload/images'))

app.post("/upload", upload.single('feedback'), (req, res) => {
  console.log('successfully uploaded');
  res.json({
      success: 1,
      image_url: `http://localhost:${port}/images/${req.file.filename}`
  })
})



// adding a feedback to databse via admin

app.post ('/addfeedback', async(req,res)=>{
  const {name , email, message,image} = req.body;

  try {
    const result = await db.query(
      'INSERT INTO feedback(name, email, message,image) VALUES($1, $2, $3, $4) RETURNING *',
      [name, email, message,image]
    );
    res.status(201).json(result.rows[0]);
    console.log('Logged to the table Feedback');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}





)

// fetching feedbacks from datbase

app.get('/getfeedbacks',async(req,res)=>{
  try{
    const result = await db.query('select id, name , email , message ,image FROM feedback ')
    res.json(result.rows)


  }catch(error){
    console.log(error);

  }
})

// add to quiz list

// pllaha eka wenama ghnwnm use krnn

// app.post ('/addQuiz', async(req,res)=>{
//   const {courseid,quizname} = req.body;

//   try {
//     const result = await db.query(
//       'INSERT INTO quizlist(courseid,quizname) VALUES($1, $2) RETURNING *',
//       [courseid,quizname]
//     );
//     res.status(201).json(result.rows[0]);
//     console.log('Logged to the table Quizlist');
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// })


app.post('/addQuiz', async (req, res) => {
  const { courseid } = req.body;

  try {
    // Insert into quizzes table and return the quizid of the newly inserted row
    const result = await db.query(
      'INSERT INTO quizzes(courseid) VALUES($1) RETURNING quizid',
      [courseid]
    );

    // Assuming the insert was successful, result.rows[0] will contain the quizid
    const quizId = result.rows[0].quizid;

    // Respond with the quizId
    res.status(201).json({ quizId: quizId });
    console.log('Logged to the table Quizzes, quizId:', quizId);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


// quizzes part

const Quizstorage = multer.diskStorage({
  destination:'./Upload/Qimages',
  filename: (req, file, cb) =>  {
    return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`);

}


})


const Qupload = multer ({storage:Quizstorage})

app.use('/Qimages',express.static('./Upload/Qimages'))

app.post("/Qupload", Qupload.single('Qimage'), (req, res) => {
  console.log('successfully uploaded');
  res.json({
      success: 1,
      image_url: `http://localhost:${port}/Qimages/${req.file.filename}`
  })
})


app.post ('/addQuestion', async(req,res)=>{
  const {quizid,image,answer} = req.body;

  try {
    const result = await db.query(
      'INSERT INTO questions(quizid,image,answer) VALUES($1, $2,$3) RETURNING *',
      [quizid,image,answer]
    );
    res.status(201).json(result.rows[0]);
    console.log('Logged to the table Feedback');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}





)


app.get('/getQuestions/:quizId', async (req, res) => {
  const { quizId } = req.params;
  try {
    const result = await db.query(`SELECT questionid, image, answer FROM questions WHERE quizid = $1`, [quizId]);
    const questionsList = result.rows.map(row=>(
      {
        id: row.questionid,
        image:row.image,
        answer:row.answer
      }
    ))
    res.json(questionsList)
    console.log('questionslist successfully passed to front end');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// get the quizzes under create quiz button

app.get('/getQuizList', async (req, res) => {
  try {
    const result = await db.query("SELECT quizid FROM quizzes WHERE courseid = '2'");
    const quizIds = result.rows.map(row => row.quizid);
    res.json(quizIds);
    console.log('successfully passed the quizlist to front');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// add videos through admin

app.post('/addvideo',async(req,res)=>{
  const {title,videolink,courseid} = req.body;

  try{
    await db.query('INSERT INTO videos (videolink,title,courseid) VALUES ($1 , $2 ,$3) RETURNING * ',
    [videolink,title,courseid])

  }catch (error) {
    console.error('Error adding video:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }

})


//listening on port 4000--------------------------------------------
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
