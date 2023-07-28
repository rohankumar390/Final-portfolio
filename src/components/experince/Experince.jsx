import React from "react";
import "./experinace.css";
import opiant from "../images/opiant.png"
import oasis from "../images/oasis.png"
const Experince = () => {
  return (
    <div className="experience ">
      <h1>Past Experience </h1>

      <section class="articles">

        <article>
          <div class="article-wrapper">
            <figure className="fig-1">
              <img alt="" src={oasis} />
            </figure>
            <div class="article-body">
              <h2>Web Development Intern</h2>
              <p>
              During my enriching journey as a Web Development Intern, I had the privilege of immersing myself in the dynamic and ever-evolving world of technology and innovation.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure className="fig-2">
              <img alt="" src={opiant} />
            </figure>
            <div class="article-body">
              <h2>Web Development Intern</h2>
              <p>
                As a Web Development Intern, I worked on the frontendend side of
                the website on individual basis. I completley resdesgined the
                frontend of the the Website from scratch.
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Experince;
