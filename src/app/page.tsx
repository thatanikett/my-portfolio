// src/app/page.tsx
import { HeroSection } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/About'
import { ProjectsSection } from '@/components/sections/Projects'
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
      <main style={{ margin: 0, padding: 0 }}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  )
}
