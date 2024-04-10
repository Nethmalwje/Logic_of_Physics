import React, { useState } from "react";
import uploadarea from "./upload_area.svg";

const Form = () => {
  const [feedbackDetails, setfeedbackDetails] = useState({
    name: "",
    email: "",
    message: "",
    image: "",
  });

  const [image, setImage] = useState(false);

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dropHandler = (e) => {
    e.preventDefault();
    setImage(e.dataTransfer.files[0]);
  };
  const formHandler = (e) => {
    setfeedbackDetails({ ...feedbackDetails, [e.target.name]: e.target.value });
  };

  const addFeedback = async () => {
    let responseData;
    let feedback = feedbackDetails;
    let formdata = new FormData();
    formdata.append("feedback", image);
    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },

      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success === 1) {
      feedback.image = responseData.image_url;
    }
    await fetch("http://localhost:4000/addfeedback", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    });
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={addFeedback}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={feedbackDetails.name}
              onChange={formHandler}
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={feedbackDetails.email}
              onChange={formHandler}
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div
            className="imageinput"
            onDragOver={dragOverHandler}
            onDrop={dropHandler}
          >
            <label htmlFor="productimage" className="upload-icon">
              <img
                src={image ? URL.createObjectURL(image) : uploadarea}
                alt=""
                style={{ height: "120px", margin: "20px 0px" }}
              />
            </label>
            <input
              onChange={imageHandler}
              type="file"
              name="image"
              id="productimage"
              className="file-input"
              hidden
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              value={feedbackDetails.message}
              onChange={formHandler}
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
