import "./Links.css";
import img1 from "../../assets/Folder.png";
import {Download} from "lucide-react";
function Links() {
  return (
    <div className="links">
      <div className="linkHead">
        <h3>Profiles</h3>
      </div>

      <div className="links-content">
        <div className="link-container">
          <a
            href="https://www.linkedin.com/in/gokulnathan-thanapal-815586259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img1} alt="linkedIn" />
          </a>

          <p>LinkedIn</p>
        </div>
        <div className="link-container">
          <a
            href="https://github.com/gokulnathanT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img1} alt="github" />
          </a>
          <p>Github</p>
        </div>
        <div className="link-container">
          <a
            href="https://leetcode.com/u/Gokulnathan_Thanapal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img1} alt="leetcode" />
          </a>
          <p>Leetcode</p>
        </div>
        <div className="link-container">
          <a
            href="https://www.hackerrank.com/profile/mailtogokul1727"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img1} alt="hackerRank" />
          </a>
          <p>HackerRank</p>
        </div>
        <div className="link-container">
          <a
            href="https://www.codechef.com/users/gokulnathan_t"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img1} alt="codechef" />
          </a>
          <p>Code Chef</p>
        </div>
        <div className="link-container">
          <a
            href="https://www.figma.com/files/team/1276569336115658758/user/1276569334013568975?fuid=1276569334013568975"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img1} alt="figma" />
          </a>
          <p>Figma</p>
        </div>
        <div className="link-container">
          <a
            href="/resume.pdf" download="Gokulnathan_Resume.pdf"
          >
            <img src={img1} alt="resume" />
          </a>
          <p>Resume</p>
        </div>
        <div className="link-container">
          <a
            href="mailto:mailtogokul1727@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img1} alt="mail" />
          </a>
          <p>Mail</p>
        </div>
      </div>
    </div>
  );
}

export default Links;
