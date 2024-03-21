import React from "react";
import Navbar from "./Navbar";

function CoursePage() {
  return (
    <div className="flex p-3 h-screen">
      <Navbar />
      <div className="bg-purple-500 w-1/6 flex flex-col mr-3">
        <div className="bg-red-500 flex-grow">
          {/* Video Player */}
          <div className="relative w-full h-full">
            <iframe
              src="https://uniofmora-my.sharepoint.com/personal/wijesinghewhmcn_21_uom_lk/_layouts/15/embed.aspx?UniqueId=d01b4c3e-f321-410b-a0bc-5fd71ea6d1a1&embed=%7B%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="abc.mp4"
            ></iframe>
          </div>
        </div>
        <div className="bg-blue-200 h-1/6">Description</div>
      </div>
      <div className="bg-slate-600 w-1/6">Video List</div>
    </div>
  );
}

// <div className="mt-10 flex mx-auto rounded-lg p-5">
//   <div className="flex-1 mr-2">
//     <div className="bg-slate-100 shadow-xl rounded-xl p-4 w-full aspect-w-16 aspect-h-9">
//       <iframe
//         src="https://uniofmora-my.sharepoint.com/personal/wijesinghewhmcn_21_uom_lk/_layouts/15/embed.aspx?UniqueId=d01b4c3e-f321-410b-a0bc-5fd71ea6d1a1&embed=%7B%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
//         width="100%"
//         height="100%"
//         frameBorder="0"
//         scrolling="no"
//         allowFullScreen
//         title="abc.mp4"
//       ></iframe>
//     </div>
//     <div className="bg-slate-100 shadow-xl rounded-xl p-4 mt-2">
//       Description and Title
//     </div>
//   </div>
//   <div className="flex-1 ml-2">
//     <a
//       className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
//       href="#"
//     >
//       <span className="absolute -start-full transition-all group-hover:start-4">
//         <svg
//           className="w-5 h-5 rtl:rotate-180"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M17 8l4 4m0 0l-4 4m4-4H3"
//           />
//         </svg>
//       </span>
//       <span className="text-sm font-medium transition-all group-hover:ms-4">
//         Download
//       </span>
//     </a>
//   </div>
// </div>

export default CoursePage;
