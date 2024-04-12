import React from "react";
import iMg from "../thusith.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse  lg:flex-row items-center gap-1  py-10 ">
        <div className="lg:ml-20 flex flex-1 flex-col items-center lg:items-start ">
          <h2 className="text-bookmark-blue text-5xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 ">
            Leran Physics in a new way
          </h2>
          <p className="text-bookmark-grey text-2xl text-center lg:text-left mb-6">
            Join Logic Of Physics Today
          </p>
          <Link to="/lesson">
            <div className="flex justify-center flex-wrap gap-6  ">
              <button
                type="button"
                className="btn m-auto btn-purple hover:bg-bookmark-white hover:text-black justify-center"
              >
                Entroll Today
              </button>
            </div>
          </Link>
        </div>
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 ">
          <img
            className="w-96 h-auto lg:w-full lg:h-full"
            src={iMg}
            alt="thusith image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
