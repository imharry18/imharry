"use client";

import React from "react";
import { motion } from "framer-motion";
import PlatformHandleLinksDock from "./PlatformHandleLinksDock.jsx";

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
    <div className="relative flex h-full w-full flex-col items-center justify-center p-4 bg-[#111111] overflow-y-auto">
      
      {/* --- Main Content Layout --- */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl items-center justify-center gap-8 md:gap-16 mt-16 md:mt-0">

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
            Interested in collaborating or just want to connect? Feel free to reach out. I'm looking forward to hearing from you!
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
              <LabelInputContainer><Label htmlFor="firstname">First Name</Label><Input id="firstname" placeholder="Harish" type="text" required /></LabelInputContainer>
              <LabelInputContainer><Label htmlFor="lastname">Last Name</Label><Input id="lastname" placeholder="Chouhan" type="text" required /></LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4"><Label htmlFor="email">Email</Label><Input id="email" placeholder="imharry@example.com" type="email" required /></LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Project Description</Label>
              <textarea id="message" placeholder="Tell me about your project..." className="flex h-32 w-full resize-none rounded-md border border-neutral-800 bg-neutral-950/80 px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-cyan-500/50 transition duration-300" required></textarea>
            </LabelInputContainer>
            <button className="h-10 w-full rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 font-semibold text-white shadow-lg transition hover:brightness-110" type="submit">
              Send Message →
            </button>
          </form>
        </motion.div>
      </div>
      
      {/* --- Background Effects --- */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-46vh] h-[140vh] w-[140vh] rounded-full blur-3xl opacity-85 mix-blend-screen [background:radial-gradient(closest-side_at_center,_rgba(168,85,247,0.95),_rgba(236,72,153,0.6)_42%,_rgba(56,189,248,0.28)_64%,_rgba(0,0,0,0)_72%)]" />
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-54vh] h-[160vh] w-[160vh] rounded-full blur-[95px] opacity-70 mix-blend-screen [background:radial-gradient(circle_at_center,_rgba(236,72,153,0.35),_rgba(0,0,0,0)_58%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden pointer-events-none">
        {Array.from({ length: 45 }).map((_, i) => {
          const left = Math.random() * 100;
          const delay = Math.random() * 4;
          const dur = 3 + Math.random() * 4;
          const scale = 0.6 + Math.random() * 1.5;
          const hue = 280 + Math.random() * 80;
          const alpha = 0.3 + Math.random() * 0.6;
          return (
            <span
              key={i}
              className="absolute bottom-0 block rounded-full"
              style={{
                left: `${left}%`,
                width: "4px",
                height: "4px",
                backgroundColor: `hsla(${hue}, 100%, 80%, ${alpha})`,
                boxShadow: "0 0 8px rgba(255,255,255,0.5)",
                filter: "drop-shadow(0 0 6px hsla(300,100%,70%,0.5))",
                animation: `rise ${dur}s linear ${delay}s infinite`,
                transform: `scale(${scale})`,
              }}
            />
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <style>{`
        @keyframes rise {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-220px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}