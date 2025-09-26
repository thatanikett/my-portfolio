// src/app/page.tsx
import { HeroSection } from "@/components/sections/Hero";
import { PortfolioNavbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <PortfolioNavbar />
      <main style={{ paddingTop: '0px' }}>  {/* Remove padding since navbar is fixed */}
        <HeroSection />
        
        {/* Add more content sections to see the scroll effect */}
        <section style={{ height: '100vh', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: '#333' }}>Scroll up to see navbar resize</h2>
        </section>
        
        <section style={{ height: '100vh', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: '#333' }}>More content to scroll</h2>
        </section>
      </main>
    </>
  );
}
