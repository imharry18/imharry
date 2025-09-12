import React, { useState, useRef } from "react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { motion, AnimatePresence } from "framer-motion";

const SkillCard = ({ skill }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    card.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  const gradientBarStyle = {
    width: `${skill.mastery}%`,
    background: `linear-gradient(to right, #3b82f6, #06b6d4)`,
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        handleMouseLeave();
      }}
      onMouseMove={handleMouseMove}
      className="relative cursor-pointer bg-[#1a1a1a]/90 rounded-2xl shadow-lg transition-transform duration-300 ease-out h-full"
      style={{ transformStyle: 'preserve-3d', minHeight: '100px' }}
    >
      <div className="relative z-10 flex items-center space-x-4 p-3 h-full">
        <img
          src={skill.logo}
          alt={`${skill.skillName} logo`}
          className="w-12 h-12 object-contain flex-shrink-0"
        />
        <div className='flex-1 flex flex-col'>
          <h3 className='text-lg font-semibold text-white'>{skill.skillName}</h3>
          <p className='text-xs italic text-gray-400'>{skill.category}</p>
          <div className='w-full bg-gray-700 rounded-full h-1.5 mt-1.5 mb-1'>
            <div
              className="h-full rounded-full"
              style={gradientBarStyle}
            ></div>
          </div>
          <p className='text-xs text-gray-300'>{skill.masteryTag}</p>
        </div>
      </div>

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