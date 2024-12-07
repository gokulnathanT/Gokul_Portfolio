import { dividerClasses } from "@mui/material";
import { useNavigate, useLocation, Routes } from "react-router-dom";
import "./Navigate.css";

function Navigate() {
  const routes = ["/", "/About", "/Projects", "/Links","/"];

  const navigate = useNavigate();
  const location = useLocation();
  const currIndex = routes.indexOf(location.pathname);

  function handleNext() {
    if (currIndex < routes.length - 1) {
      navigate(routes[currIndex + 1]);
    }
  }
  function handlePrev() {
    if (currIndex > 0) {
      navigate(routes[currIndex - 1]);
    }
  }

  return (
    <div className="navButtons">
      <button onClick={handlePrev} disabled={currIndex === 0}>
        &lt;
      </button>
      <button onClick={handleNext} disabled={currIndex === routes.length - 1}>
        &gt;
      </button>
    </div>
  );
}

export default Navigate;
