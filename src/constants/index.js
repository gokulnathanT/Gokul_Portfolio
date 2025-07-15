
import img1 from '../assets/img2.jpeg'
import pro1 from "../assets/project1.png";
import pro3 from "../assets/project3.png";
import pro4 from "../assets/project2.png";
import pro5 from "../assets/project5.png";


export const ABOUT =
  "Detail - oriented and versatile developer specializing in full - stack development and innovative problem - solving. Dedicated to aligning with goals to create meaningful and sustainable tech solutions through continuous learning.";

export const EXPERIENCES = [
  {
    year: "2024  November - 2025 January",
    role: "Project Intern",
    company: "SkillcheckrAI",
    description1: `Developed and deployed a scalable web application using React.js, improving user experience across devices and
achieving a 25% increase in cross-platform responsiveness.`,
description2:`Implemented modern UI components and optimized frontend performance, resulting in a 30% faster load time
and enhanced accessibility.`,
    technologies: ["React.js", "GitHub", "JavaScript", "HTML", "CSS"],
  },
];


export const PROJECTS = [
  {
    title: "Xpace - Logistic optimization",
    image: pro4,
    description:
      "Efficient fleet management and monetizing un-utilized spaces by integrating 3LP. ",
    technologies: ["Springboot", "Spring Security", "React.js", "MySQL"],
    link: "https://github.com/gokulnathanT/Xpace_Backend/",
  },
  {
    title: "Memora CLI - A productivity toolkit",
    image: pro1,
    description:
      "Command Line Interface Assistant for Organizing, Tracking, Scheduling, and Managing daily activities. ",
    technologies: ["SpringBoot", "React.js", "MySQL"],
    link: "https://github.com/gokulnathanT/CL-Interface-Memora",
  },
  {
    title: "Portfolio Website",
    image: pro3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js","Firebase" ,"CSS", "HTML", "Framer Motion"],
    link: "https://gokull-dev.netlify.app/",
  },
  {
    title: "QTIX ",
    image: pro5,
    description:
      "Qtix is an intelligent DSA interview simulator that leverages voice interaction and AI-driven question flow, generating real-time summaries for effective self-assessment and progress tracking.",
    technologies: ["Gemini AI","Firebase","React.js", "MySQL", "Springboot", "Java"],
    link: "https://github.com/gokulnathanT/QTIX-Backend",
  },
];