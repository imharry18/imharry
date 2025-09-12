"use client";

import React from "react";
import { motion } from "framer-motion";
import PlatformHandleLinksDock from "./PlatformHandleLinksDock.jsx";
import { SparklesCore } from "./Sparkles.jsx";
import { IconChevronDown } from "@tabler/icons-react";
import Orb from "./Orb.jsx"; // Import the Orb component

export default function AboutMeOutroPage() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#111111] p-4">
      {/* Background Sparkles Effect */}
      <div className="pointer-events-none absolute inset-0 h-full w-full">
        <SparklesCore
          id="outro-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* New Glowing Orb and Radial Gradient */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute h-64 w-64 blur-3xl opacity-30">
          <Orb hue={240} />
        </div>
        <div className="absolute h-[40vh] w-[40vh] rounded-full [background:radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_70%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Let's Create Something Amazing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base md:text-lg text-neutral-300"
        >
          Thank you for exploring my world. If you have an idea, a project, or
          just want to connect, feel free to reach out. I'm always open to new
          opportunities and collaborations.
        </motion.p>

        {/* Container for Dock and Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="relative mt-8"
        >
          <PlatformHandleLinksDock />
          
          {/* Animated Arrow Indicator - Now correctly positioned */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              ease: "easeOut",
            }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <IconChevronDown className="h-8 w-8 text-neutral-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

