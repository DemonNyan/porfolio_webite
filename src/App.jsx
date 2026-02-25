import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import CustomCursor from "./components/CustomCursor";
import Certificates from "./components/Certificate";

const App = () => {
  return (
    <div>
      <CustomCursor />
      <NavBar />
      <Hero />
      <Skill/>

      <About />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
