import React from 'react';

// --- Replaced placeholder SVGs with high-quality, professional icons ---
const socials = [
  { 
    name: "GitHub", 
    link: "https://github.com/", 
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    name: "LinkedIn", 
    link: "https://linkedin.com/", 
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.714c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.714h-3v-5.6c0-1.33-.024-3.033-1.85-3.033-1.85 0-2.135 1.448-2.135 2.936v5.697h-3v-11h2.887v1.316h.04c.4-.757 1.378-1.55 2.848-1.55 3.045 0 3.608 1.998 3.608 4.595v5.328z"/>
      </svg>
    )
  },
  { 
    name: "X", 
    link: "https://x.com/", 
    icon: (
       <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
];

// --- A sleek, self-contained Contact Form component ---
const ContactForm = () => (
  <form className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
        Full Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="block w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition duration-300"
        placeholder="Harish Chouhan"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="block w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition duration-300"
        placeholder="you@example.com"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="4"
        className="block w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition duration-300"
        placeholder="Your message..."
      ></textarea>
    </div>
    <div>
      <button
        type="submit"
        className="w-full text-center py-3 px-6 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Send Message
      </button>
    </div>
  </form>
);


const ContactMePage = () => (
  <>
    {/* --- Embedded styles for custom animations --- */}
    <style>{`
      @keyframes gradient-animation {
        0% { transform: translate(20%, -10%) scale(1.5); }
        25% { transform: translate(-20%, 30%) scale(1.2); }
        50% { transform: translate(30%, 50%) scale(1.5); }
        75% { transform: translate(10%, -20%) scale(1.3); }
        100% { transform: translate(20%, -10%) scale(1.5); }
      }
      @keyframes card-fade-in {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-gradient {
        animation: gradient-animation 25s ease infinite;
      }
      .animate-card {
        animation: card-fade-in 0.8s ease-out forwards;
      }
    `}</style>

    <div className="relative min-h-screen flex items-center justify-center bg-[#111111] text-white px-4 py-10 overflow-hidden">
      
      {/* Dynamic Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-gradient"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-gradient" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Main content card with Glassmorphism effect */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row gap-10 md:gap-16 shadow-2xl rounded-3xl bg-black/40 backdrop-blur-lg p-8 md:p-12 animate-card">
        
        {/* Left Section: Intro and Socials */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-md mb-8">
            Have a project, a question, or just want to connect? My inbox is always open. I look forward to hearing from you!
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ name, link, icon }) => (
              <a
                key={name}
                href={link}
                aria-label={name}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                <div className="w-8 h-8">{icon}</div>
              </a>
            ))}
          </div>
          
        </div>
        
        {/* Right Section: Contact Form */}
        <div className="flex-1 w-full">
          <ContactForm />
        </div>

      </div>
    </div>
  </>
);

export default ContactMePage;