// src/components/sections/Hero.tsx
'use client'

import Shuffle from '@/components/ui/shuffle';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 600);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh',
      padding: '0 1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        zIndex: 1,
        color: 'white',
        textAlign: 'center',
        pointerEvents: 'none'
      }}>
        {/* Avatar Image */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 'clamp(1.5rem, 4vw, 3rem)'
        }}>
          <div style={{
            width: 'clamp(120px, 20vw, 200px)',
            height: 'clamp(120px, 20vw, 200px)',
            // // borderRadius: '50%',
            // overflow: 'hidden',
            // border: '3px solid rgba(255, 255, 255, 0.8)',
            // boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(0, 0, 0, 0.5)',
            // background: 'rgba(0, 0, 0, 0.3)',
            imageRendering: 'pixelated'
          }}>
            <img
              src="/images/hoodedwojak.png"
              alt="Avatar"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                imageRendering: 'auto'
              }}
            />
          </div>
        </div>

        {/* Simplified Name Rendering - No Loading Animations */}
        {isMobile ? (
          // Mobile: Two lines - No slide animations
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Shuffle
              text="ANIKET"
              tag="h1"
              className="pixel-hero-name"
              style={{
                fontSize: 'clamp(1.8rem, 12vw, 3rem)',
                margin: '0',
                fontWeight: 'normal',
                color: 'white',
                fontFamily: "var(--font-press-start), 'Courier New', monospace",
                letterSpacing: 'clamp(0.05em, 2vw, 0.15em)',
                lineHeight: '1.1',
                textShadow: '1px 1px 0px #000000, 2px 2px 5px rgba(0,0,0,0.5)'
              }}
              shuffleDirection="right"
              duration={0.5}
              animationMode="evenodd"
              shuffleTimes={2}
              ease="power2.out"
              stagger={0.08}
              threshold={0.1}
              loop={true}
              loopDelay={6}
              scrambleCharset="ANIKET"
              colorFrom="#ffffff"
              colorTo="#ffffff"
              respectReducedMotion={true}
            />
            
            <Shuffle
              text="SINGH"
              tag="h1"
              className="pixel-hero-name"
              style={{
                fontSize: 'clamp(1.8rem, 12vw, 3rem)',
                margin: '0',
                fontWeight: 'normal',
                color: 'white',
                fontFamily: "var(--font-press-start), 'Courier New', monospace",
                letterSpacing: 'clamp(0.05em, 2vw, 0.15em)',
                lineHeight: '1.1',
                textShadow: '1px 1px 0px #000000, 2px 2px 5px rgba(0,0,0,0.5)'
              }}
              shuffleDirection="left"
              duration={0.5}
              animationMode="evenodd"
              shuffleTimes={2}
              ease="power2.out"
              stagger={0.08}
              threshold={0.1}
              loop={true}
              loopDelay={6.5}
              scrambleCharset="SINGH"
              colorFrom="#ffffff"
              colorTo="#ffffff"
              respectReducedMotion={true}
            />
          </div>
        ) : (
          // Desktop: Single line - No loading animations
          <Shuffle
            text="ANIKET SINGH"
            tag="h1"
            className="pixel-hero-name"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              marginBottom: '1rem',
              fontWeight: 'normal',
              color: 'white',
              fontFamily: "var(--font-press-start), 'Courier New', monospace",
              letterSpacing: 'clamp(0.05em, 1vw, 0.1em)',
              lineHeight: '1.3',
              textShadow: '2px 2px 0px #000000, 4px 4px 10px rgba(0,0,0,0.5)'
            }}
            shuffleDirection="right"
            duration={0.6}
            animationMode="evenodd"
            shuffleTimes={2}
            ease="power2.out"
            stagger={0.05}
            threshold={0.3}
            triggerOnce={false}
            triggerOnHover={true}
            loop={true}
            loopDelay={5}
            scrambleCharset="ANIKETSINGH"
            colorFrom="#ffffff"
            colorTo="#ffffff"
            respectReducedMotion={true}
          />
        )}

        {/* Static Tagline - No Animations */}
        <p style={{ 
          fontSize: 'clamp(0.8rem, 3vw, 1.2rem)',
          marginTop: isMobile ? '1.5rem' : '1rem',
          marginBottom: '2rem', 
          opacity: 0.9,
          fontFamily: "var(--font-press-start), 'Courier New', monospace",
          letterSpacing: 'clamp(0.02em, 0.5vw, 0.05em)',
          padding: '0 0.5rem',
          lineHeight: '1.4',
        }}>
          WEB-DEVELOPER AND OPEN-SOURCE ENTHUSIAST
        </p>
        
        {/* Static Buttons - No Animations */}
        <div style={{ 
          display: 'flex', 
          gap: 'clamp(0.5rem, 2vw, 1.5rem)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          pointerEvents: 'auto',
          padding: '0 0.5rem'
        }}>
          <a 
            href="#projects" 
            className="mobile-button"
            style={{
              padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.2rem, 4vw, 2rem)',
              background: 'rgba(75, 85, 99, 0.8)',
              border: '2px solid #ffffff',
              borderRadius: '0',
              color: 'white',
              textDecoration: 'none',
              fontSize: 'clamp(0.6rem, 1.8vw, 0.9rem)',
              fontWeight: 'normal',
              fontFamily: "var(--font-press-start), 'Courier New', monospace",
              letterSpacing: 'clamp(0.02em, 0.3vw, 0.05em)',
              transition: 'all 0.2s ease',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              imageRendering: 'pixelated'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.color = '#000000'
              e.currentTarget.style.transform = 'translate(-2px, -2px)'
              e.currentTarget.style.boxShadow = '2px 2px 0px #000000'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(75, 85, 99, 0.8)'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.transform = 'translate(0px, 0px)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            VIEW PROJECTS
          </a>
          <a 
            href="https://github.com/thatanikett" 
            target="_blank"
            className="mobile-button"
            style={{
              padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.2rem, 4vw, 2rem)',
              background: '#000000',
              border: '2px solid #ffffff',
              borderRadius: '0',
              color: 'white',
              textDecoration: 'none',
              fontSize: 'clamp(0.6rem, 1.8vw, 0.9rem)',
              fontWeight: 'normal',
              fontFamily: "var(--font-press-start), 'Courier New', monospace",
              letterSpacing: 'clamp(0.02em, 0.3vw, 0.05em)',
              transition: 'all 0.2s ease',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              imageRendering: 'pixelated'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.color = '#000000'
              e.currentTarget.style.transform = 'translate(-2px, -2px)'
              e.currentTarget.style.boxShadow = '2px 2px 0px #ffffff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#000000'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.transform = 'translate(0px, 0px)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            VIEW MY GITHUB
          </a>
        </div>
      </div>

      {/* Simplified CSS - Only Essential Styles */}
      <style jsx>{`
        .pixel-hero-name {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }

        /* Button responsive styles */
        @media (max-width: 480px) {
          .mobile-button {
            max-width: 100%;
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
