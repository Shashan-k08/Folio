import React from "react";
import "./About.css";
import logo from "../img/profile2.jpg";
import {Fade} from "react-awesome-reveal";

// Timeline Component
import recordApi from "./recordApi";
import { ReactComponent as WorkIcon } from "../img/work.svg";
import { ReactComponent as SchoolIcon } from "../img/school.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import resume from '../img/Shashank_Resume.pdf'

const Features = () => {
  const title_name = "< About me />";
  const workIconStyles = { background: "#06D6A0" };
  const schoolIconStyles = { background: "#f9c74f" };

  return (
    <>
      <section id="about">
        <h1 className="title">{title_name}</h1>
        <div className="abt">
          <div className="abt-left">
            {/* <div className="abt-card bg"></div> */}
            <Fade left>
              <div className="abt-card">
                <img
                  className="abt-img img-shadow circle"
                  src={logo}
                  alt="Profile"
                />
              </div>
            </Fade>
          </div>
          <Fade right>
            <div className="abt-right">
              <p className="abt-sub">
                &emsp; I speak fluent JavaScript, and my favorite word is
                'function'.{" "}
              </p>
              <p className="abt-desc">
                &emsp; As a software alchemist, I engineer digital products with
                an emphasis on{" "}
                <span>
                  aesthetics, lightning-fast performance, and an impeccably
                  seamless user experience
                </span>
                . Adept at algorithm driven development, I sculpt
                high-performance code with analytical precision. I'm the team's
                secret weapon, tackling complex projects with a blend of
                unwavering problem-solving and a fervent commitment to staying
                at the forefront of technology trends.
              </p>
              <p className="abt-desc">
                &emsp; Seeking to enrich your team with a dynamic,
                code-sorcerer?{" "}
                <a
                  href="mailto:shashanktiwari3508@gmail.com"
                  style={{ color: "#00bfff", textDecoration: "underline" }}
                >
                  Hire Me{" "}
                  <sup>
                    <i class="fas fa-external-link-alt fa-xs"></i>
                  </sup>
                </a>{" "}
                and let's transform challenges into triumphs.
              </p>

              <div style={{ display: "flex", justifyContent: "center" }}>
                
                <a
                  style={{ display: "inline-block" }}
                  href={resume}
                  download="Shashank_Resume"
                >
                  <div
                    className="rsm btn_shadow"
                    style={{
                      width: "8rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <b>Resume&nbsp;</b>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </a>
              </div>
            </div>
          </Fade>
        </div>

        {/*------------------------------ Timeline Component ------------------------------ */}
        <div className="timeline">
          <h1 className="title">Timeline</h1>
          <VerticalTimeline>
            {recordApi.map((element) => {
              let isWorkIcon = element.icon === "work";

              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.link ? (
                      <a href={element.link} style={{ color: "#00bfff" }}>
                        {element.title}{" "}
                        <sup>
                          <i className="fas fa-external-link-alt fa-xs"></i>
                        </sup>
                      </a>
                    ) : (
                      element.title
                    )}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p className="description">{element.desc1}</p>
                  <p className="description">{element.desc2}</p>
                  <p className="description">{element.desc3}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default Features;
