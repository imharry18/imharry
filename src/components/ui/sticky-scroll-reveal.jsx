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

  // Gradients: Welcome + Each Card + Outro
  const gradients = [
    "#111111", // 0 Welcome
    "linear-gradient(to top, #10b981, #111111)", // 1 content[0]
    "linear-gradient(to right, #31B7C2, #7BC393)", // 2 content[1]
    "linear-gradient(to right, #FD8112, #0085CA)", // 3 content[2]
    "linear-gradient(115deg, #2c003e 0%, #350068 40%, #7b4397 70%, #f857a6 100%)", // 4 content[3]
    "linear-gradient(to bottom right, #f97316, #eab308)", // 5 content[4]
    "linear-gradient(to right, #10b981, #3b82f6)", // 6 content[5]
    "#111111", // 7 Outro
  ];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionProgress = latest * (cardLength + 2);
    const currentIndex = Math.min(
      cardLength + 1,
      Math.floor(sectionProgress)
    );
    setActiveCard(currentIndex);
  });

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

  // Fixed height: intro + cards + outro
  const scrollableHeight = `${(cardLength + 2) * 100}vh`;

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#111111]"
      style={{ height: scrollableHeight }}
    >
      <motion.div
        className="sticky top-0 z-10 flex h-screen w-full items-center justify-center"
        animate={{
          background: gradients[activeCard] || gradients[gradients.length - 1],
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex w-full max-w-7xl flex-col items-center justify-between px-6 lg:flex-row md:px-12">
          {/* Left Text */}
          <div
            className="relative flex-1 space-y-6 overflow-hidden"
            style={{ minHeight: "250px" }}
          >
            <AnimatePresence mode="wait">
              {activeCard === 0 ? (
                <motion.div
                  key="welcome"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <h2 className="text-2xl font-bold text-white md:text-4xl">
                    Welcome
                  </h2>
                  <p className="mt-4 max-w-md text-base text-gray-200 md:text-lg">
                    Scroll down to discover cool collaborative features of our
                    platform!
                  </p>
                </motion.div>
              ) : activeCard === cardLength + 1 ? (
                <motion.div
                  key="thats-all"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <h2 className="text-2xl font-bold text-white md:text-4xl">
                    That's All!
                  </h2>
                  <p className="mt-4 max-w-md text-base text-gray-200 md:text-lg">
                    Continue scrolling to explore the rest of the site.
                  </p>
                </motion.div>
              ) : (
                <motion.div
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

          {/* Right Preview */}
          <div
            className={cn(
              "mt-10 flex h-72 w-full items-center justify-center overflow-hidden rounded-2xl shadow-xl lg:mt-0 lg:ml-16 lg:h-[500px] lg:w-[500px]",
              contentClassName
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="h-full w-full"
              >
                {activeCard > 0 && activeCard < cardLength + 1 ? (
                  content[activeCard - 1].content
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#111111] text-2xl font-medium text-gray-400">
                    {activeCard === 0
                      ? "Sticky Carousel Demo"
                      : "End of Carousel"}
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
