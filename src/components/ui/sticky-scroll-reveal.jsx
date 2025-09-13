"use client";

import React, { useRef, useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "../../lib/utils.ts";
import AboutMeCard from "./AboutMeCard.jsx";
import AboutMeOutroPage from "./AboutMeOutroPage.jsx";


export const StickyScroll = ({ content = extraCards, contentClassName }) => {
  const cards = [
    { id: "intro", content: <AboutMeCard /> },
    ...content.map((card, index) => ({
      ...card,
      id: `content-${index}`,
      LeftContent: () => (
        <div className="w-full text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
            {card.title}
          </h1>
          <p
            className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: card.description.replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="text-white font-semibold">$1</strong>'
              ),
            }}
          />
        </div>
      ),
    })),
    { id: "outro", content: <AboutMeOutroPage /> },
  ];

  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const cardLength = cards.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const backgroundGradients = {
    content:
      "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 70%)",
  };

  const isContentCard = activeCard > 0 && activeCard < cardLength - 1;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionProgress = latest * cardLength;
    const currentIndex = Math.max(
      0,
      Math.min(cardLength - 1, Math.floor(sectionProgress))
    );
    setActiveCard(currentIndex);
  });

  const scrollableHeight = `${cardLength * 120}vh`;

  // --- Animation Variants ---
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const mainVariants = {
    initial: { opacity: 0, scale: 0.95 },
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

  const textContentVariants = {
    initial: { opacity: 0, x: -30 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 30, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const imageContentVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#111111] isolate"
      style={{ height: scrollableHeight }}
    >
      <div className="sticky top-0 z-10 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <motion.div
          className="absolute inset-0 z-0"
          variants={backgroundVariants}
          animate={isContentCard ? "visible" : "hidden"}
          style={{ background: backgroundGradients.content }}
        />

        <div className="relative flex w-full h-full items-center justify-center">
          <AnimatePresence mode="wait">
            {/* Intro + Outro */}
            {(activeCard === 0 || activeCard === cardLength - 1) && (
              <motion.div
                key={cards[activeCard].id}
                variants={mainVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full w-full"
              >
                {cards[activeCard].content}
              </motion.div>
            )}

            {/* Content Pages */}
            {isContentCard && (
              <motion.div
                key="content_wrapper"
                className="flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center justify-center md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-8"
              >
                <div className="w-full md:w-5/12 flex items-center justify-center text-center md:text-left mb-6 md:mb-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCard}
                      variants={textContentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      {cards[activeCard].LeftContent &&
                        cards[activeCard].LeftContent()}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div
                  className={cn(
                    "w-full md:w-7/12 aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl bg-neutral-900/60 backdrop-blur-md shadow-2xl overflow-hidden flex items-center justify-center",
                    contentClassName
                  )}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCard}
                      variants={imageContentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="h-full w-full"
                    >
                      {cards[activeCard].content}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};