"use client";

import React from "react";
import { motion } from "framer-motion";
import PlatformHandleLinksDock from "./PlatformHandleLinksDock.jsx";
import { Vortex } from "./Vortex.jsx";

// --- Helper Form Components ---
const cn = (...classes) => classes.filter(Boolean).join(" ");

const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex w-full flex-col gap-1", className)}>{children}</div>
);

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("text-sm font-semibold text-neutral-300 mb-1", className)}
    {...props}
  />
));
Label.displayName = "Label";

const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-950/80 px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-cyan-500/50 transition duration-300",
      className
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

// --- The Main Component ---
export default function FinalContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic would go here.
    alert("Thank you for your message! (Demo Submission)");
  };

  return (
    // Set a minimum height of the screen, allow vertical scrolling if content overflows
    <div className="w-full mx-auto min-h-screen bg-[#111111] overflow-y-auto hide-scrollbar">
      <Vortex
        backgroundColor="black"
        // Ensure Vortex's inner container can handle centering and potential scrolling
        className="flex items-center flex-col justify-center px-4 w-full min-h-screen"
        particleCount={700}
        rangeY={200}
        baseRadius={1}
        rangeRadius={1.5}
        baseSpeed={0.1}
        rangeSpeed={0.5}
      >
        {/* Gradient Overlay for seamless transition */}
        <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-[#111111] via-transparent to-[#111111]" />

        {/* --- Main Content Layout --- */}
        {/* Added padding for spacing on smaller screens */}
        <div className="relative z-20 flex flex-col md:flex-row w-full max-w-6xl items-center justify-center gap-8 md:gap-16 py-20">
          {/* --- Left Column: Intro Text & Socials --- */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            >
              Contact Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-300 max-w-md mb-8"
            >
              Interested in collaborating or just want to connect? Feel free to
              reach out. I'm looking forward to hearing from you!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <PlatformHandleLinksDock />
            </motion.div>
          </div>

          {/* --- Right Column: Contact Form --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-full max-w-md md:w-1/2 bg-black/30 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl"
          >
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
              Let's Build Something Amazing
            </h2>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row w-full gap-4 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First Name</Label>
                  <Input
                    id="firstname"
                    placeholder="Harish"
                    type="text"
                    required
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input
                    id="lastname"
                    placeholder="Chouhan"
                    type="text"
                    required
                  />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="imharry@example.com"
                  type="email"
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="message">Project Description</Label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="flex h-32 w-full resize-none rounded-md border border-neutral-800 bg-neutral-950/80 px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-cyan-500/50 transition duration-300"
                  required
                ></textarea>
              </LabelInputContainer>
              <button
                className="h-10 w-full rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 font-semibold text-white shadow-lg transition hover:brightness-110"
                type="submit"
              >
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </Vortex>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

