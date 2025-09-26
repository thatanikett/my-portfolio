// src/components/backgrounds/SimpleLiquidBackground.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import LiquidEther from "@/components/backgrounds/LiquidEither";

export default function SimpleLiquidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    if (containerRef.current) {
      const container = containerRef.current;
      
      // Apply styles directly to avoid CSS conflicts
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        overflow: hidden;
        pointer-events: auto;
        background: transparent;
      `;
    }
  }, []);

  // Only render after mounting to avoid SSR issues
  if (!isMounted) {
    return (
      <div 
        ref={containerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          backgroundColor: '#0a0a0a'
        }}
      />
    );
  }

  return (
    <div ref={containerRef}>
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={25}
        cursorSize={120}
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
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          background: 'transparent'
        }}
      />
    </div>
  );
}
