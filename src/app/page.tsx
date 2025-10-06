// src/app/page.tsx
import { HeroSection } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/About'
import ExpandableCardproject from '@/components/sections/Projects'
import { ContactSection } from '@/components/sections/Contact'
import Squares from '@/components/backgrounds/Squares'
import SimpleNavbar from '@/components/ui/navbar'
export default function Home() {
  return (
    <>
      <SimpleNavbar />
      {/* Global background that spans entire page */}
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
    <Squares 
    speed={0.5} 
    squareSize={50}
    direction='diagonal' // up, down, left, right, diagonal
    borderColor='#3B3347'
    hoverFillColor='#222222'
    />
    </div>
      
      {/* All your content sections */}
      <main style={{ margin: 0, padding: 0}}>
        <HeroSection />
        <AboutSection />
        <div style={{zIndex: 2, position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex', padding: '2rem 1rem' }}>
            <ExpandableCardproject/>
        </div>
        <ContactSection />
      </main>
    </>
  )
}
