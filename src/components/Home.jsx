import React from "react";
import dpimage from "../assets/dpimage.jpg";
import sideImage from "../assets/123.png";
import logoTrans from "../assets/logoTrans.png";  // Import the logoTrans.png
import LightRays from './ui/LightRays.jsx';
import Orb from './ui/Orb.jsx';
"use client";
import { SparklesCore } from "./ui/Sparkles.jsx";

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
          top: '50%',               // center vertically (adjust if needed)
          left: '50%',              // center horizontally
          transform: 'translate(-50%, -50%)',
          width: '100vw',           // full viewport width
          height: 'auto',
          opacity: 0.1,             // subtle transparency, adjust as needed
          pointerEvents: 'none',
          zIndex: 2,                // below the image container zIndex (10)
          userSelect: 'none',
          objectFit: 'contain',     // preserve aspect ratio
          maxHeight: '80vh',
          paddingLeft: '30px',        // prevent it from getting too tall
          paddingRight: '30px'        // prevent it from getting too tall
        }}
      />

      <div className=" relative bg-opacity-70 rounded-lg max-w-8xl w-full mt-16 justify-center flex gap-20 flex-wrap z-10">
        {/* Center Image */}
        <div
          className="flex-2 mt-5 min-w-[280px] flex items-center justify-center relative"
          style={{ 
            position: 'relative',
            width: 'auto', 
            maxWidth: '600px',
          }}
        >
          {/* Main Image */}
          <img
            src={sideImage}
            alt="Harry"
            className="rounded-lg shadow-lg object-cover max-w-full max-h-[600px] w-auto relative"
            style={{ zIndex: 10,
            opacity: 0.9 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
