'use client'

export function SkillsSection() {
  return (
    <section 
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {['React', 'Next.js', 'Node.js', 'MongoDB', 'Linux', 'TypeScript', 'AWS', 'Git', 'Docker', 'Python', 'Java', 'C++'].map((skill) => (
            <div key={skill} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-200">
              <span className="text-white font-medium text-sm sm:text-base">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
