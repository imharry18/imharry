"use client";

import React, { useRef, useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "../../lib/utils"; // Ensure path is correct
import AboutMeCard from "./AboutMeCard.jsx";
import ContactMeCard from "./ContactMeCardRight.jsx";
import ContactMeOutroLeft from "./ContactMeOutroLeft.jsx";

// Example middle cards
const extraCards = [
  {
    title: "Adobe Creative Cloud",
    description:
      "**Creativity meets technology.** I use **Adobe Photoshop** extensively for image editing, graphic design, and advanced **image manipulation**. From creating digital artwork to retouching and enhancing visuals, Photoshop is my go-to tool for bringing imagination to life.",
    content: (
      <div className="text-white text-xl flex flex-col items-center justify-center h-full bg-neutral-900 rounded-2xl p-4">
        <span className="text-center">Visual for Adobe Skills</span>
      </div>
    ),
    LeftContent: null,
  },
];

export const StickyScroll = ({ content = extraCards, contentClassName }) => {
  const cards = [
    {
      id: "intro",
      title: "About Me",
      description: "",
      content: <AboutMeCard />,
      LeftContent: null,
    },
    ...content.map((card, index) => ({
      ...card,
      id: `content-${index}`,
      LeftContent:
        card.LeftContent ||
        (() => (
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {card.title}
            </h1>
            <p
              className="mt-4 max-w-md text-sm sm:text-base md:text-lg text-gray-200"
              dangerouslySetInnerHTML={{
                __html: card.description.replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong class="text-white">$1</strong>'
                ),
              }}
            />
          </div>
        ))(),
    })),
    {
      id: "outro",
      title: "Contact Me",
      description: "",
      content: <ContactMeCard />,
      LeftContent: <ContactMeOutroLeft />,
    },
  ];

  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const cardLength = cards.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const isContentCardActive = activeCard > 0 && activeCard < cardLength - 1;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionProgress = latest * cardLength;
    const currentIndex = Math.max(
      0,
      Math.min(cardLength - 1, Math.floor(sectionProgress))
    );
    setActiveCard(currentIndex);
  });

  const scrollableHeight = `${cardLength * 100}vh`;

  // --- Animation Variants ---
  const introOutroVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const splitScreenVariants = {
    container: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.5 } },
      exit: { opacity: 0, transition: { duration: 0.3 } },
    },
    leftPanel: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    rightPanel: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#111111]"
      style={{ height: scrollableHeight }}
    >
      {/* Foreground Content */}
      <div className="sticky top-0 z-10 flex h-screen w-full items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Intro */}
          {activeCard === 0 && (
            <motion.div
              key="intro"
              variants={introOutroVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full w-full z-10"
            >
              <AboutMeCard />
            </motion.div>
          )}

          {/* Content Cards */}
          {isContentCardActive && (
            <motion.div
              key="content-split-view"
              variants={splitScreenVariants.container}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto md:gap-12 p-4 z-10"
            >
              {/* Left Panel */}
              <motion.div
                variants={splitScreenVariants.leftPanel}
                className="relative flex-1 w-full md:w-1/2 mb-6 md:mb-0"
              >
                {cards[activeCard].LeftContent}
              </motion.div>

              {/* Right Panel */}
              <motion.div
                variants={splitScreenVariants.rightPanel}
                className={cn(
                  "flex-1 w-full md:w-1/2 max-w-[95vw] sm:max-w-md md:max-w-sm lg:max-w-md xl:max-w-lg",
                  "aspect-[4/3] h-auto flex items-center justify-center",
                  "rounded-2xl bg-neutral-900 shadow-xl overflow-hidden",
                  contentClassName
                )}
              >
                {cards[activeCard].content}
              </motion.div>
            </motion.div>
          )}

          {/* Outro */}
          {activeCard === cardLength - 1 && (
            <motion.div
              key="outro"
              variants={introOutroVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full w-full flex items-center justify-center z-10"
            >
              <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto md:gap-12 p-4">
                <div className="relative flex-1 w-full md:w-1/2 mb-6 md:mb-0">
                  {cards[activeCard].LeftContent}
                </div>
                <div
                  className={cn(
                    "flex-1 w-full md:w-1/2 max-w-[95vw] sm:max-w-md md:max-w-sm lg:max-w-md xl:max-w-lg",
                    "aspect-[4/3] h-auto rounded-2xl bg-neutral-900 shadow-xl overflow-hidden",
                    contentClassName
                  )}
                >
                  {cards[activeCard].content}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
