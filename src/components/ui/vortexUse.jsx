import React from "react";
import { Vortex } from "./Vortex.jsx";

export function VortexDemo() {
  return (
    <div
      className="mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center w-full h-full">
      </Vortex>
    </div>
  );
}
export default VortexDemo;