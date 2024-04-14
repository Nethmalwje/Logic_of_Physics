import React, { useState, useEffect } from "react";

const Youtube = () => {
  const [latestVideos, setLatestVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCpojNDkeKhD_y2XcOPEVaWg&maxResults=10&order=date&key=AIzaSyCcBIPCxilGhHCaQkkaFMfuo8ebAFgpwMg";
        const response = await fetch(url);
        const data = await response.json();
        setLatestVideos(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-5 lg:grid-cols-3">
      {latestVideos.map((video, i) => (
        <div
          key={i}
          className="  m-5 hover:bg-[#f9e6ff] transition-colors duration-500 rounded-2xl shadow-md"
        >
          <iframe
            className="  w-full h-[300px] rounded-2xl  "
            src={`https://www.youtube.com/embed/${video.id.videoId}?si=RumYgf52OFbGNgSU`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <h3 className="mt-3 text-lg font-bold text-gray-900 sm:text-xl p-3">
            {video.snippet.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Youtube;
