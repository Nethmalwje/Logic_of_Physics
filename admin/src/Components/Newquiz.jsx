// Newquiz.js
import React from "react";

function Newquiz(props) {
  const validHandler = (e) => {
    const selected = parseInt(e.target.value);
    props.onAnswerChange(props.index, selected);
  };

  return (
    <div className="grid grid-cols-3 gap-2 mt-10 mx-auto rounded-lg w-3/4">
      <div className="col-span-4 bg-white rounded-md shadow-lg">
        <div className="p-6">
          <h3 className="text-lg font-semibold">{`Question ${props.id}`}</h3>
          <p className="mt-3 text-gray-700">
            How to position your furniture for positivity?
          </p>
        </div>
        <div>
          <img
            alt=""
            src={props.image}
            className="h-auto w-4/5 object-cover mx-auto"
          />
        </div>
        <div className="p-6">
          <p className="mb-3">Select your answer:</p>

          <div className="flex justify-around">
            {[1, 2, 3, 4].map((option) => (
              <div  key={option}>
                <input
                  type="radio"
                  id={`option-${props.id}-${option}`}
                  name={`option-${props.id}-${option}`}
                  value={option}
                  className="mt-3"
                  onChange={validHandler}
                />
                <label htmlFor={`option-${props.id}-${option}`} className="ml-2">
                  Option {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newquiz;
