import React from "react";
import sideImage from "../assets/123.png";
import logoTrans from "../assets/logoTrans.png";
import LightRays from './ui/LightRays.jsx';
import Orb from './ui/Orb.jsx';
"use client";

const Home = () => {
  return (
    <div className="relative mt-0 xl:mt-10 lg:mt-10 w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3d3d3d"
          raysSpeed={0.5}
          lightSpread={1}
          rayLength={3}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0}
          distortion={0.0}
        />
      </div>
      <div className="absolute inset-0 z-1 opacity-20 pointer-events-none">

      </div>
      <img
        src={logoTrans}
        alt="Background Logo"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-h-[80vh] object-contain p-[30px] opacity-10 pointer-events-none select-none z-2"
      />

      {/* Main Content Container for layout */}
      <div className="relative w-full flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 pt-20 lg:pt-0">
        
        {/* Centered Image */}
        <div className="relative flex-shrink-0" style={{ zIndex: 10 }}>
          <img
            src={sideImage}
            alt="Harry"
            className="rounded-lg shadow-lg object-cover max-w-[70vw] md:max-w-[500px] lg:max-w-[600px] max-h-[80vh] lg:max-h-[600px] w-auto opacity-90"
          />
        </div>

        {/* Text Content */}
        {/* Adjusted with negative margin-top for mobile view to bring it closer to the image */}
        <div 
          className="relative lg:absolute bottom-0 lg:bottom-20 lg:left-16 w-full lg:w-auto text-center lg:text-left p-6 rounded-lg text-white max-w-2xl -mt-28 md:-mt-16 lg:mt-0" 
          style={{ zIndex: 11 }}
        >
          <p className="font-orbitron text-cyan-400 font-semibold tracking-wider mb-2 text-md lg:text-lg">I'm HARRY</p>
          <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            CS Engineer
            <div className="mt-2 text-cyan-400 text-3xl lg:text-4xl">Competitive Programmer</div>
          </h1>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
            Web-Developer | Problem-Solver | Data-Analyst | AI-ML 
          </p>
          <p className="mt-4 text-gray-400 italic max-w-2xl mx-auto lg:mx-0 text-xs sm:text-sm">
            "I'm Harry, bringing ideas to life through clean and efficient code. I'm passionate about making everything simple and effective, turning complex problems into elegant solutions."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;