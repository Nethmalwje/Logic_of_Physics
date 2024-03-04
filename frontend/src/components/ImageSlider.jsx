import { useState, useEffect, useRef } from "react";

import { RxDotFilled } from "react-icons/rx";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import React from "react";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    // Start the auto transition after 3 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    // Return a cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
    };
  }, [currIndex]); // Empty dependency array to run only once when component mounts

  const prevSlide = () => {
    const firstSlide = currIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };

  const nextSlide = () => {
    const lastSlide = currIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  const gotoSlide = (slideIndex) => {
    setCurrIndex(slideIndex);
  };

  return (
    <div className="mt-16 hidden md:block max-w-[1920px] h-[400px] w-full bg-black    relative group">
      <div
        style={{ backgroundImage: `url(${slides[currIndex].url})` }}
        className="w-full h-full  bg-contain transition-transform duration-500 bg-no-repeat  "
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="text-2xl cursor-pointer"
            onClick={() => gotoSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
