import React from "react";
import { useState } from "react";
import "./Header.css";
const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header"); //element with class "header" selected
    header.classList.toggle("active", window.scrollY > 100); // active class is added and removed because of classList.toggle
  });

  const [ismobile, setMobile] = useState(false);

  return (
    <header className="header">
      <div className="container d_flex">
        <div className="logo">
          folio <b>.</b>
        </div>
        <div className="navlink">
          <ul
            className={ismobile ? "nav-links-mobile" : "link f_flex uppercase"}
          >
            <li>
              {" "}
              <a href="#home">HOME</a>
            </li>
            <li>
              {" "}
              <a href="#about">ABOUT</a>
            </li>
            <li>
              {" "}
              <a href="#skill">SKILLS</a>
            </li>
            <li>
              {" "}
              <a href="#project">PROJECTS</a>
            </li>
            <li>
              {" "}
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
          <button className="toggle" onClick={() => setMobile(!ismobile)}>
            {ismobile ? (
              <i className="fas fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
