import React from "react";
import reviews from "./reviews.json";
import Myfeedback from "./Myfeedback";

const Feedbacklist = () => {
  return (
    <div>

      <h1 className="text-center text-3xl my-5">Student Feedbacks</h1>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {reviews.map((review, index) => (
          <Myfeedback
            key={review.id}
            name={review.name}
            image={review.image}
            message={review.message}
            Color={index % 2 === 0 ? "#F2d7ff" : "#fafafa"}
            qcolor={index % 2 === 0 ? "#DB91FD" : " #D0d0d1"}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedbacklist;
