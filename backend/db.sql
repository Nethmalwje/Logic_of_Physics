lesson table 
lesson id 
lesson name

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    `password` VARCHAR(255),
    username VARCHAR(255)
);

CREATE TABLE video(
    video_id serial PRIMARY KEY,
    courseID foreign key, 
    videoNum int ,reference
    'description' VARCHAR(255),
    title VARCHAR(255) UNIQUE,
    link VARCHAR(255) UNIQUE

);




-- Create the 'courses' table
CREATE TABLE courses (
    courseID SERIAL PRIMARY KEY,
    description VARCHAR(255),
    title VARCHAR(255)
);

-- Create the 'Quiz' table with a foreign key reference to 'courses'
CREATE TABLE Quiz (
    quizID SERIAL PRIMARY KEY,
    courseID INT REFERENCES courses(courseID)
);

-- Create the 'Questions' table with a foreign key reference to 'Quiz'
CREATE TABLE Questions (
    questionID SERIAL PRIMARY KEY,
    quizID INT REFERENCES Quiz(quizID),
    imageID SERIAL,
    imageLink VARCHAR(255),
    correctAnswer INT
);

INSERT INTO Quiz (courseID) VALUES
(1),
(1),
(2);

ALTER TABLE courses
ADD COLUMN lessonID INTEGER REFERENCES lesson(lessonID),
ADD COLUMN lesson_image VARCHAR(255);


