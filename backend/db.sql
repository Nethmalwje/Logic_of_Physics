

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    `password` VARCHAR(255),
    username VARCHAR(255)
);


create table feedback (
	id serial primary key,
name varchar(50) not null,
email varchar (100) not null,
	message text not null
)

CREATE TABLE quizzes (
    quizid SERIAL PRIMARY KEY,
    courseid VARCHAR(255),
    
);

CREATE TABLE questions (
    questionid SERIAL PRIMARY KEY,
    
    image TEXT,
    answer INTEGER,
   quizid integer  REFERENCES quizzes(quizid)
);