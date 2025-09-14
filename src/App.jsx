import React, { useRef, useState, useEffect } from "react";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import CurveTextPage from './components/CurveTextPage.jsx';
import Footer from "./components/Footer.jsx";
import HomeSection3 from "./components/HomeSection3.jsx";
import HomeSection4 from "./components/HomeSection4.jsx";
import FinalContactPage from "./components/ui/FinalContactPage.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import LoopLogos from "./components/LoopLogos.jsx";

export default function App() {
  const containerRef = useRef(null);
  const contactRef = useRef(null);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this value as needed
      }
    );

    const currentContactRef = contactRef.current;
    if (currentContactRef) {
      observer.observe(currentContactRef);
    }

    return () => {
      if (currentContactRef) {
        observer.unobserve(currentContactRef);
      }
    };
  }, []);

  return (
    <div className="relative bg-[#0f0f0f]">
      <Navbar isContactVisible={isContactVisible} />
      <main className="pt-18 text-white" ref={containerRef}>
        <section id="home">
          <Home />
          <CurveTextPage />
          
        </section>
        <section id="skills">
          <HomeSection3 />
          <LoopLogos />
        </section>
        <section id="projects">
          <ProjectsPage />
          
        </section>
        <section id="about">
          <HomeSection4 />
        </section>
        <section id="contact" ref={contactRef}>
          <FinalContactPage />
        </section>
      </main>
      <Footer />
    </div>
  );
}
