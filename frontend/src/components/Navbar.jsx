import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="  fixed z-10 top-0 left-0 w-full py-0 mt-0 sm:mt-0 ">
      <header className="bg-violet-50">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-8 lg:px-8">
          <div className=" flex h-16 items-center justify-between">
            <div className="md:gap-12">logo</div>
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm ">
                  <li className="cursor-pointer">
                    <a className="text-gray-800 transition hover:text-gray-800/75">
                      {" "}
                      content
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a className="text-gray-800 transition hover:text-gray-800/75">
                      {" "}
                      content
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a className="text-gray-800 transition hover:text-gray-800/75">
                      {" "}
                      content
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <Link to={`/lesson`}>
                      {" "}
                      <a className="text-gray-800 transition hover:text-gray-800/75">
                        {" "}
                        LMS
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="gap-4 flex">
              <Link to="/Login">
                {" "}
                <button className="btn btn-purple hover:bg-bookmark-white hover:text-bookmark-purple ">
                  Login
                </button>
              </Link>
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
