import React from "react";
import "./myfeedback.css";

const Myfeedback = (props) => {
  return (
    <div className="feedbackcontainer" style={{ backgroundColor: props.Color }}>
      <div className="top">
        <div className="image">
          <img src={props.image} alt="" />
        </div>
        <div className="flex flex-col font-bold ml-3">
          <div className="name text-xl">{props.name}</div>
          <div>
            Bsc Engineering <br /> university of Moratuwa
          </div>
        </div>
      </div>

      

      <div className="feedback text-slate-900 text-[17px]">
        <i style={{color:props.qcolor}} class="fa-solid mr-2 fa-quote-left text-3xl"></i>
        {props.message}
        <i style={{color:props.qcolor}} class="fa-solid fa-quote-right ml-2 text-3xl"></i></div>
    </div>
  );
};

export default Myfeedback;
