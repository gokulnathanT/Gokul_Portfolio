import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Particles from './components/Particles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimpleBottomNavigation from './components/BottomBar';
import About from './components/About';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route index element={}/> */}
        <Route path="/About" element={<About/>}/>
      </Routes>
      <SimpleBottomNavigation/>
      </BrowserRouter>


  );
}

export default App;
