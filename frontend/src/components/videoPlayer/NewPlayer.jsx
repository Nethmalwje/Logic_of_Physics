import React from "react";
import axios from "axios";

function NewPlayer() {
  const video = {
    title: "Example Title",
    link: " https://uniofmora-my.sharepoint.com/personal/wijesinghewhmcn_21_uom_lk/_layouts/15/embed.aspx?UniqueId=a62187b0-634b-427b-a2b3-3f2baf83417f&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
    description: "This is an example video description.",
  };

  return (
    <div className="flex flex-col md:flex-row pt-5 px-5 gap-8 max-w-7xl mx-auto">
      <div className="basis-2/3 bg-black ">
        <div className="relative grow-0" style={{ paddingTop: "56.25%" }}>
          {/* The aspect ratio for 16:9 video */}
          <iframe
            title="Video Player"
            className="absolute inset-0 w-full h-full"
            src={video.link}
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
        <div className="bg-red-200">
          <div className="text-gray-700 mt-4 text-2xl">
            {video.title} {/* Render video title */}
          </div>
          <p className="text-gray-700 mt-4 text-wrap ">
            {" "}
            https://uniofmora-my.sharepoint.com/personal/wijesinghewhmcn_21_uom_lk/_layouts/15/embed.aspx?UniqueId=a62187b0-634b-427b-a2b3-3f2baf83417f&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create
          </p>{" "}
          {/* Render video description */}
        </div>
      </div>
      <div className="basis-1/3 bg-red-600 shrink-0">abc</div>
    </div>
  );
}

export default NewPlayer;
