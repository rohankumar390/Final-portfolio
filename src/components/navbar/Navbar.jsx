import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";
import logo from "../images/logo.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="navBar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="#Home" smooth>
              <img src={logo} alt="logo" />
            </Link>

            <div className="links-container show-container">
              <ul className="links">
                <li>
                  <Link to="#Home" smooth>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#Resume" smooth>
                    Resume
                  </Link>
                </li>
                <li>
                  <Link to="#skills" smooth>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="#Project" smooth>
                    Projects
                  </Link>
                </li>

                <li>
                  <Link to="#contact-main" smooth>
                    Contact Me
                  </Link>
                </li>
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://github.com/Akashdogra171"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub style={{ color: "white", cursor: "pointer" }} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/akashdogra171/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
