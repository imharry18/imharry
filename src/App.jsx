import React, { useRef } from "react";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import CurveTextPage from './components/CurveTextPage.jsx';
import Footer from "./components/Footer.jsx";
import HomeSection3 from "./components/HomeSection3.jsx";
import HomeSection4 from "./components/HomeSection4.jsx";
import FinalContactPage from "./components/ui/FinalContactPage.jsx";


export default function App() {
  const containerRef = useRef(null);

  return (
    <div className="relative bg-[#0f0f0f]">
      <Navbar />
      <main className="pt-18 text-white" ref={containerRef}>
          <Home />
          <CurveTextPage />
          <HomeSection3 />
          <HomeSection4 />
          <FinalContactPage />
      </main>
      <Footer />
    </div>
  );
}
