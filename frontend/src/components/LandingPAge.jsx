import React from "react";
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";
import Hero from "./Hero";
import Login from "./Login";
import Login2 from "./LoginS";
import Footer from "./Footer";
export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <Hero />
      <Login />
      <Login2 />

      <Footer />
    </div>
  );
}
