"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// --- Animated Icons for Button State ---
const AnimatedTick = () => (
    <motion.svg
        key="tick"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-6 h-6 text-white"
    >
        <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        />
    </motion.svg>
);

const AnimatedCross = () => (
    <motion.svg
        key="cross"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-6 h-6 text-white" 
    >
        <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        />
    </motion.svg>
);


// --- The Main Component ---
export default function FinalContactPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactReason: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "" | sending | success | error

  const MAX_MESSAGE_LENGTH = 500;

  // This new effect runs once when the component loads
  useEffect(() => {
    // Check for a 'reason' in the URL query parameters
    const params = new URLSearchParams(window.location.search);
    const reason = params.get('reason');

    // Map URL-friendly reasons to the dropdown's full text values
    const reasonMap = {
      'internship': 'Internship Opportunity',
      'collaboration': 'Project Collaboration',
      'freelance': 'Work Assignment / Freelance',
      'question': 'General Inquiry / Question'
    };
    
    // If a valid reason is found, update the form state
    if (reason && reasonMap[reason]) {
      setFormData(prev => ({
        ...prev,
        contactReason: reasonMap[reason]
      }));
    }
  }, []); // Empty array ensures this runs only on initial render


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mrbadybn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  useEffect(() => {
    let timer;
    if (status === "success") {
      timer = setTimeout(() => {
        setFormData({ firstname: "", lastname: "", email: "", contactReason: "", message: "" });
        setStatus("");
      }, 2500);
    } else if (status === "error") {
      timer = setTimeout(() => {
        setStatus("");
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [status]);


  return (
    <div className="w-full mx-auto min-h-screen bg-[#111111] overflow-y-auto hide-scrollbar">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-4 w-full min-h-screen"
        particleCount={700}
        rangeY={200}
        baseRadius={1}
        rangeRadius={1.5}
        baseSpeed={0.1}
        rangeSpeed={0.5}
      >
        <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-[#111111] via-transparent to-[#111111]" />

        <div className="relative z-20 flex flex-col md:flex-row w-full max-w-6xl items-center justify-center gap-8 md:gap-16 py-20">
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

          <motion.div
            id="contact-form" // Added ID for anchor scrolling
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
                  <Input id="firstname" placeholder="Harish" type="text" required maxLength="30" value={formData.firstname} onChange={handleChange} />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input id="lastname" placeholder="Chouhan" type="text" required maxLength="30" value={formData.lastname} onChange={handleChange} />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="imharry@example.com" type="email" required value={formData.email} onChange={handleChange} />
              </LabelInputContainer>
              
              <LabelInputContainer className="mb-4">
                <Label htmlFor="contactReason">Reason for Contact</Label>
                <div className="relative">
                    <select
                        id="contactReason"
                        required
                        value={formData.contactReason}
                        onChange={handleChange}
                        className={cn(
                          "appearance-none h-10 w-full rounded-md border border-neutral-800 bg-neutral-950/80 pl-3 pr-8 py-2 text-sm transition duration-300 outline-none focus:ring-2 focus:ring-cyan-500/50",
                          formData.contactReason === "" ? "text-neutral-400" : "text-neutral-200"
                        )}
                    >
                        <option value="" disabled>Select a reason...</option>
                        <option value="Internship Opportunity">Internship Opportunity</option>
                        <option value="Project Collaboration">Project Collaboration</option>
                        <option value="Work Assignment / Freelance">Work Assignment / Freelance</option>
                        <option value="General Inquiry / Question">General Inquiry / Question</option>
                        <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                    </div>
                </div>
              </LabelInputContainer>

              <LabelInputContainer className="mb-4 relative">
                <Label htmlFor="message">Project Description</Label>
                <textarea id="message" placeholder="Tell me about your project..." className="flex h-32 w-full resize-none rounded-md border border-neutral-800 bg-neutral-950/80 px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-cyan-500/50 transition duration-300 hide-scrollbar" required maxLength={MAX_MESSAGE_LENGTH} value={formData.message} onChange={handleChange}></textarea>
                <div className="absolute bottom-2 right-3 text-xs text-neutral-400 pointer-events-none">
                  {formData.message.length}/{MAX_MESSAGE_LENGTH}
                </div>
              </LabelInputContainer>
              
              <button
                className={cn(
                  "h-10 w-full rounded-md font-semibold text-white shadow-lg transition-all duration-300 flex items-center justify-center",
                   status === "error" ? "bg-red-600" : "bg-gradient-to-br from-blue-500 to-cyan-500 hover:brightness-110"
                )}
                type="submit"
                disabled={status === "sending" || status === "success" || status === "error"}
              >
                <AnimatePresence mode="wait">
                  {status === "sending" ? (
                     <motion.span key="sending" exit={{ opacity: 0 }}>Sending...</motion.span>
                  ) : status === "success" ? (
                     <AnimatedTick />
                  ) : status === "error" ? (
                     <motion.div key="error" className="flex items-center gap-2">
                        Not Sent <AnimatedCross />
                     </motion.div>
                  ) : (
                     <motion.span key="idle">Send Message →</motion.span>
                  )}
                </AnimatePresence>
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
        select option {
          background: #18181b;
          color: #e4e4e7;
        }
      `}</style>
    </div>
  );
}