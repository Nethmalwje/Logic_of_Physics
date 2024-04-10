import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const AddVideo = () => {
  const { courseid } = useParams();
  const [videoDetails, setVideoDetails] = useState({
    videolink: '',
    title: '',
    courseid: courseid
  });

  const handleVideoData = (e) => {
    const { name, value } = e.target;
    setVideoDetails({ ...videoDetails, [name]: value });
  };

  const submitVideo = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch("http://localhost:4000/addvideo", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videoDetails),
      });
      if (response.ok) {
        console.log('Video added successfully');
        
      } else {
        console.error('Failed to add video:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding video:', error.message);
    }
  };
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={submitVideo}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Video Name
            </label>
            <input
              type="text"
              name="title"
              id="name"
              value={videoDetails.title}
              onChange={handleVideoData}
              placeholder="Video name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="videolink"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Video link
            </label>
            <input
              type="text"
              name="videolink"
              id="videolink"
              value={videoDetails.videolink}
              onChange={handleVideoData}
              placeholder="Video link"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <button
            type="submit"
            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVideo;
