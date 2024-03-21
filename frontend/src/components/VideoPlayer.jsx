import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function VideoPlayer() {
  const [video, setVideo] = useState("");
  const [titles, setTitle] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [clicked, setClicked] = useState();
  const { courseID } = useParams();

  const client = axios.create({
    baseURL: "http://localhost:4000/",
  });

  const fetchData = async () => {
    try {
      const response = await client.get(`courses/${courseID}`);
      setTitle(response.data.videos);
      setQuiz(response.data.quizes);
      setVideo(response.data.videos[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error, such as displaying an error message to the user
    }
    // const response = await client.get(`courses/${courseID}`);
    // setTitle(response.data.videos);
    // setQuiz(response.data.quizes);

    // console.log(titles);
    // setVideo(response.data.videos[0]);
  };

  useEffect(() => {
    //const courseID = 1;
    fetchData();
  }, [courseID]);

  const sortedTitles = titles.sort((a, b) => a.video_num - b.video_num);

  function handleClick(clickedVideo) {
    setVideo(clickedVideo);
  }
  function handleClickQuiz() {
    setClicked(!clicked);
  }

  return (
    <div className="pt-5 px-5">
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12">
        <div className="flex-shrink-0 w-full md:w-2/3">
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            {/* The aspect ratio for 16:9 video */}
            <iframe
              title="Video Player"
              className="absolute inset-0 w-full h-full"
              src={video.link}
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>

          <h1 className="text-gray-700 mt-4">
            {video.title} {video.link}
          </h1>
          <p className="text-gray-700 mt-4">{video.description}</p>
        </div>
        <div className="w-full md:w-1/3">
          {/* List of Next Videos */}
          <h2 className="text-xl font-semibold mb-4">Next Videos</h2>
          <ul className="divide-y divide-gray-300">
            {/* Example next video items */}
            {sortedTitles.map((videotitle) => (
              <li className="py-2">
                <a
                  href="#"
                  className="flex items-center gap-2"
                  onClick={() => handleClick(videotitle)}
                >
                  <img
                    src="https://via.placeholder.com/64"
                    alt="Next Video Thumbnail"
                    className="w-16 h-16 rounded-lg"
                  />
                  <span className="text-gray-800">{videotitle.title}</span>
                </a>
              </li>
            ))}

            {/* Add more next video items as needed */}
          </ul>
          <h2 className="text-xl font-semibold mb-4 mt-3">Quizes {courseID}</h2>
          <ul className="divide-y divide-gray-300">
            {/* Example next video items */}
            {quiz.map((quiztitle) => (
              <li className="py-2">
                <a
                  href="#"
                  className="flex items-center gap-2"
                  onClick={handleClickQuiz}
                >
                  <img
                    src="https://via.placeholder.com/64"
                    alt="Next Video Thumbnail"
                    className="w-16 h-16 rounded-lg"
                  />
                  <span className="text-gray-800">{quiztitle.quizid}</span>
                </a>
              </li>
            ))}

            {/* Add more next video items as needed */}
          </ul>
        </div>
      </div>

      {/* {popup msg when taking the quiz.............................} */}
      <div
        className={`${clicked ? "fixed inset-0 bg-black bg-opacity-75" : ""}`}
      >
        <Popup
          trigger={<div />}
          open={clicked}
          modal
          nested
          closeOnDocumentClick={false}
        >
          {(close) => (
            <div className="rounded-lg bg-white p-8 shadow-2xl ">
              <h2 className="text-lg font-bold">
                Are you sure you want to do that?
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Doing that could have cause some issues elsewhere, are you 100%
                sure it's OK?
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                >
                  Yes, I'm sure
                </button>

                <button
                  onClick={handleClickQuiz}
                  type="button"
                  className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
                >
                  No, go back
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}

export default VideoPlayer;
