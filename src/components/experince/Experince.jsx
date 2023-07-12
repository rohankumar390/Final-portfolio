import React from "react";
import "./experinace.css";
import suvidha from "../images/suvidha.png"
import oasis from "../images/oasis.png"
const Experince = () => {
  return (
    <div className="experience ">
      <h1>Past Experience </h1>

      <section class="articles">

        <article>
          <div class="article-wrapper">
            <figure className="">
              <img alt="" src={oasis} />
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
        <article>
          <div class="article-wrapper">
            <figure className="">
              <img alt="" src={suvidha} />
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
