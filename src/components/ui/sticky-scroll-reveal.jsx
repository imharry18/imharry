"use client";

import React, { useRef, useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "../../lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const cardLength = content.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Corrected gradients array to match all content items + start/end screens.
  // Original had 5 items for 4 content cards, now it has 6.
  const gradients = [
    "#111111", // 0: Solid dark for "Welcome"
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // 1: For content[0]
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // 2: For content[1]
    "linear-gradient(to bottom right, #f97316, #eab308)", // 3: For content[2]
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // 4: For content[3]
    "#111111", // 5: Solid dark for "That's All!"
  ];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // This calculation determines which card is active based on scroll progress.
    // It divides the scroll progress into sections for each card + the end screen.
    const sectionProgress = latest * (cardLength + 1);
    const currentIndex = Math.min(
      cardLength + 1, // The max index is cardLength + 1 (e.g., 5 for 4 cards)
      Math.floor(sectionProgress)
    );
    setActiveCard(currentIndex);
  });

  // Animation variants for a subtle fade and slide effect
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } },
  };

  // The total height of the scrollable section is dynamically set
  // based on the number of content items.
  const scrollableHeight = `${100 + cardLength * 100}vh`;

  return (
    <section ref={ref} className="relative w-full bg-[#111111]" style={{ height: scrollableHeight }}>
      {/* Sticky container that holds the content */}
      <motion.div
        className="sticky top-0 z-10 flex h-screen w-full items-center justify-center"
        animate={{
          background: gradients[activeCard] || gradients[gradients.length - 1],
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth background transition
      >
        <div className="flex w-full max-w-7xl flex-col items-center justify-between px-6 lg:flex-row md:px-12">
          {/* Left: Animated text content */}
          <div className="relative flex-1 space-y-6 overflow-hidden" style={{ minHeight: "250px" }}>
            <AnimatePresence mode="wait">
              {activeCard === 0 ? (
                <motion.div
                  key="welcome"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <h2 className="text-2xl font-bold text-white md:text-4xl">Welcome</h2>
                  <p className="mt-4 max-w-md text-base text-gray-200 md:text-lg">
                    Scroll down to discover cool collaborative features of our platform!
                  </p>
                </motion.div>
              ) : activeCard === gradients.length - 1 ? (
                <motion.div
                  key="thats-all"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <h2 className="text-2xl font-bold text-white md:text-4xl">That's All!</h2>
                  <p className="mt-4 max-w-md text-base text-gray-200 md:text-lg">
                    Continue scrolling to explore the rest of the site.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  // The key is crucial for AnimatePresence to track each item individually
                  key={content[activeCard - 1].title}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <h2 className="text-2xl font-bold text-white md:text-4xl">
                    {content[activeCard - 1].title}
                  </h2>
                  <p className="mt-4 max-w-md text-base text-gray-200 md:text-lg">
                    {content[activeCard - 1].description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Animated preview card */}
          <div
            className={cn(
              "mt-10 flex h-72 w-full items-center justify-center overflow-hidden rounded-2xl shadow-xl lg:mt-0 lg:ml-16 lg:h-[500px] lg:w-[500px]",
              contentClassName
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard} // Key by the activeCard index to trigger transitions
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="h-full w-full"
              >
                {activeCard > 0 && activeCard < gradients.length - 1 ? (
                  content[activeCard - 1].content
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#111111] text-2xl font-medium text-gray-400">
                    {activeCard === 0 ? "Sticky Carousel Demo" : "End of Carousel"}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};