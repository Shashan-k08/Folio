import React from "react";
import "./Home.css";
import { useTypewriter } from "react-simple-typewriter";
import cf from "../img/cf.png";
import lt from "../img/lt.png";
import gfg from "../img/gfg.png";
const Home = () => {
  const [text] = useTypewriter({
    words: [
      " Full-stack Engineer.",
      " Software Developer.",
      " Competitive Programmer.",
    ],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div className="container1 container f_flex  hero" id="home">
      <div className="container2 container20 left ">
        <span className="headline">Hello</span>
        <h1>
          I'm<span className="headline-text"> Shashank Tiwari</span>
        </h1>
        <p>
          a<span>{text}</span>
        </p>

        <div className="hero_btn d_flex">
          <div className="col_1">
            <h4>FIND ME ON</h4>
            <div className="button">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/shashank-tiwari-9a7ba0239/"
                title="LinkedIn"
              >
                <button className="btn_shadow">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Shashan-k08"
                title="GitHub"
              >
                <button className="btn_shadow">
                  <i className="fab fa-github"></i>
                </button>
              </a>
              
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codeforces.com/profile/Ivaan64"
                title="Codeforces"
              >
                <button className="btn_shadow">
                  <img src={cf} alt="" />
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.geeksforgeeks.org/user/shashan_k08/"
                title="GeeksforGeeks"
              >
                <button className="btn_shadow">
                  <img src={gfg} alt="" />
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://leetcode.com/u/shashan_k/"
                title="LeetCode"
              >
                <button className="btn_shadow">
                  <img src={lt} alt="" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
