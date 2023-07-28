import React from "react";
import "./projects.css";

import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";

const Project = () => {
  return (
    <div id="Project">
      <div className="heading">
        <h1>My Projects</h1>
      </div>

      <div className="pro">
        {/* card 1 start here */}
        <div className="card">
          <div className="imgbox">
            <img src={p1} alt="" />
          </div>
          <div className="content">
            <h3>Filter Gallery</h3>
            <p>
              Developed a filter gallery using javscript in which there are different section in which the photos are arranged properly !
              <br />
            </p>
            <button className="project-b4">
              <a href="https://rohankumar390.github.io/Filter-Gallery/" target="blank">
                See Here
              </a>
            </button>
          </div>
        </div>
        {/* card 2 start here */}
        <div className="card">
          <div className="imgbox">
            <img src={p2} alt="" />
          </div>
          <div className="content">
            <h3>CodePen Clone</h3>
            <p>
              Developed a code editor as a clone of Codepen which enables the user to execute the code online .
            </p>
            <button className="project-b4">
              <a href="https://dograsocial.netlify.app/" target="blank">
                See Here
              </a>
            </button>
          </div>
        </div>
        {/* card 3 start here */}
        <div className="card">
          <div className="imgbox">
            <img src={p3} alt="" />
          </div>
          <div className="content">
            <h3>Temperature Converter</h3>
            <p>
              Developed a Temperature Converter which is used to convert the temperature dynamically with fahrenheit to celsius and vice-versa.
            </p>
            <button className="project-b4">
              <a href="https://rohankumar390.github.io/temperatureConvertor/" target="blank">
                See Here
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
