import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <div className="skill">
      <h1>Skills</h1>
      <li>
        <h3>HTML/CSS</h3>
        <span className="bar">
          <span className="html"></span>
        </span>
      </li>
      <li>
        <h3>JAVASCRIPT</h3>
        <span className="bar">
          <span className="js"></span>
        </span>
      </li>
      <li>
        <h3>MERN</h3>
        <span className="bar">
          <span className="mern"></span>
        </span>
      </li>
      <li>
        <h3>REACT</h3>
        <span className="bar">
          <span className="react"></span>
        </span>
      </li>
    </div>
  );
};

export default Skills;
