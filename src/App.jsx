import React, { useRef } from "react";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import { TracingBeam } from './components/ui/TracingBeam.jsx';
import HomeSection2 from "./components/HomeSection2.jsx";

export default function App() {
  const containerRef = useRef(null);

  return (
    <div className="relative bg-[#0f0f0f]">
      <Navbar />
      <main className="pt-18 text-white" ref={containerRef}>
        <section
          id="home"
          className="flex flex-col items-center "
        >
            <Home />
            <HomeSection2 />
        </section>
      </main>
    </div>
  );
}
