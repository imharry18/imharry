import React from 'react';
import LogoLoop from './Effects/logo-loop';

// 1. Import icons from their correct packs.
// Note that FaJava is now imported from 'react-icons/fa'
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiAdobephotoshop,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  // SiJava, // This was the incorrect import
  SiPython,
  SiLeetcode,
  SiGeeksforgeeks
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa'; // <-- CORRECT IMPORT FOR JAVA

// 2. The array is updated to use the correct <FaJava /> component
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript / TSX", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaJava />, title: "Java", href: "https://www.java.com" }, // <-- CORRECT USAGE
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiAdobephotoshop />, title: "Adobe Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
  { node: <SiLeetcode />, title: "LeetCode", href: "https://leetcode.com" },
  { node: <SiGeeksforgeeks />, title: "GeeksforGeeks", href: "https://www.geeksforgeeks.org" },
];

const SectionForCheck = () => {
  return (
    <div className='flex items-center bg-[#111111] py-8'>
      <LogoLoop
        logos={techLogos}
        speed={70}
        logoHeight={60}
        gap={80}
        pauseOnHover={true}
        fadeOut={true}
        fadeOutColor="#111111"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default SectionForCheck;