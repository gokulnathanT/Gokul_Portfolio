
import { EXPERIENCES } from "../../constants";
import {ABOUT} from "../../constants";
import "./About.css";
import "../../index.css"

import img5 from "../../assets/img_1.JPG";
const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer-l">
        <div className="aboutContainer-l-content">
          <div className="abtContainer-l-content-top">
            <h4>ABOUT ME</h4>
          </div>
          <div className="aboutContainer-l-content-bottom">
            <p className="aboutText">
             {ABOUT}!
            </p>
            <hr />
            <h4>Experience </h4>
            <div className="abt-l-content-bottom-exp">
              {EXPERIENCES.map((experience, index) => (
                <div key={index} className="experience">
                  <div className="abt-l-content-bottom-exp-year">
                    <p>{experience.year}</p>
                  </div>
                  <div className="abt-l-content-bottom-exp-desc">
                    <h5>
                      {experience.role} - {experience.company}
                    </h5>
                    <p>{experience.description}</p>
                    {experience.technologies.map((tech, index) => (
                      <span className="techs">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <hr />
            <h3>Co-curricular Initiatives</h3>
            <h4>President ~ Ultronix </h4>
            <p className="abt-l-content-bottom-pres">
              As the President of Ultronix, a technical student association, I
              led a dynamic student force and organized several key initiatives to
              promote technical knowledge and collaboration. My contributions
              focused on team building, event management, and enhancing the
              technical skills of members through various workshops and
              sessions.
            </p>
            <p>Organized ~</p>
            <ul >
              <li>8+ Technical Events</li>
              <li>2 Workshops</li>
            </ul>
            <h4>NSS - Volunteer</h4>
            <p>
              As a NSS volunteer , I have participated in various society
              outreach programs like camps and had a chance to understand the
              social responsibilities of an individual.{" "}
            </p>
            <ul>
              <li>3+ Camps</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="aboutContainer-r">
        <div className="aboutContainer-r-body">
          <div className="aboutContainer-r-img">
            <img className="aboutImg" src={img5} alt="Logo Image" />
          </div>

          <div className="aboutContainer-r-content">
            <div className="aboutContainer-r-content-top">
              <h4>GOKUL 🤍</h4>
              <p>
                Curious <span className="|">|</span> Optimistic{" "}
                <span className="|">|</span> Balanced{" "}
              </p>
            </div>
            <div className="aboutContainer-r-content-bottom">
              <h4 className="tech">Tech Stack</h4>
              <div className="techStack">
                <p>JAVA</p>
                <p>MySQL</p>
                <p>SPRING</p>
                <p>SPRINGBOOT</p>
                <p>GIT</p>
                <p>GITHUB</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>REACT JS</p>
                <p>REST API</p>
                <p>POSTMAN</p>
              </div>
              <h4 className="act">Activities</h4>
              <div className="activities">
                <p>President - Ultronics</p>
                <p>National Service Scheme</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
