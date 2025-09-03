"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const cardLength = content.length;

  // Set up scroll detection
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // States for gradient BG
  const gradients = [
    "#111111", // Solid dark at the start
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan to emerald
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink to indigo
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange to yellow
    "#111111" // Solid dark at the end
  ];

  // Determine gradient vs solid color based on scroll position/card
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionProgress = latest * (cardLength + 1);
    const currentIndex = Math.min(cardLength + 1, Math.floor(sectionProgress));
    setActiveCard(currentIndex);
  });

  useEffect(() => {
    // Force updates and background transitions as activeCard changes
  }, [activeCard]);

  // Card display logic: carousel + start/end overlays
  return (
    <section ref={ref} className="relative h-[500vh] w-full bg-[#111111]">
      {/* Sticky container */}
      <motion.div
        className="sticky top-0 flex h-screen w-full items-center justify-center z-10"
        animate={{
          background:
            gradients[activeCard] ||
            gradients[gradients.length - 1], // fallback to last solid color
        }}
      >
        <div className="flex w-full max-w-7xl flex-col lg:flex-row items-center justify-between px-6 md:px-12">
          {/* Left: text */}
          <div className="flex-1 space-y-6 overflow-hidden">
            {activeCard === 0 ? (
              <div className="flex flex-col items-start justify-center h-full opacity-100 transition-opacity duration-500">
                <h2 className="text-2xl md:text-4xl font-bold text-white">Welcome</h2>
                <p className="mt-4 text-base md:text-lg text-gray-200 max-w-md">
                  Scroll down to discover cool collaborative features of our platform!
                </p>
              </div>
            ) : activeCard === gradients.length - 1 ? (
              <div className="flex flex-col items-start justify-center h-full opacity-100 transition-opacity duration-500">
                <h2 className="text-2xl md:text-4xl font-bold text-white">That's All!</h2>
                <p className="mt-4 text-base md:text-lg text-gray-200 max-w-md">
                  Continue scrolling to explore the rest of the site.
                </p>
              </div>
            ) : (
              content.map((item, index) => (
                <div
                  key={item.title + index}
                  className={cn(
                    "transition-opacity duration-500 absolute left-0 top-0 w-full",
                    activeCard - 1 === index ? "opacity-100 relative" : "opacity-0 pointer-events-none"
                  )}
                  style={{ minHeight: "360px" }}
                >
                  <h2 className="text-2xl md:text-4xl font-bold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-gray-200 max-w-md">
                    {item.description}
                  </p>
                </div>
              ))
            )}
          </div>
          {/* Right: sticky preview card */}
          <div
            style={{
              background:
                activeCard === 0 || activeCard === gradients.length - 1
                  ? "#111111"
                  : gradients[activeCard],
            }}
            className={cn(
              "mt-10 lg:mt-0 lg:ml-16 h-72 w-full lg:h-[500px] lg:w-[500px] flex items-center justify-center overflow-hidden rounded-2xl shadow-xl",
              contentClassName
            )}
          >
            {activeCard > 0 && activeCard < gradients.length - 1
              ? content[activeCard - 1].content
              : (
                <div className="flex items-center justify-center w-full h-full text-gray-400 text-2xl font-medium">
                  {activeCard === 0 ? "Sticky Carousel Demo" : "End of Carousel"}
                </div>
              )
            }
          </div>
        </div>
      </motion.div>
    </section>
  );
};
