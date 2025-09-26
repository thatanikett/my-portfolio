// src/app/page.tsx
import { HeroSection } from "@/components/sections/Hero";
import { PortfolioNavbar } from "@/components/Navbar";
import PageBackground from "@/components/backgrounds/PageBackground";

export default function Home() {
  return (
    <>
      {/* Global background that spans entire page */}
      <PageBackground />
      
      {/* Navbar */}
      <PortfolioNavbar />
      
      <main>
        <HeroSection />
        
        {/* About Section */}
        <section 
          id="about"
          className="min-h-screen flex items-center justify-center px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 text-white">About Me</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              I'm a passionate full-stack developer with expertise in the MERN stack, 
              Linux systems, and modern web technologies. I love creating innovative 
              solutions and exploring the intersection of technology and user experience.
            </p>
          </div>
        </section>
        
        {/* Projects Section */}
        <section 
          id="projects"
          className="min-h-screen flex items-center justify-center px-8"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div key={project} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-4">Project {project}</h3>
                  <p className="text-white/70">Project description goes here...</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section 
          id="skills"
          className="min-h-screen flex items-center justify-center px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 text-white">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['React', 'Node.js', 'MongoDB', 'Linux', 'TypeScript', 'AWS', 'Git', 'Docker'].map((skill) => (
                <div key={skill} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section 
          id="contact"
          className="min-h-screen flex items-center justify-center px-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 text-white">Get In Touch</h2>
            <p className="text-xl text-white/80 mb-8">
              Let's collaborate on your next project or discuss opportunities.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="mailto:your@email.com" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                Send Email
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
