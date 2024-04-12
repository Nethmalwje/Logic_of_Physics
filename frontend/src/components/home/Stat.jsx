import React from "react";

function Stat() {
  return (
    <section id="Stat">
      {" "}
      <div className="container h-full w-full  overflow-hidden  py-12 ">
        {" "}
        {/* Facts Title */}{" "}
        <h2 className="text-3xl font-bold mb-3 container px-10">
          We get results
          <p className="font-bold text-gray-800 text-xl">අප සතු ප්‍රතිපල</p>
        </h2>{" "}
        {/* Facts Content */}{" "}
        <div className="grid justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          <div className="relative rounded-md p-8 md:p-10">
            <h3 className="mb-4 text-3xl font-bold text-[#276ef1] md:text-5xl">
              1.5M
            </h3>
            <p className="text-sm text-[#647084]">
              <p className="font-bold text-gray-800 text-lg">
                සිසුන් ගණනක් සහබාගී වන පිසික්ස් පාටමාලව
              </p>
              Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus
            </p>{" "}
            {/* Devider */}{" "}
            <div className="absolute bottom-0 left-auto right-0 top-[29%] hidden h-2/5 [border-right:1px_solid_rgb(230,_230,_230)] sm:block"></div>
          </div>
          <div className="relative rounded-md p-8 md:p-10">
            <h3 className="mb-4 text-3xl font-bold text-[#276ef1] md:text-5xl">
              41%
            </h3>{" "}
            {/* Devider */}{" "}
            <div className="absolute bottom-0 left-auto right-0 top-[29%] hidden h-2/5 [border-right:1px_solid_rgb(230,_230,_230)] sm:block"></div>
            <p className="text-sm text-[#647084]">
              <p className="font-bold text-gray-800 text-lg">
                ක A සාමාර්ත ලබාගැනීමේ ප්‍රතිශ්තයක්
              </p>
              Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus
            </p>
          </div>
          <div className="relative rounded-md p-8 md:p-10">
            <h3 className="mb-4 text-3xl font-bold text-[#276ef1] md:text-5xl">
              3657+
            </h3>
            <p className="text-sm text-[#647084]">
              <p className="font-bold text-gray-800 text-lg">
                වීඩියෝ පාඩම් සහ ප්‍රශ්න පත්‍ර
              </p>
              Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stat;
