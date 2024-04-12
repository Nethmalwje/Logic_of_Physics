import React from "react";
import { Link } from "react-router-dom";
import mech from "./mech.png";
import elec from "./electricity.png";
import thermo from "./thermo.png";
import light from "./prism.png";
import robot from "./fullimg.png";
import energy from "./energy.png";
import manage from "./management.png";

const CardJson = [
  {
    icon: mech,
    title: "Mechanics",
    titleSin: "යාන්ත්‍ර විද්‍යාව",
    desc: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
  },
  {
    icon: light,
    title: "Light",
    titleSin: "යාන්ත්‍ර විද්‍යාව",
    desc: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
  },
  {
    icon: thermo,
    title: "Thermo",
    titleSin: "යාන්ත්‍ර විද්‍යාව",
    desc: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
  },
  {
    icon: elec,
    title: "Electricity",
    titleSin: "යාන්ත්‍ර විද්‍යාව",
    desc: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
  },
  {
    icon: manage,
    title: "Electronics",
    titleSin: "යාන්ත්‍ර විද්‍යාව",
    desc: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
  },
  // {
  //   icon: energy,
  //   title: "Energy and Mass",
  //   titleSin: "යාන්ත්‍ර විද්‍යාව",
  //   desc: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
  // },
  // {
  //   icon: manage,
  //   title: "Business",
  //   titleSin: "යාන්ත්‍ර විද්‍යාව",
  //   desc: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
  // },
];
function PopularLssons(params) {
  return (
    <div className="container h-full w-full  overflow-hidden  py-12">
      {/* <div className="px-5 xl:px-0 max-w-3xl lg:max-w-5xl xl:max-w-5xl w-full mx-auto relative">
        <div className="flex justify-start items-end my-5 xl:my-20">
          <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:-right-32 md:left-auto xl:-right-80 xl:-top-20 md:-top-5 lg:-right-28 lg:-top-14 ">
            <img
              src="/assets/e-learning/background.png"
              alt=""
              className="relative md:max-w-[500px] lg:max-w-[600px] xl:max-w-[650px] hidden md:block"
            />
            <img
              src="/assets/e-learning/mobileback.png"
              alt="mobileback"
              className="relative -bottom-72 md:hidden block max-w-[343px] sm:max-w-[400px]"
            />
          </div>
        </div>
        <div className="pt-56 md:pt-0 grid sm:grid-cols-2 lg:grid-cols-5 gap-5 my-24 lg:my-32 place-items-center sm:place-items-stretch"> */}
      {/* <div className="hover:drop-shadow-2xl w-full bg-gradient-to-r from-purple-500 to-blue-600 sm:max-w-xs rounded-xl px-10 py-5 text-white text-xl font-extrabold leading-8 shadow-xl">
            Check out our most popular courses!
          </div> */}
      {/* {CardJson.map((data, index) => {
            return (
              <div
                key={index}
                className="shadow-xl hover:drop-shadow-2xl relative bg-white sm:max-w-xs rounded-xl px-5 py-5 flex flex-col gap-4"
              >
                <img className="absolute -top-12" src={data.icon} alt="icon" />
                <h1 className="text-[#13183f] font-extrabold text-xl text-center">
                  {data.title}
                </h1>
                <h1 className="text-[#13183f] font-extrabold text-lg text-center">
                  යාන්ත්‍ර විද්‍යාව
                </h1>
                <image src={mech} alt="image" className="h-12 w-12"></image> */}
      {/* <p className="text-[#83869a] min-h-[80px]">{data.desc}</p> */}
      {/* <div>
                  <Link to="/lesson">
                    <button className="text-pink-600 font-extrabold leading-7 ">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="text-3xl font-bold mb-8">Popular Lessons</div>
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-medium">All Categories</div>
          <a href="#" className="text-indigo-500 hover:text-indigo-700">
            Explore our Popular Categories
          </a>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center">
            <span className="text-xl font-medium mb-2">Mechanics</span>
            <span className="text-gray-500">38 Courses</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center">
            <span className="text-xl font-medium mb-2">Thermo</span>
            <span className="text-gray-500">38 Courses</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center">
            <span className="text-xl font-medium mb-2">Electronics</span>
            <span className="text-gray-500">38 Courses</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center">
            <span className="text-xl font-medium mb-2">Videography</span>
            <span className="text-gray-500">38 Courses</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center">
            <span className="text-xl font-medium mb-2">Photography</span>
            <span className="text-gray-500">38 Courses</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center">
            <span className="text-xl font-medium mb-2">Marketing</span>
            <span className="text-gray-500">38 Courses</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center">
            <span className="text-xl font-medium mb-2">Content Writing</span>
            <span className="text-gray-500">38 Courses</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center">
            <span className="text-xl font-medium mb-2">Finance</span>
            <span className="text-gray-500">38 Courses</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center">
            <span className="text-xl font-medium mb-2">Science</span>
            <span className="text-gray-500">38 Courses</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center">
            <span className="text-xl font-medium mb-2">Network</span>
            <span className="text-gray-500">38 Courses</span>
          </div>
        </div>
      </div> */}
      {/* //new code  */}

      {/* <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-slate-600">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 font-bold">Accountant</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* <div
        key="1"
        className="shadow-xl hover:drop-shadow-2xl relative bg-white sm:max-w-xs rounded-xl px-5 py-5 flex flex-col gap-4"
      >
        <img className="absolute -top-12" src="{data.icon}" alt="icon" />
        <h1 className="text-[#13183f] font-extrabold text-xl text-center">
          title
        </h1>
        <h1 className="text-[#13183f] font-extrabold text-lg text-center">
          යාන්ත්‍ර විද්‍යාව
        </h1>
        <image src={mech} alt="image" className="h-12 w-12"></image> */}
      {/* <p className="text-[#83869a] min-h-[80px]">{data.desc}</p> */}
      {/* <div>
          <Link to="/lesson">
            <button className="text-pink-600 font-extrabold leading-7 ">
              Get Started
            </button>
          </Link>
        </div>
      </div> */}
      {/* <div className="container grid lg:grid-cols-4  sm:grid-cols-3 md:grid-cols-4 gap-8  px-10 py-3  ">
        <div className="bg-blue-50 rounded-xl hover:drop-shadow-2xl sahdow-xl h-48 flex flex-col items-center place-content-center transform motion-safe:hover:scale-110 duration-300">
          xys
        </div>
        <div className="bg-blue-50 rounded-xl hover:drop-shadow-2xl sahdow-xl h-48 flex flex-col items-center place-content-center transform motion-safe:hover:scale-110 duration-300">
          xys
        </div>
        <div className="bg-blue-50 rounded-xl hover:drop-shadow-2xl sahdow-xl h-48 flex flex-col items-center place-content-center transform motion-safe:hover:scale-110 duration-300">
          <img className="w-10 h-10 mb-4" src={mech} alt="icon" />
          <h1 className="text-[#13183f]  font-extrabold text-lg text-center">
            Mechanics
          </h1>
          <h1 className="text-[#13183f] font-extrabold text-lg text-center">
            යාන්ත්‍ර විද්‍යාව
          </h1>
          <div>
            <Link to="/lesson">
              <button className="text-pink-600 font-extrabold leading-7 ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-blue-50 rounded-xl hover:drop-shadow-2xl sahdow-xl h-48 flex flex-col items-center place-content-center transform motion-safe:hover:scale-110 duration-300">
          xys
        </div>
        <div className="bg-blue-50 rounded-xl hover:drop-shadow-2xl sahdow-xl h-48 flex flex-col items-center place-content-center transform motion-safe:hover:scale-110 duration-300">
          xys
        </div>
      </div> */}

      {/* new code */}
      <div className="container px-10">
        <div className="text-3xl font-bold mb-3">Popular Lessons</div>
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-xl">සියලු පාඩම්</div>
          <a
            className=" rounded-xl group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
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

            <span className="text-sm font-medium transition-all group-hover:ms-4">
              {" "}
              All categories{" "}
            </span>
          </a>
          {/* <a href="#" className="text-indigo-500 hover:text-indigo-700">
            Explore our Popular Categories
          </a> */}
        </div>
      </div>
      <div className="container grid lg:grid-cols-5  sm:grid-cols-3 md:grid-cols-4 gap-8  px-10 py-3  ">
        {CardJson.map((data, index) => {
          return (
            <div className="bg-blue-50 rounded-xl hover:drop-shadow-xl sahdow-lg h-48 flex flex-col items-center place-content-center transform motion-safe:hover:scale-110 duration-300">
              <img className="w-10 h-10 mb-4" src={data.icon} alt="icon" />
              <h1 className="text-[#13183f]  font-extrabold text-lg text-center">
                {data.title}
              </h1>
              <h1 className="text-[#13183f] font-extrabold text-lg text-center">
                {data.titleSin}
              </h1>
              <div>
                <Link to="/lesson">
                  <button className="text-pink-600 font-extrabold leading-7 ">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularLssons;
