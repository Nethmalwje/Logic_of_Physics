import React from "react";
import iMg from "./thusith.png";

function Hero() {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse  lg:flex-row items-center gap-1 mt-14 lg:mt-28 ">
        <div className="ml-20 flex flex-1 flex-col items-center lg:items-start ">
          <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 ">
            Leran Physics in a new way
          </h2>
          <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            Join Logic Of Physics Today
          </p>
          <div className="flex justify-center flex-wrap gap-6  ">
            <button
              type="button"
              className="btn m-auto btn-purple hover:bg-bookmark-white hover:text-black justify-center"
            >
              Entroll Today
            </button>
            {/* <button
              type="button"
              className="btn btn-white hover:bg-bookmark-purple hover:text-white"
            >
              Register
            </button> */}
          </div>
        </div>
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={iMg}
            alt="thusith image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
