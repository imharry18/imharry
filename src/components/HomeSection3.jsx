import React, { useState } from "react";
import skillsData from "../data/skills.json";
import { StarsBackground } from "./ui/stars-background";
import { ShootingStars } from "./ui/shooting-stars";
import SkillCard from "./SkillCard.jsx"; // Assuming you keep SkillCard as a separate file, otherwise inline

const HomeSection3 = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const allCategories = ["All", ...new Set(skillsData.map(skill => skill.category))];
  const filteredSkills = skillsData.filter(skill =>
    activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <div className='relative min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#111111] text-white p-5 md:p-20 flex flex-col items-center font-sans overflow-hidden'>
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <StarsBackground />
        <ShootingStars />
      </div>
      <h2 className='relative z-10 text-4xl md:text-6xl lg:text-9xl font-bold mb-8 md:mb-12 text-center tracking-tight'>
        <span className="bg-clip-text text-transparent bg-gradient-to-t from-gray-400 to-white">Skills</span>
      </h2>
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
                  : 'text-gray-400 hover:text-white hover:scale-105'}
              `}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      <div key={activeCategory} className='relative z-10 w-full max-w-7xl transition-all duration-500 ease-in-out animate-fadeIn'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
