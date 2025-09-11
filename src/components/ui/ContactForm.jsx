"use client";
import React from "react";
import VortexUse from "./vortexUse.jsx"; // Background component

export default function ContactForm() {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! (Demo Submission)");
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-xl h-full rounded-none md:rounded-2xl overflow-hidden">
      {/* Animated vortex background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <VortexUse height="100%" />
      </div>

      {/* Contact Form Container */}
      <div
        className="relative z-10  bg-[radial-gradient(circle_at_center,transparent_10%,rgba(10,10,10,0.9)_100%)] x-4 py-6 md:px-8 md:py-10 rounded-2xl shadow-xl w-full"
        style={{
          boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 mb-2">
          Let's Build Something Amazing Together
        </h2>
        <form className="w-full mt-3" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row w-full gap-4 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First Name</Label>
              <Input id="firstname" placeholder="First Name" type="text" required />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last Name</Label>
              <Input id="lastname" placeholder="Last Name" type="text" required />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
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
              placeholder="Tell me about your project, goals, and what you're looking to achieve."
              className="flex h-32 w-full resize-none rounded-md border border-neutral-800 bg-neutral-950/80 px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:shadow focus:border-neutral-800 focus:bg-neutral-950"
              required
            ></textarea>
          </LabelInputContainer>

          <button
            className="relative h-10 w-full rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 font-semibold text-white shadow-lg transition hover:brightness-110 overflow-hidden"
            type="submit"
          >
            Send Message →
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

// --- Helper Components ---

const cn = (...classes) => classes.filter(Boolean).join(" ");

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex w-full flex-col gap-1", className)}>{children}</div>
);

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-semibold text-neutral-400 mb-1",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-950/80 px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:shadow focus:border-neutral-800 focus:bg-neutral-950 transition",
      className
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

const IconFileDescription = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    className={cn("h-4 w-4", className)}
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    <path d="M9 17h6" />
    <path d="M9 13h6" />
  </svg>
);
