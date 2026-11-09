"use client";

import React from "react";
import GoldGlitterCanvas from "./GoldGlitterCanvas";

export default function BackgroundEffects() {
  return (
    <>
      {/* 1. Interactive Gold Glitter Canvas Layer */}
      <GoldGlitterCanvas />

      {/* 2. Luxury Ambient Lighting & Radial Glow Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Top Center Golden Arch Spotlight */}
        <div
          className="absolute left-1/2 top-[-10%] -translate-x-1/2 w-[600px] md:w-[950px] h-[600px] md:h-[800px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(242, 192, 110, 0.25) 0%, rgba(107, 5, 8, 0.3) 50%, transparent 75%)",
            animation: "pulseGlow 6s ease-in-out infinite",
          }}
        />

        {/* Left Side Rich Ruby Radiant Ambient Light */}
        <div
          className="absolute left-[-15%] top-[35%] w-[450px] h-[550px] rounded-full opacity-45 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(141, 28, 24, 0.4) 0%, rgba(107, 5, 8, 0.2) 60%, transparent 80%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />

        {/* Right Side Golden Warmth Ambient Light */}
        <div
          className="absolute right-[-15%] top-[55%] w-[480px] h-[580px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(242, 192, 110, 0.2) 0%, rgba(80, 2, 7, 0.25) 60%, transparent 80%)",
            animation: "float 9s ease-in-out 1.5s infinite",
          }}
        />

        {/* Bottom Ambient Glow */}
        <div
          className="absolute left-1/2 bottom-[-10%] -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(107, 5, 8, 0.5) 0%, rgba(242, 192, 110, 0.15) 50%, transparent 75%)",
          }}
        />
      </div>

      {/* 3. Continuously Drifting Flower Petals in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
      >
        {[
          { left: "10%", delay: "0s", duration: "20s", color: "#f2c06e", size: "18px", sway: "30px" },
          { left: "22%", delay: "-5s", duration: "24s", color: "#8d1c18", size: "22px", sway: "-25px" },
          { left: "40%", delay: "-12s", duration: "18s", color: "#ffdfaf", size: "16px", sway: "20px" },
          { left: "62%", delay: "-3s", duration: "22s", color: "#f2c06e", size: "20px", sway: "-35px" },
          { left: "78%", delay: "-16s", duration: "25s", color: "#b32420", size: "24px", sway: "25px" },
          { left: "92%", delay: "-8s", duration: "19s", color: "#f6e3c1", size: "17px", sway: "-20px" },
        ].map((petal, i) => (
          <div
            key={i}
            className="absolute top-[-30px] opacity-70"
            style={{
              left: petal.left,
              color: petal.color,
              fontSize: petal.size,
              animation: `ambient-fall ${petal.duration} ease-in-out ${petal.delay} infinite`,
              // @ts-ignore
              "--sway": petal.sway,
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
              <path d="M12 2C9.5 6 6 9.5 6 13a6 6 0 0 0 12 0c0-3.5-3.5-7-6-11z" />
            </svg>
          </div>
        ))}
      </div>
    </>
  );
}

