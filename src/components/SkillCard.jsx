import React, { useState } from "react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

const SkillCard = ({ skill }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative py-2 px-3 cursor-pointer bg-[#1a1a1a]/90 backdrop-blur-8xl rounded-3xl shadow-2xl flex items-center space-x-6 transition-transform duration-300 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Render CanvasRevealEffect only on hover  */}
      {hovered && (
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
          {/* Pass the color as RGB array */}
          <CanvasRevealEffect animationSpeed={5} colors={[skill.colorRGB]} containerClassName="h-full w-full" />
        </div>
      )}
      <img
        src={skill.logo}
        alt={`${skill.skillName} logo`}
        className="relative z-10 w-12 h-12 md:w-14 md:h-14 mx-2 object-contain flex-shrink-0"
      />
      <div className='relative z-10 flex-1 flex flex-col pr-3'>
        <h3 className='text-xl md:text-xl font-semibold text-white'>{skill.skillName}</h3>
        <p className='text-sm italic text-gray-400'>{skill.category}</p>
        <div className='w-full bg-gray-700 rounded-full h-1 mt-1 mb-1'>
          <div
            className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-500 ease-out`}
            style={{ width: `${skill.mastery}%` }}
          ></div>
        </div>
        <p className='text-xs md:text-sm text-gray-300'>{skill.mastery}% Mastery</p>
      </div>
    </div>
  );
};
export default SkillCard;