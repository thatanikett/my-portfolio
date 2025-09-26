// src/components/sections/Hero.tsx
'use client'

export function HeroSection() {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh',
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        color: 'white',
        textAlign: 'center',
        pointerEvents: 'none'
      }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: 'bold' }}>Aniket Singh</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.9 }}>Full-Stack Developer & Linux Enthusiast</p>
        
        {/* Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          pointerEvents: 'auto' // Re-enable pointer events for buttons
        }}>
          <a 
            href="#projects" 
            style={{
              padding: '1rem 2rem',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50px',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
            }}
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(45deg, #5227FF, #B19EEF)',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}
