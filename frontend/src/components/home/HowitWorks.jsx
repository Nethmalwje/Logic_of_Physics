import React from "react";

const HowItWorks = () => {
  return (
    <section id="HowWorks">
      {" "}
      {/* Container */}{" "}
      <div className="mx-auto container px-5 py-10 md:px-10 ">
        {" "}
        {/* Heading Div */}{" "}
        <div className="mx-auto w-full max-w-3xl">
          {" "}
          {/* Component */}{" "}
          <div className="text-center">
            <p className="uppercase text-[#1353fe]">3 easy steps</p>
            <h2 className="text-3xl font-semibold capitalize md:text-5xl">
              How it{" "}
              <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center bg-no-repeat px-4 text-white">
                works
              </span>
            </h2>
            <p className="font-bold text-gray-800 text-2xl mt-5">
              සහබාගී වන්නේ කෙසේද
            </p>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <p className="text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam,purus sit amet luctus magna fringilla urna
              </p>
            </div>
          </div>
        </div>{" "}
        {/* How it Works Div */}{" "}
        <div className="mx-auto grid grid-cols-1 gap-4 sm:justify-items-stretch md:grid-cols-3 lg:gap-8">
          {" "}
          {/* How it Works Item */}{" "}
          <div className="relative flex flex-col items-center gap-4 p-8 text-center">
            <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
              <p className="text-xl font-bold">1</p>
            </div>
            <div className="mb-2">
              <p className=" text-xl font-semibold">
                Register<br></br> and Create a account
              </p>
              <p className="font-bold text-gray-800 text-md">
                ලියාපදින්චි වී ගිනුමක් සකසාගන්න
              </p>
            </div>

            <p className="text-sm text-[#636262]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639833af1925275b6f0b43e1_Vector%2032.svg"
              alt=""
              className="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[18%] md:inline-block lg:left-auto"
            />
          </div>{" "}
          {/* How it Works Item */}{" "}
          <div className="relative flex flex-col items-center gap-4 p-8 text-center">
            <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
              <p className="text-xl font-bold">2</p>
            </div>
            <div className="mb-2">
              <p className=" text-xl font-semibold">
                Select a lesson<br></br> of your choosing
              </p>
              <p className="font-bold text-gray-800 text-md">
                අදාල පාඩම තෝරාගන්න
              </p>
            </div>
            <p className="text-sm text-[#636262]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639834731925279c5e0b4ee5_Vector%2033.svg"
              alt=""
              className="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[8%] md:inline-block lg:left-auto"
            />
          </div>{" "}
          {/* How it Works Item */}{" "}
          <div className="relative flex flex-col items-center gap-4 p-8 text-center">
            <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
              <p className="text-xl font-bold">3</p>
            </div>
            <div className="mb-2">
              <p className=" text-xl font-semibold">
                Learn and<br></br> Enjoy Physics
              </p>
              <p className="font-bold text-gray-800 text-md">
                ඉගෙනගනිමින් රසවිඳින්න
              </p>
            </div>
            <p className="text-sm text-[#636262]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
