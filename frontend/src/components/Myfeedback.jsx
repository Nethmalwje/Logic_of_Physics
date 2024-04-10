import React from "react";
import "./myfeedback.css";

const Myfeedback = (props) => {
  return (
    <div className="feedbackcontainer">
      <div className="top">
        <div className="image">
          <img src={props.image} alt="" />
        </div>
        <div className="name">{props.name}</div>
      </div>
      <div className="feedback">{props.message}</div>
    </div>
  );
};

export default Myfeedback;
