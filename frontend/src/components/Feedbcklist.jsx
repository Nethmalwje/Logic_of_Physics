import React, { useEffect, useState } from "react";

import Myfeedback from "./Myfeedback";

const Feedbacklist = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    const getFeedbackList = async () => {
      const response = await fetch("http://localhost:4000/getfeedbacks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFeedbacks(data);
      } else {
        // Handle errors here, for example, by setting an error state or logging to console
        console.error("Failed to fetch feedbacks");
      }
    };
    getFeedbackList();
  }, []);
  return <div className="flex flex-wrap mx-7 justify-center " style={{gap:'20px'}} >
    {feedbacks.map((feedback,index)=> <Myfeedback key ={index} name ={feedback.name} message ={feedback.message} image={feedback.image}/>)}
  </div>;
};

export default Feedbacklist;
