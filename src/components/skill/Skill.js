import React from "react";
import "./Skill.css";
import frontend from "../img/frontend.jpg";
import backend from "../img/backend.jpg";
import general from "../img/general.jpg";

import { Fade } from "react-awesome-reveal";

const Skill = () => {
  const title_name = "< Skills />";

  return (
    <>
      <section id="skill">
        <div className="skl">
          <h1 className="title">{title_name}</h1>
          <div className="skl-cont">
            <Fade direction="left">
              <div className="skl-card">
                <img className="img-shadow" src={frontend} alt="Frontend" />
                <h2 className="card-title">Frontend</h2>
                <ul>
                  <li>React Js, Next JS</li>
                  <li>Redux ,TypeScript</li>
                  <li>HTML5, CSS3,Tailwind CSS</li>
                  <li>Material UI , Chakra UI</li>
                </ul>
              </div>
            </Fade>
            <Fade direction="top">
              <div className="skl-card">
                <img className="img-shadow" src={backend} alt="Backend" />
                <h2 className="card-title">Backend</h2>
                <ul>
                  <li>NodeJs, ExpressJs</li>
                  <li>SQL and NoSQL Databases</li>
                  <li>REST APIs</li>
                  <li>Vercel, AWS, Firebase</li>
                  <li>Postman, FastAPI</li>
                </ul>
              </div>
            </Fade>
            <Fade direction="right">
              <div className="skl-card">
                <img className="img-shadow" src={general} alt="General" />
                <h2 className="card-title">General</h2>
                <ul>
                  <li>C / C++</li>
                  <li>JavaScript / TypeScript</li>
                  <li>Git, GitHub</li>
                  <li>Netlify , Vercel</li>
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
