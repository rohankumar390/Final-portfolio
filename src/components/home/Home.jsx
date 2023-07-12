import React from "react";
import "./home.css";
import myimage from "../images/NewImg.png";

const Home = () => {
  return (
    <div>
      <div id="Home">
        <div className="home-txt">
          <div>
            <h1>I'm a creative web developer</h1>
            <div className="home-lines">
              <h3>
                Elevate your Online Presence with Innovative Web Development
              </h3>
            </div>
            <div>
              <a id="emailMe" href="mailto:akashdogra171@gmail.com">
                <button className="button-34">Connect with me</button>
              </a>
            </div>
          </div>
        </div>
        <div className="home-img">
          <img src={myimage} alt="profile pic" />
        </div>
      </div>
    </div>
  );
};
export default Home;
