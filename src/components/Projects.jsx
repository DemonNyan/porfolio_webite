import { motion } from "framer-motion";
import Project1_Img from "../img/CalculorApp.png";
import Project2_Img from "../img/weatherApp.png";
import Project3_Img from "../img/todo-project.png";
import Project4_Img from "../img/movieReact.png";
import Project5_Img from "../img/movieNext.png";
import Project6_Img from "../img/NewsApp.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const myProjects = [
    {
      title: "Calculator Web App",
      description:
        "A sleek and functional calculator built using React and Tailwind CSS. Focuses on intuitive user interface and precise logic.",
      tags: ["React", "TailwindCss", "JavaScript"],
      github: "https://github.com/DemonNyan/Calulator_App",
      demo: "https://calculatorapptesting.netlify.app/",
      image: Project1_Img,
    },
    {
      title: "Weather Insight App",
      description:
        "A real-time weather tracking application built with React, Tailwind CSS, and OpenWeatherMap API.",
      tags: ["React", "TailwindCss", "API"],
      github: "https://github.com/DemonNyan/Weather_App",
      demo: "https://weather-app-ten-lilac-32.vercel.app/",
      image: Project2_Img,
    },
    {
      title: "Todo List App",
      description:
        "A simple todo list application built with React, Tailwind Css and Axios for data handling (Not Deploy)",
      tags: ["React", "TailwindCss", "Axios"],
      github: "https://github.com/DemonNyan/Todo_App/",
      image: Project3_Img,
    },
    {
      title: "Movie React App",
      description:
        "A movie browsing app built with React and Tailwind Css using TMDB API integration.",
      tags: ["React", "TailwindCss", "TMDB"],
      github: "https://github.com/DemonNyan/movie_project_react",
      demo: "https://movie-project-react-azure.vercel.app/",
      image: Project4_Img,
    },
    {
      title: "Movie Next App",
      description:
        "A high-performance movie app built with NextJS and Tailwind Css. Inspired by teacher EiMaung.",
      tags: ["NextJs", "TailwindCss", "TMDB"],
      github: "https://github.com/DemonNyan/movie_next_app",
      image: Project5_Img,
    },
    {
      title: "News App",
      description:
        "A full-featured MERN Stack news application with user authentication and MongoDB data management.",
      tags: ["MERN Stack", "TailwindCss", "Auth"],
      github: "https://github.com/DemonNyan/News-Media",

      image: Project6_Img,
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Card တစ်ခုနဲ့တစ်ခုကြား 0.2s ခြားမယ်
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            A collection of my recent work, ranging from simple UI components to
            complex MERN stack applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {myProjects.map((p, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
