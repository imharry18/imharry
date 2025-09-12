import React, { useState } from "react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { motion, AnimatePresence } from "framer-motion";

const SkillCard = ({ skill }) => {
  const [hovered, setHovered] = useState(false);

  const gradientBarStyle = {
    width: `${skill.mastery}%`,
    background: `linear-gradient(to right, #3b82f6, #06b6d4)`,
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-pointer bg-[#1a1a1a]/90 rounded-2xl shadow-lg transition-all duration-300 overflow-hidden h-full group"
      style={{ minHeight: '100px' }} 
    >
      {/* This container holds the content and prevents shifting */}
      <div className="relative z-10 flex items-center space-x-4 p-3 h-full">
        <motion.img
          src={skill.logo}
          alt={`${skill.skillName} logo`}
          className="w-12 h-12 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        />
        <div className='flex-1 flex flex-col'>
          <h3 className='text-lg font-semibold text-white'>{skill.skillName}</h3>
          <p className='text-xs italic text-gray-400'>{skill.category}</p>
          <div className='w-full bg-gray-700 rounded-full h-1.5 mt-1.5 mb-1'>
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={gradientBarStyle}
            ></div>
          </div>
          <p className='text-xs text-gray-300'>{skill.masteryTag}</p>
        </div>
      </div>

      {/* The CanvasRevealEffect is now guaranteed not to affect the layout */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 h-full w-full z-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              colors={[skill.colorRGB]}
              containerClassName="h-full w-full"
              dotSize={2}
              opacities={[0.2, 0.2, 0.2, 0.4, 0.4, 1, 1, 1, 1, 1]}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillCard;