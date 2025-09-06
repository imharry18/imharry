// StickyScroll.jsx
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
import ContactMeCard from "./ContactMeCard.jsx";
import AboutMeIntroLeft from "./AboutMeIntroLeft.jsx";
import ContactMeOutroLeft from "./ContactMeOutroLeft.jsx";

// Example: content array of middle cards
const extraCards = [
  {
    title: "Skills",
    description: "React, Next.js, TypeScript, Framer Motion, Tailwind CSS",
    content: (
      <div className="text-white text-xl flex flex-col items-center justify-center h-full bg-neutral-900 rounded-2xl p-4">
        <span className="text-center">Building performant and beautiful web UIs.</span>
      </div>
    ),
    LeftContent: null,
  },
  // Add other middle cards here...
];

export const StickyScroll = ({ content = extraCards, contentClassName }) => {
  const cards = [
    {
      title: "About Me",
      description: "",
      content: <AboutMeCard />,
      LeftContent: <AboutMeIntroLeft />,
    },
    ...content.map((card) => ({
      ...card,
      LeftContent:
        card.LeftContent ||
        (() => (
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">{card.title}</h1>
            <p className="mt-4 max-w-md text-base text-gray-200 md:text-lg">{card.description}</p>
          </div>
        ))(),
    })),
    {
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

  const gradients = [
    "#111111",
    "linear-gradient(to bottom right, #31B7C2, #7BC393)",
    "#111111",
  ];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionProgress = latest * cardLength;
    const currentIndex = Math.max(0, Math.min(cardLength - 1, Math.floor(sectionProgress)));
    setActiveCard(currentIndex);
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  // Determines if box shadow should be shown (middle cards only)
  const hasShadow = !(activeCard === 0 || activeCard === cards.length - 1);

  const contentVariants = {
    hidden: { opacity: 0, boxShadow: "none" },
    visible: {
      opacity: 1,
      boxShadow: hasShadow ? "0 6px 24px 0 rgba(0,0,0,0.18)" : "none",
      transition: {
        opacity: { duration: 0.4, ease: "easeInOut" },
        boxShadow: { delay: 0.4, duration: 0 }
      },
    },
    exit: { opacity: 0, boxShadow: "none", transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const scrollableHeight = `${cardLength * 100}vh`;

  return (
    <section ref={ref} className="relative w-full bg-[#111111]" style={{ height: scrollableHeight }}>
      <motion.div
        className="sticky top-0 z-10 flex h-screen w-full items-center justify-center p-4"
        animate={{ background: gradients[activeCard] || "#111111" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-7xl mx-auto md:gap-16">
          {/* Left Content */}
          <div className="relative flex-1 w-full md:w-1/2" style={{ minHeight: "250px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex items-center justify-center md:items-start md:justify-start h-full"
              >
                {cards[activeCard].LeftContent}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Preview */}
          <div
            className={cn(
              "mt-10 md:mt-0 flex w-full max-w-sm sm:max-w-md md:max-w-none md:w-1/2 h-80 md:h-[500px] items-center justify-center",
              contentClassName
            )}
            style={{ position: "relative" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="h-full w-full rounded-2xl overflow-hidden"
              >
                {cards[activeCard].content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
