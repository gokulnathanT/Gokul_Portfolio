import { useNavigate } from "react-router-dom";
import img1 from "../../assets/gokul_pic.jpeg";
import TerminalIcon from "@mui/icons-material/Terminal";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/About");
  }
  return (
    <div className="homeContent">
      <div className="homeText">
        <div className="homeText-r">
          <img className="imgHome" src={img1} alt="Logo Image" />
        </div>
        <div className="homeText-l">
          <h1>GOKULNATHAN THANAPAL ⚡</h1>
          <h3>FULLSTACK DEVELOPER | FUSING DESIGN AND FUNCTIONALITY</h3>
          <div className="homeText-sub">
            <h4 onClick={handleClick}>Know more about me !</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
