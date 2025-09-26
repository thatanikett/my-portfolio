// src/components/sections/Hero.tsx
"use client";

export function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Content - now without background since it's global */}
      <div className="text-center text-white z-10">
        <h1 className="text-7xl font-bold mb-6">Your Name</h1>
        <p className="text-2xl mb-12 text-white/90">Full-Stack Developer & Linux Enthusiast</p>
        <div className="flex gap-6 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/30 transition-all duration-200 text-lg font-medium"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-lg font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
