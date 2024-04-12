import React from "react";
import Navbar from "../Navbar";
import ImageSlider from "../ImageSlider";
import Hero from "./Hero";
import Login from "../Login";
import Login2 from "../LoginS";
import Footer from "../Footer";
import PopularLssons from "./PopularLessons";
import Banner from "./Banner";
import Stat from "./Stat";
import HowItWorks from "./HowitWorks";
import FooterL from "./FooterL";
import Testamonials from "./Testamonials";
import Filter from "../LessonPage/Filter";
export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <PopularLssons />
      <Stat />
      <Hero />
      <HowItWorks />
      <Testamonials />
      {/* <ImageSlider /> */}

      <FooterL />
    </div>
  );
}
