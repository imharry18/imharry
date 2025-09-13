"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const MagneticLink = ({ children, href }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: x * 0.1, y: y * 0.1 }}
      transition={{ type: "spring", stiffness: 250, damping: 15, mass: 0.5 }}
      className="flex items-center gap-2 font-semibold text-gray-200 hover:text-cyan-400 transition-colors"
    >
      {children}
    </motion.a>
  );
};

export default MagneticLink;