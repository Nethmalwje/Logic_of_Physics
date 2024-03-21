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
      <div className="text-left mt-20 mx-auto px-4 max-w-screen-lg md:px-8">
        <h1 className="text-3xl text-gray-800 font-semibold">Blog</h1>
      </div>
      <section className="mt-2 mx-auto px-4 max-w-screen-lg md:px-8 ">
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
      </section>
    </div>
  );
}