"use client";

import React, { useEffect, useState, useId } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../lib/utils.ts"; 

export const SparklesCore = ({
  id,
  className,
  background = "#0C0C0E", // ✅ Background is transparent
  minSize = 1,
  maxSize = 3,
  speed = 4,
  particleColor = "#ffffff",
  particleDensity = 120,
}) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container) => {
    if (container) {
      await controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
    return Promise.resolve();
  };

  return (
    <motion.div
      animate={controls}
      className={cn("opacity-0 bg-transparent", className)} // ✅ Force transparency
    >
      {init && (
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false, zIndex: 1 }, // ✅ Don't cover whole screen
            background: {
              color: { value: background }, // ✅ Transparent
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
              },
            },
            particles: {
              number: {
                value: particleDensity,
                density: { enable: true, area: 800 },
              },
              color: { value: particleColor },
              shape: { type: "circle" },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: {
                  enable: true,
                  speed: speed,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              size: {
                value: { min: minSize, max: maxSize },
              },
              move: {
                enable: true,
                speed: { min: 0.1, max: 1 },
                direction: "none",
                outModes: { default: "out" },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};

export default SparklesCore;
