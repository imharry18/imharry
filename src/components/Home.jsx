import React from "react";
import dpimage from "../assets/dpimage.jpg";
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

      <div className="relative bg-opacity-70 rounded-lg p-6 max-w-8xl w-full mx-10 mt-16 my-12 flex gap-12 flex-wrap z-10">
        <div className="flex-1 min-w-[280px] flex flex-col justify-center text-white">
          <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        I'm Harry
      </h1>
      <div className="relative w-[40rem] h-40 bg-transparent">
  {/* Decorative gradients (optional) */}
  <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
  <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
  <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
  <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

  {/* Sparkles Component */}
  <SparklesCore
    background="transparent"
    minSize={0.4}
    maxSize={1}
    particleDensity={1200}
    className="w-full h-full"
    particleColor="#ffffff"
  />

  {/* Optional radial mask gradient */}
  <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
</div>

    </div>
          <p className="text-lg leading-relaxed mb-6">
            I'm Harry, a passionate Brand Identity & Package Designer based in Tokyo. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.
          </p>
        </div>

        {/* Right Side - Image (increased size) */}
        <div className="flex-1 min-w-[280px] flex items-center justify-center">
          <img
            src={dpimage}
            alt="Harry"
            className="rounded-lg shadow-lg object-cover max-w-full max-h-[600px] w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
