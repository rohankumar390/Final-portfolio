import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import {
  FaWhatsapp,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5d6yvse",
        "template_xt965vl",
        form.current,
        "HDPLYeYhjZMnieruk"
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <div id="contact-main">
      <div className="contHeading">
        <h1>Contact Me</h1>
      </div>

      <div class="wrapper">
        <ul>
          {/* <li class="facebook" target="_blank" rel="noreferrer">
            <a href="#">
              <FaFacebook
                className="brandIcon"
                style={{ fontSize: "50", color: "black", cursor: "pointer" }}
                onMouseOver={({ target }) => (target.style.color = "#3b5998")}
              />
            </a>
          </li> */}
         
          <li class="instagram">
            <a
              href="https://www.instagram.com/rohankumar890/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                className="brandIcon"
                style={{ fontSize: "50", color: "black", cursor: "pointer" }}
                onMouseOver={({ target }) => (target.style.color = "#bc2a8d")}
              />
            </a>
          </li>
          <li class="google">
            <a
              id="emailMe"
              href="mailto:rohanyt74@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope
                className="brandIcon"
                style={{ fontSize: "50", color: "black", cursor: "pointer" }}
                onMouseOver={({ target }) => (target.style.color = "#dd4b39")}
              />
            </a>
          </li>
          <li class="whatsapp">
            <a href="https://wa.me/6280533763" target="_blank" rel="noreferrer">
              <FaWhatsapp
                className="brandIcon"
                style={{ fontSize: "50", color: "black", cursor: "pointer" }}
                onMouseOver={({ target }) => (target.style.color = "#4dc247")}
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="form">
        <form action="" className="entry" onSubmit={sendEmail} ref={form}>
          <div className="inputDiv">
            <input
              className="input ip1"
              name="name"
              type="text"
              placeholder="Name"
            ></input>

            <input
              className="input ip2"
              name="user-email"
              type="text"
              placeholder="Email"
            ></input>
          </div>
          <br />

          <input
            className="message subject"
            type="text"
            placeholder="Subject"
          ></input>
          <br />

          <textarea
            name="message"
            id="Message"
            cols="93"
            rows="15"
            placeholder="Message"
          ></textarea>
          <br />

          <button className="contact-b4">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
