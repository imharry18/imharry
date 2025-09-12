import myImageUrl from "../../assets/myOfficial.jpg";
import { motion } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";

export default function AboutMeCard() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-4 bg-[#111111] overflow-hidden">
      {/* Profile Image */}
      <img src={myImageUrl} alt="Harish Chouhan" className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 object-cover rounded-full mb-4 shadow-[0_0_40px_rgba(236,72,153,0.7)]" />

      {/* Name */}
      <h1 className="relative z-10 text-2xl sm:text-3xl font-bold text-white mb-2">
        Harish Chouhan
      </h1>

      {/* Text */}
      <p className="relative z-10 max-w-md text-sm sm:text-base md:text-lg text-gray-200 text-center">
        I'm Harry, from Jammu & Kashmir, India.
      </p>
      <p className="relative z-10 max-w-md text-sm sm:text-base md:text-lg text-gray-200 text-center">
        DSA | CP | WebDev
      </p>

      {/* Neon Semicircle Glare peeking from bottom */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 -translate-x-1/2
          bottom-[-46vh]
          h-[140vh] w-[140vh]
          rounded-full
          blur-3xl opacity-85 mix-blend-screen
          [background:radial-gradient(closest-side_at_center,_rgba(168,85,247,0.95),_rgba(236,72,153,0.6)_42%,_rgba(56,189,248,0.28)_64%,_rgba(0,0,0,0)_72%)]
        "
      />

      {/* Extra bloom aura for depth */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 -translate-x-1/2
          bottom-[-54vh]
          h-[160vh] w-[160vh]
          rounded-full
          blur-[95px] opacity-70 mix-blend-screen
          [background:radial-gradient(circle_at_center,_rgba(236,72,153,0.35),_rgba(0,0,0,0)_58%)]
        "
      />

      {/* Rising particles (CSS only, randomized via inline styles) */}
      <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden pointer-events-none">
        {Array.from({ length: 45 }).map((_, i) => {
          const left = Math.random() * 100;
          const delay = Math.random() * 3;
          const dur = 2 + Math.random() * 3;
          const scale = 0.5 + Math.random() * 1.6;
          const hue = 280 + Math.random() * 80;
          const alpha = 0.25 + Math.random() * 0.6;

          return (
            <span
              key={i}
              className="absolute bottom-0 block rounded-full"
              style={{
                left: `${left}%`,
                width: "4px",
                height: "4px",
                backgroundColor: `hsla(${hue}, 100%, 80%, ${alpha})`,
                boxShadow: "0 0 8px rgba(255,255,255,0.45)",
                filter: "drop-shadow(0 0 6px hsla(300,100%,70%,0.45))",
                animation: `rise ${dur}s linear ${delay}s infinite`,
                transform: `scale(${scale})`,
                opacity: alpha,
              }}
            />
          );
        })}
      </div>

      {/* Bottom grounding fade for contrast */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/70 to-transparent" />
      
      {/* Animated Arrow Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.2, // Delay to appear after other animations
          ease: "easeOut",
        }}
        className="absolute bottom-10 z-20"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <IconChevronDown className="h-8 w-8 text-neutral-400" />
        </motion.div>
      </motion.div>

      {/* Inline keyframes for particles (Corrected) */}
      <style>{`
        @keyframes rise {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          75% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-220px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
