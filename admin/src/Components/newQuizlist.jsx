// import React, { useState, useEffect } from "react";
// import Newquiz from "./Newquiz";
// import { useParams } from "react-router-dom";

// const QuizList = () => {
//   const { quizId } = useParams();

//   const [questions, setQuestions] = useState([]);
//   const [results, setResults] = useState([]);
//   const [submitted, setSubmitted] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState({});

//   useEffect(() => {
//     const getQuestionslist = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/getQuestions/${quizId}`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setQuestions(data);
//           setResults(new Array(data.length).fill(null));
//           console.log(`created an array of length ${data.length}`);
//         } else {
//           console.error("Failed to fetch questions");
//         }
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//       }
//     };

//     getQuestionslist();
//   }, [quizId]);

//   const handleAnswerChange = (questionid, selectedOption) => {
//     setSelectedOptions({ ...selectedOptions, [questionid]: selectedOption });
   
//   };

//   const handleSubmit = () => {
//     setSubmitted(true);
//     const newResults = questions.map((question, index) => {
//       return selectedOptions[question.questionid] === question.answer;
//     });
//     setResults(newResults);
//   };
  
 

//   return (
//     <div>
//       {questions.map((question, index) => (
//         <div key={index}>
//           <Newquiz
//             id={question.questionid}
//             image={question.image}
//             answer={question.answer}
//             onAnswerChange={handleAnswerChange}
           
            
//           />
//           {submitted && results[index] !== null && (
//             <p
//               className={
//                 results[index] ? "text-green-500 mt-2" : "text-red-500 mt-2"
//               }
//             >
//               {results[index]
//                 ? "Answer is correct"
//                 : `Answer is Wrong. The correct answer is ${question.answer}`}
//             </p>
//           )}
//         </div>
//       ))}

//       <div className="flex justify-end">
//         <button
//           type="button"
//           className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none mr-50"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizList;
