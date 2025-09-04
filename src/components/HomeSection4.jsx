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
    title: "GitHub Collaboration",
    description: `"Code is better when shared." My GitHub reflects not just code, but teamwork—where ideas grow, feedback refines solutions, and collaboration drives innovation. I actively use Git workflows, branching strategies, and pull requests to ensure clean, scalable, and maintainable code. Pair programming, real-time collaboration, and open communication are at the core of my development process, making GitHub an essential hub of my daily coding journey.`,
    content: (
      <div className="flex items-center justify-center h-full w-full rounded-2xl">
        <img
          src="https://preview.redd.it/g38817mqb1361.png?width=1080&crop=smart&auto=webp&s=09882e363acf8bba8194212dcb84713481bb481f"
          className="h-full w-full object-cover rounded-2xl"
          alt="collaboration demo"
        />
      </div>
    ),
  },
  {
    title: "LeetCode Journey",
    description: `Problem-solving is my daily fuel. With over 500+ problems solved and 1,600+ submissions in the past year, LeetCode has sharpened my ability to think critically and optimize solutions. I enjoy tackling challenges across Easy, Medium, and Hard levels, building strong foundations in DSA | CP | and DP.  

    My streaks, badges, and consistent practice reflect my passion for coding, persistence, and growth as a developer. To me, LeetCode is not just about solving problems—it's about learning to write clean, efficient, and scalable code every day.`,
    content: (
      <div className="flex items-center justify-center h-full w-full rounded-2xl">
        <img
          src="https://wallpapercave.com/wp/wp14289970.jpg"
          className="h-full w-full object-cover rounded-2xl"
          alt="leetcode demo"
        />
      </div>
    ),
  },
  {
    title: "Adobe Creative Cloud",
    description: `**Creativity meets technology.** I use **Adobe Photoshop** extensively for image editing, graphic design, and advanced **image manipulation**. From creating digital artwork to retouching and enhancing visuals, Photoshop is my go-to tool for bringing imagination to life.  

    Alongside Photoshop, I also explore **Adobe Premiere Pro** for basic video editing, **Adobe Audition** for sound design, and **Adobe Fonts** to give my designs a professional and creative touch.  

    These tools help me express ideas visually, blending technical precision with artistic creativity.`,
    content: (
      <div className="flex items-center justify-center h-full w-full rounded-2xl">
        <img
          src="https://e0.pxfuel.com/wallpapers/545/698/desktop-wallpaper-adobe-creative-cloud-2021.jpg"
          className="h-full w-full object-cover object-[75%_center] rounded-2xl"
          alt="adobe creative cloud demo"
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
