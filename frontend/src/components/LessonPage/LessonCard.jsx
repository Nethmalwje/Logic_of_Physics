import React from "react";
import { Link } from "react-router-dom";

function LessonCard(params) {
  return (
    <div className="flex flex-col justify-center m-5 bg-white rounded-xl hover:drop-shadow-xl sahdow-lg  shadow-lg  ">
      {/* <section className="h-full w-full my-auto">
        <a
          href="#"
          className="flex w-full h-full flex-col gap-4 rounded-md border border-solid border-[#dfdfdf]  text-black md:max-w-xs md:px-0 md:py-0"
        >
          <img
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3e73014d2b281b443989_Rectangle%2024.png"
            alt=""
            className="inline-block h-60 w-full object-cover"
          />
          <div className="px-6 py-4">
            <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">
              Lesson #0{params.lessonid}
            </p>
            <p className="mb-4 text-xl font-semibold">{params.name}</p>
            <p className="mb-6 text-[#636262]">
              Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis
            </p>
            <div className="mx-auto max-w-lg  items-start">
              <div className="flex items-center mb-5">
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
                  <span className="text-gray-500 font-normal">
                    (76 reviews)
                  </span>
                </p>
              </div>
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
        </a>{" "}
      </section>{" "} */}
      <a
        href="#"
        className="flex flex-col gap-4 rounded-2xl border border-solid border-[#b1b1b1] bg-whie p-6 font-bold text-black transition hover:[box-shadow:rgb(0,_0,_0)_7px_7px]"
      >
        <img
          src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980defd9d4a1fd1cf20a3d_Rectangle%20801.jpg"
          alt=""
          className="inline-block h-60 w-full object-cover"
        />
        <div className="w-full pt-4">
          <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">
            Lesson #0{params.lessonid}
          </p>
          <p className="mb-4 text-xl font-semibold">{params.name}</p>
          <p className="mb-5 font-normal text-[#636262] lg:mb-8">
            Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
            luctus venenatis elit ut aliquam, purus sit amet luctus venenatis
          </p>
          <div className="mx-auto max-w-lg  items-start">
            <div className="flex items-center mb-5">
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
      </a>
    </div>
    // </div>
  );
}

export default LessonCard;
