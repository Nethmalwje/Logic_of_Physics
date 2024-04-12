import React, { useState } from "react";
import img1 from "./thusi1.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Banner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-180"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <input
        type="file"
        accept="image/*"
        //onChange={handleFileChange}
        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
      />
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl  sm:text-5xl">
            Best Place for
            <strong className="block font-extrabold text-orange-500">
              {" "}
              Learning Physics Online{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            ශ්‍රී ලාන්කීය පිසික්ස් කලාවේ කක්කා බෙට්ට, ඒ ඕනෙනම් වරෙන් ණාත්තම්
            මාරියන් බැල්ලිගෙ පුතා!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link to={"/lesson"}>
              <a
                href="#"
                className="block w-full rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>
            </Link>
            <ScrollLink
              to="Stat"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
