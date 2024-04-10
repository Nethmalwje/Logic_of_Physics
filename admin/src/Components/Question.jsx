import React ,{useState} from 'react'
import uploadarea from "./upload_area.svg";
import { useParams } from 'react-router-dom';

const Question = () => {

  const {quizid}  = useParams() 
    const [questionDetails, setQuestionDetails] = useState({

       quizid:parseInt(quizid),
        image: "",
        answer:''
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
        setQuestionDetails({ ...questionDetails, [e.target.name]: e.target.value });
      };
    
      const addQuestion = async (e) => {
        e.preventDefault();
        let responseData;
        let question = questionDetails;
        let formdata = new FormData();
        formdata.append("Qimage", image);
        await fetch("http://localhost:4000/Qupload", {
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
          question.image = responseData.image_url;
        }
        await fetch("http://localhost:4000/addQuestion", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(question),
        });
      };
    
      return (
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={addQuestion}>
              
              <div
                className="imageinput"
                onDragOver={dragOverHandler}
                onDrop={dropHandler}
              >
                <label htmlFor="productimage" className="upload-icon">
                  <img
                    src={image ? URL.createObjectURL(image) : uploadarea}
                    alt=""
                    style={{ height: "200px", width:"600px", margin: "20px 0px",objectFit:"cover"  }}
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
                  htmlFor="answer"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Answer
                </label>
                <textarea
                  rows="1"
                  name="answer"
                  type='number'
                  id="answer"
                  value={questionDetails.answer}
                  onChange={formHandler}
                  placeholder="Type the answer"
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
}

export default Question
