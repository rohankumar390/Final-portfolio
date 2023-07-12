import React from "react";
import "./projects.css";

import p1 from "../images/p1.jpeg";
import p2 from "../images/p2.jpeg";
import p3 from "../images/p33.png";

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
            <h3>Gym Application</h3>
            <p>
              Developed a Front-End web application using with React Using Rapid
              API. Integrated Rapid API to fetch gym related data, including
              <br />
              <form action=""></form>
              workout plans, exercise tutorials, and nutrition tips.
            </p>
            <button className="project-b4">
              <a href="https://deluxe-mochi-4e76ab.netlify.app/" target="blank">
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
            <h3>Social Media Clone</h3>
            <p>
              Developed astatic social media clone using React, replicating the
              core features and user interface of popular social media
              platforms.
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
            <h3>News Monkey</h3>
            <p>
              Developed a dynamic and user-friendly News Monkey application
              utilizing React, demonstrating proficiency in front-end web
              development, component-based architecture, and responsive design
            </p>
            <button className="project-b4">
              <a href="https://dograsocial.netlify.app/" target="blank">
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
