"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Info, X } from "lucide-react";

// --- Mock Data ---
// To prevent file path errors, project data is included directly in the component.
import Projects from "../../data/Projects.json"; // Ensure this path is correct or replace with inline data if necessary.
// --- Responsive Hook ---
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

// --- Memoized Project Modal ---
const ProjectModal = React.memo(({ project, onClose }) => {
  const handleModalContentClick = (e) => e.stopPropagation();
  const backdropVariants = { visible: { opacity: 1 }, hidden: { opacity: 0 } };
  const modalVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { duration: 0.3, type: "spring", damping: 25, stiffness: 200 } },
    exit: { y: "100vh", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="relative w-full max-w-2xl bg-radial-gradient-modal border border-white/5 rounded-2xl p-8 md:p-10 shadow-2xl"
        onClick={handleModalContentClick}
        variants={modalVariants}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors" aria-label="Close modal">
          <X size={24} />
        </button>
        <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#22D3EE' }}>{project.title}</h3>
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">{project.level}</p>
        <p className="text-base font-medium text-gray-200 mb-8 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-xs px-3 py-1.5 bg-neutral-800 border border-neutral-700 rounded-full text-gray-300 font-mono">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-6">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-gray-200 transition-colors hover:text-[#22D3EE]"><Github className="w-5 h-5" /> Code</a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-gray-200 transition-colors hover:text-[#22D3EE]"><ExternalLink className="w-5 h-5" /> Demo</a>
        </div>
      </motion.div>
    </motion.div>
  );
});
ProjectModal.displayName = 'ProjectModal';


// --- Memoized Project Card ---
const ProjectCard = React.memo(({ project, index, isDesktop }) => {
  const ref = useRef(null);
  const isEven = index % 2 === 0;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const infoOpacity = useTransform(scrollYProgress, [0.25, 0.4, 0.8, 0.95], [0, 1, 1, 0]);
  const focusProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(focusProgress, [0, 1], [0.85, 1]);
  const rotateY = useTransform(focusProgress, [0, 1], isDesktop ? (isEven ? ["-15deg", "0deg"] : ["15deg", "0deg"]) : ["0deg", "0deg"]);
  const mirrorY = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const opacity = useTransform(focusProgress, [0, 1], [0.5, 1]);
  const infoY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const glarePosition = useTransform(scrollYProgress, [0, 1], ["-100%", "200%"]);
  const vignetteOpacity = useTransform(focusProgress, [0.3, 0.7], [0, 1]);
  
  const hoverScale = useSpring(1, { stiffness: 250, damping: 25 });
  const hoverY = useSpring(0, { stiffness: 250, damping: 25 });
  
  return (
    <>
      <motion.div ref={ref} className="relative lg:h-[70vh] lg:min-h-[600px] w-full max-w-7xl mx-auto my-16 [perspective:2000px] flex flex-col items-center lg:block">
        
        <motion.div style={{ scale, rotateY, y: isDesktop ? mirrorY : 0, opacity, willChange: 'transform, opacity' }} className="relative lg:absolute top-0 left-0 w-full h-full order-1 lg:order-none">
          <div className={`w-full h-[55vh] lg:h-full lg:absolute lg:w-3/4 p-2 rounded-3xl bg-neutral-900 border border-white/10 ${isEven ? 'lg:left-0' : 'lg:right-0'}`}>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img src={project.screenshot} alt={project.title} className="w-full h-full object-cover" />
              
              <motion.div
                style={{ opacity: vignetteOpacity }}
                className={isDesktop 
                  ? "absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end p-6 md:p-8" 
                  : "absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-transparent flex items-start justify-start p-6"
                }
              >
                <h4 style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.8)" }} className={isDesktop 
                  ? "text-4xl md:text-7xl font-extrabold text-white leading-tight" 
                  : "text-3xl font-extrabold text-white leading-tight text-left mt-1"}>
                  {project.title}
                </h4>
              </motion.div>

              <motion.div style={{ x: glarePosition }} className="absolute top-0 left-0 w-1/2 h-full pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </div>
        </motion.div>
        
        <motion.div style={{ y: isDesktop ? infoY : 0, opacity: isDesktop ? infoOpacity : 1, willChange: 'transform, opacity' }} onHoverStart={() => { hoverScale.set(1.05); hoverY.set(-10); }} onHoverEnd={() => { hoverScale.set(1); hoverY.set(0); }} className={`relative lg:absolute lg:top-1/3 w-full max-w-md z-20 order-2 lg:order-none mt-[-50px] lg:mt-0 ${isEven ? 'lg:right-0 lg:translate-x-[25%]' : 'lg:left-0 lg:-translate-x-[25%]'}`}>
          <motion.div style={{ scale: hoverScale, y: hoverY, willChange: 'transform' }} className="p-6 md:p-8 rounded-2xl border border-white/5 bg-radial-gradient-description shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#22D3EE' }}>{project.level}</p>
            <p className="text-base font-medium text-gray-200 mb-6 leading-relaxed line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs px-3 py-1.5 bg-neutral-800 border border-neutral-700 rounded-full text-gray-300 font-mono">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-6">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-gray-200 transition-colors hover:text-[#22D3EE]"><Github className="w-5 h-5" /> Code</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-gray-200 transition-colors hover:text-[#22D3EE]"><ExternalLink className="w-5 h-5" /> Demo</a>
              <button onClick={openModal} className="flex items-center gap-2 font-semibold text-gray-200 transition-colors hover:text-[#22D3EE]"><Info className="w-5 h-5" /> About</button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isModalOpen && <ProjectModal project={project} onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
});
ProjectCard.displayName = 'ProjectCard';


// --- Main Showcase Component ---
const ProjectShow = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <section className="relative py-24 md:py-32 bg-[#111111] text-white overflow-x-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#111111]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#3333332e_1px,transparent_1px),linear-gradient(to_bottom,#3333332e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">My Work in Motion</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">An interactive showcase of my projects. Scroll to see them come to life.</p>
        </div>
        <div className="flex flex-col items-center">
          {Projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} isDesktop={isDesktop} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShow;