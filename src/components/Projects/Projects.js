import { PROJECTS } from "../../constants";
import {useState} from "react";
import "./Projects.css";
function Project() {


  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className="projects">
      <div className="projectTop">
        <h3>Projects</h3>
      </div>
      <div className="projectCards">
        {PROJECTS.map((projects, index) => (
          <div key={index} className="card">
            <div className="projectImg">
              <img
                src={projects.image}
                width={150}
                height={150}
                alt={projects.title}
              />
            </div>
            <div className="projectContent">
              <div className="projectContent-top">
                <h5>{projects.title}</h5>
              </div>
              <div className="projectContent-desc">
                <p>{projects.description}</p>
                <div className="projectTechs">
                  {projects.technologies.map((techs, index) => (
                    <span className="techs">{techs}</span>
                  ))}
                </div>
              </div>
              <div className="projectView">
                <a
                  href={projects.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Project;
