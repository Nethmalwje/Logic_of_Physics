import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import LessonCard from "./LessonCard";
import SkilledLearning from "../abc";
import Filter from "./Filter";
import ImageSlider from "../ImageSlider";
import Footer from "../Footer";

export default function CoursePage() {
  const [LessonData, setLessondata] = useState([]);

  const client = axios.create({ baseURL: "http://localhost:4000/" });
  const { lessonID } = useParams();

  const fetchData = async () => {
    const response = await client.get(`lesson`);
    setLessondata(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <ImageSlider />

      <div class="mx-auto w-full max-w-7xl px-5 lg:py-16 py-24 md:px-10   ">
        <div className=" text-center">
          <h2 class="  text-3xl font-bold md:text-5xl">
            The Lessons for GCE AL Physics Subject
          </h2>
          <p class="mb-12 mt-4 text-[#636262] text-lg text-bold">
            අ.පො.ස. උසස්පෙල විබාගය සඳහා අදාල භෞතික විද්‍යාව පාඩම්.
          </p>
        </div>
        <div class="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
          {LessonData.map((items) => (
            <LessonCard name={items.lesson_name} lessonid={items.lessonid} />
          ))}
        </div>
      </div>

      {/* <Filter /> */}
      <Footer />
    </div>
  );
}
