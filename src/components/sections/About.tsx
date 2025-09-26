// src/components/sections/AboutSection.tsx
"use client"

export function AboutSection() {
  return (
    <section 
      id="about"
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        position: 'relative',
        zIndex: 20,
        pointerEvents: 'none'
      }}
    >
      <div style={{ 
        maxWidth: '900px', 
        width: '100%',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '15px',
        padding: '3rem',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'white',
        pointerEvents: 'auto'
      }}>
        <h2 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          About Me
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8',
          textAlign: 'justify',
          opacity: 0.9
        }}>
          I am a passionate full-stack developer with a love for creating beautiful and functional web applications. My journey in tech started with a fascination for how things work, which led me to explore everything from low-level systems and Linux to modern front-end frameworks. I thrive on challenges and am constantly learning new technologies to expand my skillset. When I'm not coding, you can find me customizing my Arch Linux setup, exploring new open-source software, or contributing to the community.
        </p>
      </div>
    </section>
  )
}
