import InfiniteMenu from '@/components/ui/InfiniteMenu';
import Navbar from '@/components/ui/navbar';


const skills = [
  {
    image: '/icons/nodejs-3.svg',
    link: 'https://nodejs.org/',
    title: 'Node.js',
    description: "A JavaScript runtime environment.",
    experience: "I have of experience with Node.js, building backend services."
  },
  {
    image: '/icons/expressjs.png',
    link: 'https://expressjs.com/',
    title: 'Express.js',
    description: "A minimal and flexible Node.js web application framework.",
    experience: "I have experience building web applications and APIs with Express.js."
  },
  {
    image: '/icons/react.jpg',
    link: 'https://react.dev/',
    title: 'React.js',
    description: "A JavaScript library for building user interfaces.",
    experience: "I am proficient in React.js and have built several single-page applications."
  },
  {
    image: '/icons/nextjs-original.svg',
    link: 'https://nextjs.org/',
    title: 'Next.js',
    description: "The React framework for production.",
    experience: "I have experience with Next.js for building server-rendered React applications."
  }
];

const SkillsPage = () => {
  return (
    <>
    <Navbar />
    <div className='w-full h-screen flex items-center justify-center bg-background'>
      <InfiniteMenu items={skills}/>
    </div>
    </>
  );
};

export default SkillsPage;