"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

export default function ExpandableCardproject() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      // NEW: Dispatch event to hide navbar
      window.dispatchEvent(new CustomEvent('modalOpen'));
      
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
      
      const preventDefault = (e: TouchEvent) => {
        if (e.target !== document.querySelector('[data-modal-scroll]')) {
          e.preventDefault();
        }
      };
      
      document.addEventListener('touchmove', preventDefault, { passive: false });
      
      return () => {
        // NEW: Dispatch event to show navbar
        window.dispatchEvent(new CustomEvent('modalClose'));
        
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
        window.removeEventListener("keydown", onKeyDown);
        document.removeEventListener('touchmove', preventDefault);
      };
    }
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <div className="py-20" id="projects">
      {/* Section Heading */}
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: "700",
            textAlign: "center",
            background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.02em",
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            position: "relative",
            marginTop: "6rem",
            marginBottom: "10px",
          }}>
          My Projects
        </h2>
        <p className="text-center text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed" 
           style={{marginBottom:"2rem"}}>
          A showcase of my latest web development projects, featuring modern technologies and innovative solutions
        </p>
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 h-full w-full z-50"
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-50">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-8 w-8 shadow-lg z-10"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            
            {/* Rest of your modal content stays exactly the same */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {/* All your existing modal content here - don't change anything */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <div className="relative w-full h-80 lg:h-80">
                  <Image
                    src={active.src}
                    alt={active.title}
                    fill
                    className="sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                </div>
              </motion.div>

              <div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6" style={{margin:"1rem"}}>
                    <div className="flex-1 pr-4">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-2xl md:text-3xl text-neutral-800 dark:text-neutral-200 leading-tight"
                      >
                        {active.title}
                      </motion.h3>
                    </div>
                    
                    <div className="flex gap-3 flex-shrink-0">
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-full bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white transition-colors duration-200"
                        style={{padding:"10px"}}
                      >
                        <GitHubIcon />
                        GitHub
                      </motion.a>
                      
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors duration-200"
                        style={{padding:"10px"}}
                      >
                        <ExternalLinkIcon />
                        Visit
                      </motion.a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6" style={{marginLeft:"1rem"}}>
                    {active.techStack.map((tech, index) => (
                      <img
                        key={index}
                        src={tech.icon}
                        alt={tech.name}
                        title={tech.name}
                        className="w-8 h-8"
                      />
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-8 relative" style={{padding:"1rem", marginBottom:"4rem"}}>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed h-60 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] p-4"
                    data-modal-scroll
                    style={{ overscrollBehavior: 'contain' }}
                    onWheel={(e) => {
                      e.stopPropagation();
                      const element = e.currentTarget;
                      const { scrollTop, scrollHeight, clientHeight } = element;
                      
                      if ((scrollTop === 0 && e.deltaY < 0) || 
                          (scrollTop + clientHeight >= scrollHeight && e.deltaY > 0)) {
                        e.preventDefault();
                      }
                    }}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchMove={(e) => {
                      e.stopPropagation();
                      const element = e.currentTarget;
                      const { scrollTop, scrollHeight, clientHeight } = element;
                      
                      if (scrollTop <= 0 || scrollTop + clientHeight >= scrollHeight) {
                        return;
                      }
                    }}
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Card Grid - Keep exactly the same */}
      <ul className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-8" style={{padding:"1rem"}}>
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="group p-6 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            style={{padding:"1rem"}}
          >
            <div className="flex gap-6 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <div className="relative h-48 md:h-56 w-full rounded-xl overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
              <div className="flex justify-center items-center flex-col gap-4">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 text-center leading-tight"
                >
                  {card.title}
                </motion.h3>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {card.techStack.slice(0, 4).map((tech, index) => (
                    <img
                      key={`${card.title}-${index}`}
                      src={tech.icon}
                      alt={tech.name}
                      title={tech.name}
                      className="w-7 h-7"
                    />
                  ))}
                  {card.techStack.length > 4 && (
                    <span className="inline-flex items-center justify-center w-7 h-7 bg-neutral-100 dark:bg-neutral-700 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-300">
                      +{card.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

// Keep all your existing icons and cards array exactly the same
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-neutral-600 dark:text-neutral-300"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const cards = [
  {
    title: "Todo Web App", 
    src: "/images/todo.png",
    liveLink: "https://your-todo-app.vercel.app",
    githubLink: "https://github.com/yourusername/todo-app",
    techStack: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" }
    ],
    content: () => {
      return (
        <p>
          A modern todo web application built with React and Node.js, featuring 
          real-time updates and a clean, intuitive interface. Users can create, 
          edit, delete, and organize tasks with drag-and-drop functionality. 
          <br /><br />
          The application includes user authentication, task categorization, due date 
          reminders, and progress tracking. Built with responsive design principles, 
          it works seamlessly across desktop and mobile devices. Features include 
          dark/light theme toggle, local storage persistence, and smooth animations 
          for enhanced user experience.
        </p>
      );
    },
  },
  {
    title: "Knowledge Nest",
    src: "/images/blog.png",
    liveLink: "https://thatanikett.github.io/knowlegde-nest/",
    githubLink: "https://github.com/thatanikett/knowlegde-nest",
    techStack: [
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript" }
    ],
    content: () => {
      return (
        <p>
          A simple blogging website create using just HTML, CSS, JS, and it was my first project in web development, it has total of 4 pages with a navbar for navigation . 
          <br /><br />
          The website have videos as its background and each page has a different video related to that blog topic, and there is some informations and blogs related to the topic, there is also comment feature at the last of each blog webpage
        </p>
      );
    },
  },
  {
    title: "FND",
    src: "/images/fnd.png", 
    liveLink: "https://fnd-three.vercel.app/",
    githubLink: "https://github.com/thatanikett/FND",
    techStack: [
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript" },
      { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css" }
    ],
    content: () => {
      return (
        <p>
          F.N.D. is a web-based application that analyzes news articles and text to provide a credibility score. It uses a set of heuristics to identify potential fake news, propaganda, and misinformation. The application features a retro-terminal design for its user interface.
          <br /><br />
          This application is a demonstration and should not be used to determine the credibility of real news articles. The analysis is based on a limited set of rules and does not guarantee accuracy. Always verify important claims through multiple reputable sources
        </p>
      );
    },
  },
  {
    title: "Weather Web Application",
    src: "", 
    liveLink: "https://your-weather-app.vercel.app",
    githubLink: "https://github.com/yourusername/weather-app",
    techStack: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css" }
    ],
    content: () => {
      return (
        <p>
          A comprehensive weather application providing real-time weather data 
          and forecasts for locations worldwide. Built with React and integrated 
          with OpenWeatherMap API for accurate, up-to-date information. 
          <br /><br />
          Features include current weather conditions, 7-day forecasts, hourly 
          predictions, and weather maps. The app includes geolocation support, 
          favorite locations, weather alerts, and beautiful animated backgrounds 
          that change based on weather conditions. Designed with accessibility 
          in mind and optimized for both desktop and mobile experiences.
        </p>
      );
    },
  },
];
