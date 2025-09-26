// src/components/backgrounds/GlobalBackground.tsx
'use client'

import LiquidEither from '@/components/backgrounds/LiquidEither'

export default function SimpleLiquidBackground() {
  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      <LiquidEither
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
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
          height: '100%'
        }}
        className=""
      />
    </div>
  )
}
