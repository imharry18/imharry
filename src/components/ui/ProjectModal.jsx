// src/components/ProjectModal.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: { duration: 0.3, type: "spring", damping: 25, stiffness: 200 },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const ProjectModal = ({ project, onClose }) => {
  const handleModalContentClick = (e) => e.stopPropagation();

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
        // UPDATED: New radial gradient background and refined border
        className="relative w-full max-w-2xl bg-radial-gradient-modal border border-white/5 rounded-2xl p-8 md:p-10 shadow-2xl"
        onClick={handleModalContentClick}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
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
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-gray-200 transition-colors hover:text-[#22D3EE]">
            <Github className="w-5 h-5" /> Code
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-gray-200 transition-colors hover:text-[#22D3EE]">
            <ExternalLink className="w-5 h-5" /> Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;