import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white mt-10  ">
      

      <div className="md:flex  md:px-10">
        <div className="text-center mx-auto md:text-left  md:w-1/4">
          <div >
            <h1 className="text-2xl">Logic Of Physics</h1>

            <p className="mt-4 px-10 md:px-0 text-gray-500  ">
            The sun sets over the horizon, casting a golden glow upon the tranquil landscape. Birds chirp softly, bidding farewell to the day. A gentle breeze rustles the leaves, 
            </p>

            <ul className="mt-8 justify-center md:justify-start flex gap-6">
              <li>
                <a  href="">
                <i className="fa-brands text-xl fa-facebook className= text-gray-700 transition hover:opacity-75"></i>
                </a>
              </li>

            
              <li>
              <a  href="">
                <i className="fa-brands text-xl fa-youtube className= text-gray-700 transition hover:opacity-75"></i>
                </a>
              </li>

            </ul>
          </div>
        </div>
        <div className="w-3/4 mx-auto">
          <div className="grid grid-cols-1 mt-5 md:mt-0 gap-y-5 md:grid-cols-3 text-center">
            <div>
              <p className="font-medium text-gray-900 text-xl font-bold">
                Programs
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Quizzes{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Video Lessons{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Assignments{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Tutorials{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div>
            <p className="font-medium text-gray-900 text-xl ">Company</p>
  
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
              </li>
  
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
              </li>
  
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-gray-900 text-xl">Contact Us</p>
  
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA </a>
              </li>
  
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Tel: + (123) 2500-567-8988 </a>
              </li>
  
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Mail: supportlms@gmail.com </a>
              </li>
            </ul>
          </div>
  
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
