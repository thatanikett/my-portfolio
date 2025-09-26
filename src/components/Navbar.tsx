// src/components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close, then scroll so the overlay/exit animation doesn't block scrolling
  const handleNav = (href: string) => {
    const el = document.querySelector(href) as HTMLElement | null;
    setOpen(false);
    setTimeout(() => {
      el?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }, 350);
  };

  // Mobile sheet animation
  const sheet = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeOut" } },
  };

  const item = {
    closed: { opacity: 0, x: -16, transition: { duration: 0.2 } },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.08, duration: 0.25, ease: "easeOut" },
    }),
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/30 backdrop-blur-xl border-b border-white/20 shadow-2xl"
          : "bg-black/20 backdrop-blur-lg"
      }`}
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Mobile bar */}
        <div className="flex items-center justify-between h-16 lg:hidden">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center space-x-3 text-white hover:text-blue-400 transition"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl grid place-items-center shadow-lg">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-semibold text-lg hidden xs:block">Aniket</span>
          </a>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => !v);
            }}
            className="p-3 rounded-xl text-white hover:text-blue-400 hover:bg-white/10 border border-white/20"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <motion.svg
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.25 }}
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {open ? (
                <path strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Desktop bar */}
        <div className="hidden lg:flex h-16 items-center justify-between">
          {/* Left: logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 text-white hover:text-blue-400 transition"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl grid place-items-center shadow-md">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-semibold text-xl">Aniket</span>
          </a>

          {/* Center: nav items with clear spacing */}
          <ul
            className="
              grid grid-flow-col auto-cols-max gap-8
              bg-white/5 backdrop-blur-md border border-white/10
              rounded-full px-3 py-2
            "
          >
            {navItems.map((n) => (
              <li key={n.name}>
                <a
                  href={n.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(n.href);
                  }}
                  className="
                    inline-flex items-center
                    px-6 py-2.5
                    rounded-full
                    text-base font-medium
                    text-white/90 hover:text-white
                    hover:bg-white/10 transition
                    whitespace-nowrap
                  "
                >
                  {n.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: CTAs */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#contact");
              }}
              className="
                inline-flex items-center
                px-6 py-2.5
                rounded-lg text-base font-semibold
                text-white/90 hover:text-white
                hover:bg-white/10 border border-white/20 transition
                whitespace-nowrap
              "
            >
              Let’s Talk
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                px-7 py-2.5
                rounded-lg text-base font-bold text-white
                bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500
                hover:from-blue-600 hover:via-purple-700 hover:to-pink-600
                transition shadow-lg whitespace-nowrap
              "
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Mobile sheet with backdrop */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop closes menu on tap */}
            <motion.div
              className="fixed inset-0 z-40 lg:hidden"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ background: "rgba(0,0,0,0.2)" }}
            />
            {/* Sliding sheet that stops propagation so inner taps work */}
            <motion.div
              className="lg:hidden fixed inset-x-0 top-16 z-50"
              variants={sheet}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-4 mb-4 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
                <div className="px-6 py-6 space-y-2">
                  {navItems.map((n, i) => (
                    <motion.a
                      key={n.name}
                      href={n.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(n.href);
                      }}
                      variants={item}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      custom={i}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="block px-6 py-4 rounded-2xl text-lg font-semibold text-white/90 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20 transition"
                    >
                      {n.name}
                    </motion.a>
                  ))}

                  <div className="pt-4 space-y-3 border-t border-white/20">
                    <motion.a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav("#contact");
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block text-center px-6 py-4 rounded-2xl text-lg font-semibold text-white/90 hover:text-white hover:bg-white/10 border border-white/20 transition"
                    >
                      Let’s Talk
                    </motion.a>
                    <motion.a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block text-center px-8 py-4 rounded-2xl text-lg font-bold text-white bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 transition shadow-xl"
                    >
                      Download Resume
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
