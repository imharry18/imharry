"use client";
import { SparklesCore } from "./ui/Sparkles.jsx";


const HomeSection2 = () => {
  return (
    <div>
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
          <p className="text-lg leading-relaxed mb-6 mx-20">
            I'm Harry, a passionate Brand Identity & Package Designer based in Tokyo. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands. I love to do Code whenever I am free I hope that you would like my this website Portfolio
          </p>
    </div>
    </div>
  )
}

export default HomeSection2