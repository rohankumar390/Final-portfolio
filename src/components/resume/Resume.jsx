import React from "react";
import "./resume.css";
import Rohan from "./Rohan.pdf";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";

const Resume = () => {
  const cnf = () => {
    alert("The file has been downloaded successfuly");
  };
  return (
    <div id="Resume">
      <div className="resume-left">
        <div className="resume-left-text">
          <h1 style={{ color: "Black" }}>Resume/CV</h1>
          <p>
            "Unveiling Excellence on Paper: <br /> A Reflection of Skills and "
          </p>
          <button className="resume-button" onClick={cnf}>
            <a href={Rohan} download>
              Download
            </a>
          </button>
          <div className="resume-icons">
            <FaCss3Alt style={{ color: "black" }} className="bounce-2" />
            <FaNodeJs style={{ color: "black" }} className="bounce-1" />
            <FaReact style={{ color: "black" }} className="bounce-3" />
          </div>
        </div>
      </div>
      <div className="resume-right">
        <embed
          src={`${Rohan}#toolbar=0&navpanes=0&scrollbar=0`}
          type="application/pdf"
          width="90%"
          height="600px"
        ></embed>
      </div>
    </div>
  );
};

export default Resume;
