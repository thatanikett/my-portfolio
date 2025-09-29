// src/components/sections/ProjectsSection.tsx
"use client"

export function ProjectsSection() {
  const projects = [
    { name: "E-commerce Platform", tech: ["React", "Node.js", "MongoDB"] },
    { name: "Weather App", tech: ["JavaScript", "API", "CSS"] },
    { name: "Portfolio Website", tech: ["Next.js", "Three.js", "Tailwind"] },
    { name: "Task Manager", tech: ["React", "Express", "PostgreSQL"] },
    { name: "Chat Application", tech: ["Socket.io", "React", "Node.js"] },
    { name: "Blog Platform", tech: ["Next.js", "Prisma", "TypeScript"] }
  ]

  return (
    <section 
      id="projects"
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        position: 'relative',
        pointerEvents: 'none',
        zIndex: 2,
        // background: '#1a1a1a'
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%', pointerEvents: 'auto' }}>
        <h2 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          marginBottom: '3rem', 
          color: 'white',
          textAlign: 'center'
        }}>
          Projects
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div 
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.55)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: 'white', 
                marginBottom: '1rem' 
              }}>
                {project.name}
              </h3>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                marginBottom: '1rem' 
              }}>
                A brief description of the project and its key features.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    style={{
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(82, 39, 255, 0.3)',
                      color: '#B19EEF',
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
