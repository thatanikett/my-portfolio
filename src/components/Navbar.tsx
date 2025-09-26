// src/components/navbar.tsx
"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

// Enhanced Logo Component with Better Sizing
const PortfolioLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-3 px-3 py-2 text-lg font-semibold text-black dark:text-white"
    >
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">A</span>
      </div>
      <span className="font-semibold text-lg">Aniket</span>
    </a>
  );
};

export function PortfolioNavbar() {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects", 
      link: "#projects",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="fixed top-0 left-0 right-0 z-50">
        {/* Desktop Navigation */}
        <NavBody className="mx-auto max-w-none">
          <div className="flex-shrink-0">
            <PortfolioLogo />
          </div>
          
          <div className="flex-1 flex justify-center">
            <NavItems 
              items={navItems} 
              className="flex items-center justify-center space-x-8"
            />
          </div>
          
          <div className="flex items-center gap-6 flex-shrink-0">
            <NavbarButton 
              variant="secondary"
              href="#contact"
              className="text-base px-6 py-3"
            >
              Contact
            </NavbarButton>
            <NavbarButton 
              variant="primary"
              href="/resume.pdf"
              target="_blank"
              className="text-base px-6 py-3"
            >
              Resume
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="mx-auto max-w-none">
          <MobileNavHeader>
            <PortfolioLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors text-lg py-3"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-6">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full text-base py-3"
                href="#contact"
              >
                Contact
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full text-base py-3"
                href="/resume.pdf"
                target="_blank"
              >
                Resume
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
