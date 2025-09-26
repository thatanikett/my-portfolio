// src/components/sections/Hero.tsx
"use client";

import LiquidEther from "@/components/backgrounds/LiquidEither";

export function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Layer - LiquidEther */}
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full pointer-events-none">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4 pointer-events-auto">Your Name</h1>
          <p className="text-xl pointer-events-auto mb-8">Full-Stack Developer & Linux Enthusiast</p>
          <div className="flex gap-4 justify-center pointer-events-auto">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/30 transition-all duration-200"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
