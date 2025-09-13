import React, { useState } from "react";
import skillsData from "../data/skills.json";
import { StarsBackground } from "./ui/stars-background";
import { ShootingStars } from "./ui/shooting-stars";
import SkillCard from "./SkillCard.jsx";
import { motion } from "framer-motion";

const HomeSection3 = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const allCategories = ["All", ...new Set(skillsData.map(skill => skill.category))];

  const filteredSkills = skillsData.filter(skill => {
    if (activeCategory === "All") {
      return skill.tag === "ShowCase";
    }
    return skill.category === activeCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='relative min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#111111] text-white p-5 md:p-20 flex flex-col items-center font-sans overflow-hidden'>
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className='relative z-10 text-4xl md:text-6xl lg:text-8xl font-bold mb-4 text-center tracking-tight'
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-t from-gray-400 to-white">
          My Tech Arsenal
        </span>
      </motion.h2>



      <ul className='relative z-10 flex justify-center flex-wrap gap-2 md:gap-4 mb-8 md:mb-16'>
        {allCategories.map((category) => (
          <li key={category}>
            <button
              onClick={() => setActiveCategory(category)}
              className={`
                text-sm sm:text-lg md:text-xl font-medium
                px-4 md:px-6 py-2 rounded-full
                transition-all duration-300 ease-in-out
                ${activeCategory === category
                  ? 'bg-white text-[#111111] shadow-lg transform scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
                }
              `}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      <motion.div
        key={activeCategory}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='relative z-10 w-full max-w-7xl'
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSection3;