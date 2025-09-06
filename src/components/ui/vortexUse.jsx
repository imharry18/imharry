import React from "react";
import { Vortex } from "./Vortex.jsx";

export function VortexDemo() {
  return (
    <div
      className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center w-full h-full">
      </Vortex>
    </div>
  );
}
export default VortexDemo;