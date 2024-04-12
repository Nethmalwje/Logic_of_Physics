import React from "react";
import VideoPlayer from "./VideoPlayer";
import Navbar from "../Navbar";
import NewPlayer from "./NewPlayer";

function VideoPage() {
  return (
    <div>
      <Navbar />
      <div className="mt-20 max-w-7xl mx-auto">
        <VideoPlayer />
      </div>

      {/* <NewPlayer /> */}
    </div>
  );
}

export default VideoPage;
