import React from "react";
const Testamonials = () => {
  const testimonialsData = [
    {
      quote:
        "“මම ඉගෙනගෙන මුදල් මහන්සියක් ලෙස ගණනාවක් ලබාගෙන එය සඳහා ජනතාවගේ බහුලව යොමු කිරීමේ සේවාවක්හමු කර ගැනීමට පිවිසෙනවා.",
      author: "Laila Bahar",
      role: "Designer",
      imageSrc:
        "https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb5e3ea08ab4c244194a_Ellipse%205-4.png",
    },
    {
      quote:
        "“මම මෙම සේවාවට බැරිසියක් පවතින බවට අදහස් කිරීමට අවශ්‍යයි නමුත් මෙම සේවාව මම හිතනවා පවතින බවට අදහස් කිරීමට අවශ්‍යයි.",
      author: "එලුගලේ වසන්ත",
      role: "Webflow Designer",
      imageSrc:
        "https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb67bf1bca198e298c35_Ellipse%205-2.png",
    },
    {
      quote:
        "“මම ඉගෙනගෙන මුදල් මහන්සියක් ලෙස ගණනාවක් ලබාගෙන එය සඳහා ජනතාවගේ බහුලව යොමු කිරීමේ සේවාවක්හමු කර ගැනීමට පිවිසෙනවා.",
      author: "සුමනදාස මහතා",
      role: "Webflow Developer",
      imageSrc:
        "https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb614a296368b383467c_Ellipse%205-3.png",
    },
    {
      quote:
        "“මම ඉගෙනගෙන මුදල් මහන්සියක් ලෙස ගණනාවක් ලබාගෙන එය සඳහා ජනතාවගේ බහුලව යොමු කිරීමේ සේවාවක්හමු කර ගැනීමට පිවිසෙනවා.",
      author: "Nathan Smich",
      role: "Product Manager",
      imageSrc:
        "https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cfcd4e55dd261e3fce8b_Ellipse%205-5.png",
    },
    // Add more testimonials
  ];
  return (
    <section>
      {" "}
      <div className="mx-auto container w-full max-w-5xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {" "}
        {/* Title */}{" "}
        <h2 className="mb-8 text-center text-3xl font-bold md:mb-14 md:text-3xl">
          {" "}
          What our Students are saying{" "}
          <p className="font-bold text-gray-800 text-2xl">
            අපගේ ශිශ්‍යන්ගේ අදහස්...
          </p>
        </h2>{" "}
        {/* Testimonial List*/}{" "}
        <div className="pl-24">
          <ul className="grid gap-8 sm:grid-cols-2">
            {testimonialsData.map((testimonial, index) => (
              <li key={index}>
                <div className="mb-5 max-w-sm rounded-br-[99px] rounded-tl-[60px] rounded-tr-[99px] bg-[#f2f2f7] px-8 py-6 md:mb-8">
                  <p className="text-[#647084]">{testimonial.quote}</p>
                </div>
                <div className="mb-5 flex lg:mb-8">
                  <img
                    src={testimonial.imageSrc}
                    alt=""
                    className="mr-4 h-16 w-16"
                  />
                  <div className="flex flex-col">
                    <h6 className="font-bold">{testimonial.author}</h6>
                    <p className="text-sm text-[#636262]">{testimonial.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="justify-content-center mt-8">
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

              <span className="text-md font-medium transition-all group-hover:ms-4">
                {" "}
                All Revives <p className="font-bold">සියලු අදහස්...</p>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testamonials;
