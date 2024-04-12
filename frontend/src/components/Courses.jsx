import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function CoursePage() {
  const [courseData, setoursedata] = useState([]);

  const client = axios.create({ baseURL: "http://localhost:4000/" });
  const { lessonID } = useParams();

  const fetchData = async () => {
    const response = await client.get(`lesson/${lessonID}`);
    setoursedata(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [lessonID]);

  return (
    <div>
      <Navbar />
      <div className="mx-auto w-full max-w-7xl px-5 pt-24 pb-8 md:px-10 ">
        <div
          className="mb-6 flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <p className="mb-4 bg-[#386eec] px-1.5 text-sm font-bold uppercase text-white">
            {" "}
            New Course Added{" "}
          </p>
          <h1 className="mb-4 text-4xl font-bold uppercase md:text-5xl">
            {" "}
            Elevate Your Skills Today!{" "}
          </h1>
          <p className="w-full max-w-3xl text-lg md:text-xl">
            {" "}
            Dive into our expert-led courses for hands-on experience in
            cutting-edge technologies. Your journey to success begins here!{" "}
          </p>
        </div>{" "}
      </div>

      {/* <section className="mt-2 mx-auto px-4 max-w-screen-lg md:px-8 ">
        <div className="my-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courseData.map((items) => (
            <article
              className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
              // key={key}
            >
              <a href={items.href}>
                <img
                  src={items.lesson_image}
                  loading="lazy"
                  alt={items.title}
                  className="w-full h-48 rounded-t-md"
                />

                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-gray-900">{items.title}</h3>
                </div>
              </a>
              <div className="ml-3 mb-5">
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
                  <Link to={`course/${items.courseid}`}>
                    <span className="text-sm font-medium transition-all group-hover:ms-4">
                      {" "}
                      Join Class{" "}
                    </span>
                  </Link>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section> */}

      <section className=" ">
        <div className=" ">
          {courseData.map((items) => (
            <div className="mx-auto container w-full max-w-7xl px-5  md:px-10 ">
              <div data-aos="fade-up" data-aos-duration="900">
                {" "}
                {/* Item */}{" "}
                <div className="flex grid-cols-[1fr_1.75fr] flex-col-reverse items-start justify-between gap-8 border-b border-solid border-b-[#0000001a] py-10 md:grid lg:grid-cols-[1fr_1.5fr] lg:gap-16">
                  <div>
                    <h2 className="mb-6 text-3xl font-bold normal-case md:text-3xl">
                      {items.title}
                    </h2>
                    <p className="mb-2 font-bold">lesson Description</p>
                    <div className="flex w-full flex-col justify-between gap-3 text-[#636262] lg:flex-row lg:items-center lg:justify-start">
                      <p>
                        In this lesson, you will delve into the fundamental
                        concept of React Hooks. React Hooks have revolutionized
                        the way we manage state and side effects in React
                        functional components. You will learn about various
                        built-in hooks such as useState, useEffect, useContext,
                        and custom hooks. Through practical examples and
                        exercises, you will understand how to leverage React
                        Hooks to streamline your React application development
                        process. By the end of this lesson, you will have a
                        solid understanding of React Hooks and be equipped to
                        integrate them effectively into your projects.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full max-w-[624px] flex-col items-start">
                    <div className="mb-4 flex w-full items-center justify-between">
                      <p className="rounded-md bg-[#f5f8fe] px-2 py-1.5 text-sm font-medium uppercase text-[#5855eb]">
                        {" "}
                        AL Physics 2025{" "}
                      </p>
                      <div className="flex items-center gap-1 text-right uppercase text-[#5855eb]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 14 14"
                          fill="none"
                          preserveAspectRatio="xMidYMid meet"
                          className="h-4 w-4"
                        >
                          <path
                            d="M7.00034 10.6517L2.88583 12.9548L3.80477 8.32995L0.342926 5.12855L5.02537 4.57337L7.00034 0.291672L8.97527 4.57337L13.6577 5.12855L10.1959 8.32995L11.1148 12.9548L7.00034 10.6517Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <p>Pro</p>
                      </div>
                    </div>
                    <div className="relative mb-6 aspect-[16_/_7] w-full overflow-hidden">
                      <img
                        src="https://assets-global.website-files.com/655f304a2827f2c5379ca45a/6569fda59c52e3d1dae43529_dummy-img3.webp"
                        alt=""
                        className="absolute inline-block h-full w-full object-cover"
                      />
                    </div>
                    <h2 className="mb-6 text-3xl font-bold normal-case md:text-3xl">
                      {" "}
                      {items.title}
                    </h2>
                    <div className="ml-3 mb-5">
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
                        <Link to={`course/${items.courseid}`}>
                          <span className="text-sm font-medium transition-all group-hover:ms-4">
                            {" "}
                            Join Class{" "}
                          </span>
                        </Link>
                      </a>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
