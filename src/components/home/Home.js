import React from "react";
import profileLogo from "../img/profile2.jpg";
import "./Home.css";
import { useTypewriter } from "react-simple-typewriter";
const Home = () => {
    
  const [ text ] = useTypewriter({
    words: [
      " Full-stack Engineer.",
      " Software Developer.",
      " Competitive Programmer.",
    ],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div className="container1">
      <div className="container2 container20">
        <span className="headline">Hello</span>
        <h1>
          I'm<span className="headline-text"> Shashank</span>
        </h1>
        <p>
          a<span>{text}</span>
        </p>
        <div className="button-box1">
          <button>download cv</button>
        </div>

      </div>
      <div className="container2 container21">
        <div className="photo-box">
          <img src={profileLogo} alt="" id="pic1" />
        </div>
      </div>
    </div>
  );
};

export default Home;
