


// import React, { useState } from "react";

// const Quiz = () => {
//   const [quizDetails, setQuizDetails] = useState({
//     quizname: "",
//     courseid: "",
//   });

//   const formHandler = (e) => {
//     setQuizDetails({ ...quizDetails, [e.target.name]: e.target.value });
//   };

//   const addQuiz = async () => {
//     await fetch("http://localhost:4000/addQuiz", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json", // Indicate that you're sending JSON data
//       },
//       body: JSON.stringify(quizDetails), // Stringify your state object
//     });
//   };
  
//   return (
//     <div className="flex items-center justify-center p-12">
//       <div className="mx-auto w-full max-w-[550px]">
//         <form onSubmit={addQuiz}>
//           <div className="mb-5">
//             <label
//               htmlFor="quizname"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               Quiz Name
//             </label>
//             <input
//               type="text"
//               name="quizname"
//               id="quizname"
//               value={quizDetails.quizname}
//               onChange={formHandler}
//               placeholder="Quiz Name"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//             />
//           </div>
//           <div className="mb-5">
//             <label
//               htmlFor="courseid"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               Course Name
//             </label>
//             <select
//               name="courseid"
//               id="courseid"
//               value={quizDetails.courseid}
//               onChange={formHandler}
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//             >
//               <option value="">Select a course</option>
//               <option value="1">Course 1</option>
//               <option value="2">Course 2</option>
//               <option value="3">Course 3</option>
//               <option value="4">Course 4</option>
//             </select>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Quiz;
