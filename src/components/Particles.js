// Particles.js

import React, { useEffect, useRef } from "react";
import "./Particles.css";

const Particles = ({ quantity = 100 }) => {
  const containerRef = useRef(null);

  const createParticle = () => {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${2 + Math.random() *5}s`;
    containerRef.current.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  };

  useEffect(() => {
    for (let i = 0; i < quantity; i++) {
      createParticle();
    }
    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, [quantity]);

  return <div className="particle-container" ref={containerRef} />;
};

export default Particles;
