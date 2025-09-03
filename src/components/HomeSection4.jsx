"use client";

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Clean & Scalable Code",
    description:
      "I believe in writing code that is simple, modular, and scalable. Clean code is not just about solving problems, but solving them in a way that future developers (including myself) can easily maintain and extend.",
    content: (
      <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 text-white text-2xl md:text-4xl font-bold rounded-2xl">
        Clean & Scalable Code
      </div>
    ),
  },
  {
    title: "Real-time Collaboration",
    description:
      "As a developer, I value teamwork and open communication. I’ve worked on projects where ideas evolve in real time, and collaboration drives innovation. Pair programming, Git workflows, and code reviews are part of my daily coding life.",
    content: (
      <div className="flex items-center justify-center h-full w-full rounded-2xl">
        <img
          src="/linear.webp"
          className="h-full w-full object-cover rounded-2xl"
          alt="collaboration demo"
        />
      </div>
    ),
  },
  {
    title: "Version Control Mastery",
    description:
      "Git is my second language. From branching strategies to pull requests and CI/CD pipelines, I ensure every project is well-managed and every change is tracked. Version control is not just a tool, it’s a mindset.",
    content: (
      <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-2xl md:text-4xl font-bold rounded-2xl">
        Version Control Mastery
      </div>
    ),
  },
  {
    title: "Passion for Learning",
    description:
      "Technology evolves every day, and so do I. Whether it’s exploring new frameworks, building side projects, or diving into open source, I never stop learning. For me, coding is not just work—it’s a lifelong passion.",
    content: (
      <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 text-white text-2xl md:text-4xl font-bold rounded-2xl">
        Passion for Learning
      </div>
    ),
  },
];

const HomeSection4 = () => {
  return (
    <div className="w-full bg-[#111111]">
      <StickyScroll content={content} />
    </div>
  );
};

export default HomeSection4;
