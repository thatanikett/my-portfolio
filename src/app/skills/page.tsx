// skills/page.tsx
import InfiniteMenu from '@/components/ui/InfiniteMenu';
import Navbar from '@/components/ui/navbar';
import Squares from '@/components/backgrounds/Squares'; // Add this import

const skills = [
  {
    image: '/icons/nodejs-3.svg',
    link: 'https://nodejs.org/',
    title: 'Node.js',
    description: "A powerful JavaScript runtime built on Chrome's V8 engine, enabling server-side development with event-driven, non-blocking I/O for building scalable network applications.",
    experience: "Foundational knowledge of Node.js for backend development. Currently building practical experience through personal projects."
  },
  {
    image: '/icons/expressjs.png',
    link: 'https://expressjs.com/',
    title: 'Express.js',
    description: "A minimal and flexible Node.js web application framework providing robust features for building web and mobile applications with streamlined routing and middleware integration.",
    experience: "Intermediate understanding of backend architecture including file structure, routing, controllers, middleware, authentication, models, and ORM integration for database management."
  },
  {
    image: '/icons/react.jpg',
    link: 'https://react.dev/',
    title: 'React.js',
    description: "A declarative JavaScript library for building dynamic user interfaces through reusable components, featuring efficient rendering with virtual DOM and extensive ecosystem support.",
    experience: "Working knowledge of React fundamentals and component-based architecture. Comfortable integrating UI component libraries and building functional interfaces."
  },
  {
    image: '/icons/nextjs-original.svg',
    link: 'https://nextjs.org/',
    title: 'Next.js',
    description: "The React framework for production featuring server-side rendering, static site generation, and built-in routing. Optimized for performance with automatic code splitting.",
    experience: "Learning Next.js through hands-on project development. Currently working on this portfolio as my first Next.js application to understand its core concepts."
  },
  {
    image: '/icons/canva.png',
    link: 'https://www.canva.com/',
    title: 'Canva',
    description: "A versatile design platform for creating visual content from presentations to UI mockups. Features drag-and-drop interface with extensive templates and design resources.",
    experience: "Proficient in creating informative and visually appealing presentations. Skilled at leveraging Canva's resources for UI design concepts and visual communication."
  }
];


const SkillsPage = () => {
  return (
    <>
      <Navbar />
      
      {/* Fixed background layer */}
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
          direction='diagonal'
          borderColor='#3B3347'
          hoverFillColor='#222222'
        />
      </div>

      {/* Content layer - positioned above background */}
      <div 
        className='w-full h-screen flex items-center justify-center bg-transparent'
        style={{ position: 'relative', zIndex: 2 }}
      >
        <InfiniteMenu items={skills}/>
      </div>
    </>
  );
};

export default SkillsPage;
