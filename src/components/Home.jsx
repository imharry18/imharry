import React from "react";
import sideImage from "../assets/123.png";
import logoTrans from "../assets/logoTrans.png";
import LightRays from './ui/LightRays.jsx';
import Orb from './ui/Orb.jsx';
"use client";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* LightRays background - bottom layer */}
      <div style={{ 
        position: 'absolute', 
        top: 0, left: 0, right: 0, bottom: 0, 
        zIndex: 0 
      }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#3d3d3d"
          raysSpeed={5}
          lightSpread={10}
          rayLength={5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0.0}
          className="custom-rays"
        />
      </div>

      <div style={{
        position: 'absolute',
        top: 30, left: 0, right: 0, bottom: 0,
        zIndex: 1,            
        pointerEvents: 'none',
        opacity: 0.3,         
      }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Full width logoTrans as background */}
      <img
        src={logoTrans}
        alt="Background Logo"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100vw',
          height: 'auto',
          opacity: 0.1,
          pointerEvents: 'none',
          zIndex: 2,
          userSelect: 'none',
          objectFit: 'contain',
          maxHeight: '80vh',
          paddingLeft: '30px',
          paddingRight: '30px'
        }}
      />

      <div className="relative bg-opacity-70 rounded-lg max-w-8xl w-full mt-16 justify-center flex gap-20 flex-wrap z-10">
        {/* Center Image */}
        <div
          className="flex-2 mt-5 min-w-[280px] flex items-center justify-center relative"
          style={{ 
            position: 'relative',
            width: 'auto', 
            maxWidth: '600px',
          }}
        >
          <img
            src={sideImage}
            alt="Harry"
            className="rounded-lg shadow-lg object-cover max-w-full max-h-[600px] w-auto relative"
            style={{ zIndex: 10, opacity: 0.9 }}
          />
        </div>
      </div>
      
      {/* Overlaid Text Content */}
      <div className="absolute bottom-16 left-16 top-80 text-white p-6 rounded-lg max-w-8xl" style={{ zIndex: 11 }}>
        <p className="font-orbitron text-cyan-400 font-semibold tracking-wider mb-4 text-lg">I'm HARRY</p>
        <h1 className="font-orbitron text-6xl md:text-7xl font-bold leading-tight">
          CS Engineer
          <div className="mt-2 text-cyan-400 text-5xl">Competitive Programmer</div>
        </h1>
        <p className="mt-6 text-gray-400 max-w-lg">
          Web-Developer | Problem-Solver | Data-Analyst | AI-ML 
        </p>
        <p className="text-gray-400 italic max-w-2xl">
          "I'm Harry, bringing ideas to life through clean and efficient code. I'm passionate about making everything simple and effective, turning complex problems into elegant solutions."
        </p>
      </div>
    </div>
  );
};

export default Home;