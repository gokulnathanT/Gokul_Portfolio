import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Navigate from "./components/Navigate/Navigate";
import Project from "./components/Projects/Projects";
import Links from "./components/Links/Links"
import Cursor from "./components/Cursor/Cursor"

function App() {
  return (
    <div className="app">
      <Cursor/>
      <BrowserRouter>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Project />} />
            <Route path="/Links" element={<Links />} />
          </Routes>
        </div>
        
        <Navigate />
      </BrowserRouter>
    </div>
  );
}

export default App;
