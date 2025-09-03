"use client";

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 text-white text-2xl md:text-4xl font-bold rounded-2xl">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex items-center justify-center h-full w-full rounded-2xl">
        <img
          src="/linear.webp"
          className="h-full w-full object-cover rounded-2xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-2xl md:text-4xl font-bold rounded-2xl">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 text-white text-2xl md:text-4xl font-bold rounded-2xl">
        Running out of content
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
