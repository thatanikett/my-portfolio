'use client';

import LiquidEther from "@/components/backgrounds/LiquidEither";

export function HeroSection() {
  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100vh', 
        overflow: 'hidden' 
      }}
    >
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
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      {/* Add your hero content here */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        <h1 style={{ 
          color: 'white', 
          fontSize: '3rem', 
          textAlign: 'center',
          pointerEvents: 'auto' // Re-enable for text selection if needed
        }}>
          Welcome to My Portfolio
        </h1>
      </div>
    </div>
  );
}
