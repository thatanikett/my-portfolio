// src/app/page.tsx
import { HeroSection } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/About'
import ExpandableCardproject from '@/components/sections/Projects'
import { ContactSection } from '@/components/sections/Contact'
import GlobalLiquidBackground from '@/components/backgrounds/GlobalBackground'
import SimpleNavbar from '@/components/ui/navbar'
export default function Home() {
  return (
    <>
      <SimpleNavbar />
      {/* Global background that spans entire page */}
      <GlobalLiquidBackground />
      
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
