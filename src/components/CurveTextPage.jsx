import CurvedLoop from './ui/CurvedLoop.jsx';
"use client";
import { WobbleCard } from './ui/Wobble-Card.jsx';
import gitImage from "../assets/Git.png";
import codolioImage from "../assets/Codolio.png";

const CurveText = () => {
  return (
    <div className=' py-10 space-y-4'>
      <CurvedLoop
        marqueeText="Harry ✦ Competitive Programmer ✦ Data Structures ✦ LeetCode ✦ GitHub ✦ Graphics Designing ✦ Adobe Photoshop ✦ Java ✦ Python ✦ GeeksforGeeks ✦"
        textColor="white"
        speed={0.5}
        curveAmount={10}
        direction="left"
        className="text-5xl font-syne" 
      />

          {/* WOBBLE CARD CODE  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-4 sm:px-6 relative">
  <WobbleCard
    containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] relative"
  >
    <div className="max-w-xs">
      <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Building with Code & Creativity
      </h2>
      <p className="mt-4 text-left text-base/6 text-neutral-200">
        From scalable apps to smart solutions and projects — I love turning complex ideas into clean, working software.
      </p>
    </div>
    <img
      src={gitImage}
      width={500}
      height={500}
      alt="linear demo image"
      className="absolute -right-[20%] md:-right-[30%] xl:-right-[20%] -bottom-10 object-contain rounded-2xl filter"
    />
  </WobbleCard>

  <WobbleCard containerClassName="col-span-1 min-h-[300px] relative">
    <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
      Problem Solving on LeetCode
    </h2>
    <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
      Sharpening my skills daily with algorithms and data structures to write efficient and elegant solutions.
    </p>
  </WobbleCard>

  <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative">
    <div className="max-w-sm">
      <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Always Learning. Always Building.
      </h2>
      <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
        I have solved <b className='text-xl'>500+</b> Problems on DSA & CP and Exploring new technologies, improving my craft, and building impactful projects that solve real problems.
      </p>
    </div>
    <img
      src={codolioImage}
      width={600}
      height={600}
      alt="linear demo image"
      className="absolute -right-8 md:-right-[20%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl"
    />
  </WobbleCard>
</div>


    
    </div>
    
  )
}

export default CurveText;
