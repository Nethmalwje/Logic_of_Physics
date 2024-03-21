import React, { useEffect, useState } from "react";
import axios from "axios";

function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState([]);

  const client = axios.create({
    baseURL: "http://localhost:4000",
  });

  const fetchData = async () => {
    const response = await client.get(`/quizes/:quizID`);
    setQuiz(response.data);
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <div className="grid grid-cols-6 gap-2 mt-10 mx-auto rounded-lg w-3/4">
      <div className="col-span-1 bg-slate-400 rounded-md flex items-center justify-center text-white">
        01
        <h3>Queston 1</h3>
        <p> allocated marks -2 </p>
      </div>
      <div className="col-span-4 bg-white rounded-md shadow-lg">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Queston 1</h3>
          <p className="mt-3 text-gray-700">
            How to position your furniture for positivity?
          </p>
        </div>
        <div>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="h-auto w-3/4 object-cover ml-4 "
          />
        </div>
        <div className="p-6">
          <p className="mb-3 ">Select your answer.</p>
          <input type="radio" id="option1" name="option" className="mt-3" />
          <label htmlFor="option1" className="ml-2  ">
            Option 1
          </label>
          <br />
          <input type="radio" id="option2" name="option" className="mt-3" />
          <label htmlFor="option2" className="ml-2">
            Option 2
          </label>
          <br />
          <input type="radio" id="option3" name="option" className="mt-3" />
          <label htmlFor="option3" className="ml-2">
            Option 3
          </label>
          <br />
          <input type="radio" id="option4" name="option" className="mt-3" />
          <label htmlFor="option4" className="ml-2">
            Option 4
          </label>
        </div>
      </div>
      <div className="col-span-1 bg-slate-400 rounded-md flex items-center justify-center text-white">
        03
      </div>
    </div>
  );
}

export default Quiz;
