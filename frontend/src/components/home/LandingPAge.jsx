import React from "react";
import Navbar from "../Navbar";
import ImageSlider from "../ImageSlider";
import Hero from "./Hero";
import Login from "../Login";
import Login2 from "../LoginS";
import Footer from "../Footer";
import PopularLssons from "./PopularLessons";
import Banner from "./Banner";
export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <PopularLssons />
      {/* <ImageSlider /> */}
      <Hero />

      <Footer />
    </div>
  );
}
