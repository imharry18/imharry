"use client";
import React from "react";
import VortexUse from "./vortexUse.jsx"; // Background component

export default function ContactForm() {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Selected file:", selectedFile ? selectedFile.name : "None");
    alert("Thank you for your message! (Demo Submission)");
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl rounded-3xl md:rounded-4xl overflow-hidden">
      {/* Animated vortex background */}
      <div className="absolute inset-0 z-0">
        <VortexUse />
      </div>

      {/* Modern Glassy Contact Form Card */}
      <div
        className="relative z-10 border border-neutral-800/60 bg-neutral-950/70 shadow-[0_8px_24px_0_rgba(0,0,0,0.25)] backdrop-blur-md rounded-2xl md:rounded-3xl"
      >
        <div className="px-5 py-8 md:p-10 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-300 to-neutral-500">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-base md:text-lg text-neutral-300 font-normal">
            Have a project in mind or an interesting opportunity? I'd love to hear from you. Fill in your details below!
          </p>

          <form className="mt-2 flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Harish" type="text" required />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Chouhan" type="text" required />
              </LabelInputContainer>
            </div>

            <LabelInputContainer>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="project.inquiry@example.com"
                type="email"
                required
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="message">Project Description</Label>
              <textarea
                id="message"
                placeholder="Tell me about your project, goals, and what you're looking to achieve."
                className="flex min-h-[96px] md:min-h-[130px] w-full resize-none rounded-xl border border-neutral-800/40 bg-neutral-950/80 px-4 py-3 text-base text-neutral-200 placeholder:text-neutral-500 shadow-sm transition focus:border-teal-500 focus:ring-2 focus:ring-teal-600"
                required
              ></textarea>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="file">Attach a Project Brief (PDF)</Label>
              <div className="relative">
                <label
                  htmlFor="file-upload"
                  className="flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-neutral-800/40 bg-neutral-950/70 px-4 text-base font-medium text-neutral-300 shadow-sm hover:border-teal-600 hover:text-white transition"
                >
                  <IconFileDescription className="h-5 w-5" />
                  <span>{selectedFile ? selectedFile.name : "Choose File"}</span>
                </label>
                <Input
                  id="file-upload"
                  onChange={handleFileChange}
                  type="file"
                  className="hidden"
                  accept=".pdf"
                />
              </div>
            </LabelInputContainer>

            <button
              className="group/btn relative h-12 w-full rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 font-semibold text-white text-base shadow-xl transition hover:brightness-110"
              type="submit"
            >
              Send Message →
              <BottomGradient />
            </button>
          </form>
        </div>
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
  <div className={cn("flex w-full flex-col gap-2", className)}>{children}</div>
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
      "flex h-12 w-full rounded-xl border border-neutral-800/40 bg-neutral-950/80 px-4 py-2 text-base text-neutral-200 placeholder:text-neutral-500 shadow-sm transition focus:border-teal-500 focus:ring-2 focus:ring-teal-600",
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
    className={cn("h-5 w-5", className)}
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    <path d="M9 17h6" />
    <path d="M9 13h6" />
  </svg>
);
