import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../Components/Form";

const Home = () => {
  const navigate = useNavigate();
  let quizid;

  const [quizList, setQuizList] = useState([]);

  const courseidobject = {
    courseid: "2",
  };

  // create a quiz by click on create quiz button

  const createQuiz = async () => {
    try {
      const response = await fetch("http://localhost:4000/addQuiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseidobject),
      });

      if (response.ok) {
        const data = await response.json();
        quizid = data.quizId;
        console.log("Quiz created successfully. Quiz ID:", quizid);
        navigate(`/quiz/${quizid}`);
      } else {
        console.error(
          "Failed to create quiz due to server error. Status code:",
          response.status
        );
      }
    } catch (error) {
      console.error("Failed to create quiz:", error.message);
    }
  };

  // fetching all the quizzes of selected course

  useEffect(() => {
    const fetchQuizList = async () => {
      try {
        const response = await fetch("http://localhost:4000/getQuizList");
        if (response.ok) {
          const quizIds = await response.json();
          setQuizList(quizIds);
        } else {
          console.error("Error fetching quiz list: ", response.statusText);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchQuizList();
  }, []);

  // create a video



  return (
    <div>
      <button
        onClick={createQuiz}
        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
      >
        Create Quiz
      </button>

      <div>
        <h2>Quizlist</h2>
        <ul>
          {quizList.map((quizId) => (
            <li key={quizId}>
              <Link to={`/doquiz/${quizId}`}>{quizId}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Link to={`/addvideo/${courseidobject.courseid}`}><button
        
        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
      >
       Add Video
      </button></Link>

      <div>
        <Form/>
      </div>

      
    </div>
  );
};

export default Home;
