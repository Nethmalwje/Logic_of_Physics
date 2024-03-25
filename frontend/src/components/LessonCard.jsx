import React from "react";
import { Link } from "react-router-dom";

function LessonCard(params) {
  return (
    // <div className="container   w-3/5 mx-auto xl:w-[9/10]  mt-3  ">
    //   <div className="  bg-slate-300 mx-3 md:flex xl:w-[9/10]  xl:mx-auto  mb-5 shadow-sm rounded-lg hover:shadow-lg transition-all duration-250 ">
    //     <div className=" w-full md:w-2/5  ">
    //       <img
    //         className="w-full h-[200px] rounded-t-lg md:h-full  object-cover"
    //         src="https://img.freepik.com/premium-photo/background-featuring-engineering-gears-machinery-showcasing-intricate-mechanical-aspects-engineering-generative-ai_155807-17125.jpg"
    //         alt=""
    //       />
    //     </div>

    //     <div className=" p-4  w-full md:w-3/5 ">
    //       <div className="text-3xl font-bold my-2 ">Mechanics</div>
    //       <div class="h-[70px]">
    //         <p>
    //           Mechanics is the branch of physics that deals with the behavior of
    //           physical bodies when subjected
    //         </p>
    //       </div>
    //       <div className="flex mt-3 mb-3 gap-x-5">
    //         <div className="flex items-center">
    //           <i
    //             class="fa-solid fa-graduation-cap "
    //             style={{ color: "#c744f2", fontSize: "25px" }}
    //           ></i>
    //           <p className="ml-1 text-base font-bold ">115 students</p>
    //         </div>
    //         <div className="flex items-center">
    //           <i
    //             class="fa-solid fa-file "
    //             style={{ color: "#c744f2", fontSize: "25px" }}
    //           ></i>
    //           <p className="ml-2 text-base font-bold">20 courses</p>
    //         </div>
    //       </div>

    //       <button class="bg-[#c744f2] hover:bg-[#9b25c2] transform hover:scale-105  text-white font-bold mt-3 transition-all duration-300 py-2 px-4 rounded">
    //         Enroll Now
    //       </button>
    //     </div>
    //   </div>//h-screen
    <div className="flex flex-col justify-center m-5   ">
      <div className=" hover:shadow-lg relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <img
            src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="tailwind logo"
            className="rounded-xl border-0"
          />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 font-medium hidden md:block">
              Vacations
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-gray-600 font-bold text-sm ml-1">
                4.96
                <span className="text-gray-500 font-normal">(76 reviews)</span>
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pink-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              Lesson #0{params.lessonid}
            </div>
          </div>
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            {params.name}
          </h3>
          <p className="md:text-lg text-gray-500 text-base">
            The best kept secret of The Bahamas is the country’s sheer size and
            diversity. With 16 major islands, The Bahamas is an unmatched
            destination
          </p>
          <Link to={`/lesson/${params.lessonid}`}>
            <div className="ml-0 mb-5">
              <a
                className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                href="#"
              >
                <span className="absolute -start-full transition-all group-hover:start-4">
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:ms-4">
                  {" "}
                  Join Class{" "}
                </span>
              </a>
            </div>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default LessonCard;
