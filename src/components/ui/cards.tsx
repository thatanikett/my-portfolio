"use client";
import React from "react";

export const cards = [
  {
    title: "Todo Web Application",
    src: "/public/images/todo.png",
    liveLink: "https://your-todo-app.vercel.app",
    githubLink: "https://github.com/yourusername/todo-app",
    techStack: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
    ],
    content: () => {
      return (
        <p>
          A modern todo web application built with React and Node.js, featuring
          real-time updates and a clean, intuitive interface. Users can create,
          edit, delete, and organize tasks with drag-and-drop functionality.
          <br />
          <br />
          The application includes user authentication, task categorization, due
          date reminders, and progress tracking. Built with responsive design
          principles, it works seamlessly across desktop and mobile devices.
          Features include dark/light theme toggle, local storage persistence,
          and smooth animations for enhanced user experience.
        </p>
      );
    },
  },
  {
    title: "Blogging Website",
    src: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=500&h=300&fit=crop",
    liveLink: "https://your-blog.vercel.app",
    githubLink: "https://github.com/yourusername/blog-website",
    techStack: [
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript" },
    ],
    content: () => {
      return (
        <p>
          A full-featured blogging platform built with Next.js and MongoDB,
          offering a rich writing and reading experience. Writers can create
          posts with markdown support, image uploads, and SEO optimization.
          <br />
          <br />
          The platform includes user authentication, comment systems, social
          sharing, and advanced search functionality. Features include automated
          sitemap generation, RSS feeds, and analytics dashboard. Designed with
          performance in mind, it utilizes server-side rendering and optimized
          image loading for fast page speeds and excellent SEO rankings.
        </p>
      );
    },
  },
  {
    title: "Developer Portfolio",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    liveLink: "https://your-portfolio.vercel.app",
    githubLink: "https://github.com/yourusername/portfolio",
    techStack: [
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript" },
      { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    ],
    content: () => {
      return (
        <p>
          A modern, responsive portfolio website showcasing development projects
          and technical skills. Built with Next.js and TypeScript, featuring
          smooth animations and interactive elements that engage visitors.
          <br />
          <br />
          The portfolio includes project showcases, skills visualization,
          contact forms, and downloadable resume. Implements advanced CSS
          techniques, 3D animations, and micro-interactions for a memorable user
          experience. Optimized for performance with lazy loading, code
          splitting, and progressive web app features for fast loading across
          all devices.
        </p>
      );
    },
  },
  {
    title: "Weather Web Application",
    src: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    liveLink: "https://your-weather-app.vercel.app",
    githubLink: "https://github.com/yourusername/weather-app",
    techStack: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    ],
    content: () => {
      return (
        <p>
          A comprehensive weather application providing real-time weather data
          and forecasts for locations worldwide. Built with React and integrated
          with OpenWeatherMap API for accurate, up-to-date information.
          <br />
          <br />
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
