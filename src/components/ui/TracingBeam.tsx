"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { cn } from "../../lib/utils";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
}

export const TracingBeam = ({ children, className, containerRef }: TracingBeamProps) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const scrollY = useMotionValue(0);

  useEffect(() => {
    function updateHeight() {
      if (!containerRef.current) return;
      setContainerHeight(containerRef.current.scrollHeight);
    }

    function onScroll() {
      if (!containerRef.current) return;
      const scrollTop = window.scrollY;
      const containerTop = containerRef.current.getBoundingClientRect().top + scrollTop;
      const relativeScroll = scrollTop - containerTop;
      scrollY.set(relativeScroll > 0 ? relativeScroll : 0);
    }

    updateHeight();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateHeight);
    };
  }, [containerRef, scrollY]);

  // scrollProgress from 0 to 1 as scrollY changes inside container
  const scrollProgress = useTransform(
    scrollY,
    [0, containerHeight - window.innerHeight],
    [0, 1],
    { clamp: true }
  );

  const y1 = useSpring(
    useTransform(scrollProgress, [0, 0.8], [50, containerHeight]),
    { stiffness: 500, damping: 90 }
  );
  const y2 = useSpring(
    useTransform(scrollProgress, [0, 1], [50, containerHeight - 200]),
    { stiffness: 500, damping: 90 }
  );

  return (
    <motion.div className={cn("relative h-full w-full max-w-4xl", className)}>
      <div
        className="fixed top-[80px] left-3"
        style={{ width: 20, height: containerHeight, zIndex: 50, pointerEvents: "none" }}
        aria-hidden="true"
      >
        <svg viewBox={`0 0 20 ${containerHeight}`} width="20" height={containerHeight} className="block">
          <motion.path d={`M 10 0 V ${containerHeight}`} stroke="#9091A0" strokeOpacity="0.16" fill="none" />
          <motion.path d={`M 10 0 V ${containerHeight}`} stroke="url(#gradient)" strokeWidth="1.5" fill="none" />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      <div className="ml-[30px]">{children}</div>
    </motion.div>
  );
};
