import React from "react";

const FooterL = () => {
  return (
    <footer className="block">
      {" "}
      {/* Container */}{" "}
      <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-10 ">
        {" "}
        {/* Component */}{" "}
        <div className="flex flex-col items-center">
          <a href="#" className="mb-8 inline-block max-w-full text-black">
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d6f4e6cf96_Group%2047874-3.png"
              alt=""
              className="inline-block max-h-10"
            />
          </a>
          <div className="max-[991px]: text-center font-semibold max-[991px]:py-1">
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
            >
              About
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
            >
              Features
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
            >
              Works
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
            >
              Support
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
            >
              Help
            </a>
          </div>
          <div className="mb-8 mt-8 w-48 [border-bottom:1px_solid_rgb(0,_0,_0)]"></div>
          <div className="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 gap-3">
            <a
              href="#"
              className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65ff1579cbd64244573_FacebookLogo.svg"
                alt=""
                className="inline-block"
              />
            </a>
            <a
              href="#"
              className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65864ee6f4870bbe5cb_InstagramLogo.svg"
                alt=""
                className="inline-block"
              />
            </a>
            <a
              href="#"
              className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65ab9fdec6c06b596f6_SlackLogo.svg"
                alt=""
                className="inline-block"
              />
            </a>
            <a
              href="#"
              className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65b64ee6f2f15bbe5e0_TwitterLogo.svg"
                alt=""
                className="inline-block"
              />
            </a>
          </div>
          <p className="max-[479px]:text-sm">
            © Copyright 2021. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default FooterL;
