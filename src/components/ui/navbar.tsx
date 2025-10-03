'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
}

const FloatingNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '/skills' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getNavbarStyles = (): React.CSSProperties => ({
    position: 'fixed',
    top: isMobile ? '12px' : '20px',
    left: '50%',
    transform: `translateX(-50%) scale(${isScrolled ? 0.98 : 1})`,
    zIndex: 9999,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 1,
    maxWidth: isMobile ? 'calc(100vw - 24px)' : 'auto',
    width: isMobile ? '100%' : 'auto',
  });

  const getContainerStyles = (): React.CSSProperties => ({
    background: '#111827',
    border: '1px solid rgba(75, 85, 99, 0.3)',
    borderRadius: isMobile ? '20px' : '50px',
    padding: isMobile ? '6px 8px' : '8px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobile ? 'flex-start' : 'center',
    gap: isMobile ? '4px' : '6px',
    minHeight: isMobile ? '48px' : '60px',
    width: '100%',
    overflow: isMobile ? 'auto' : 'visible',
    // Enable smooth scrolling on mobile
    ...(isMobile && {
      overflowX: 'auto',
      overflowY: 'hidden',
      whiteSpace: 'nowrap',
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
      // Hide scrollbar but keep functionality
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    }),
  });

  const getNavLinkStyles = (itemName: string): React.CSSProperties => {
    const isActive = activeItem === itemName;
    const isHovered = hoveredItem === itemName;
    
    return {
      position: 'relative',
      padding: isMobile ? '10px 16px' : '12px 24px',
      fontSize: isMobile ? '14px' : '16px',
      fontWeight: '500',
      color: isActive || isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.8)',
      background: isActive ? 'rgba(255, 255, 255, 0.2)' : (isHovered ? 'rgba(255, 255, 255, 0.15)' : 'transparent'),
      borderRadius: isMobile ? '14px' : '28px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      textDecoration: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      flex: isMobile ? 'none' : 'auto',
      minWidth: isMobile ? 'auto' : 'auto',
      transform: isHovered ? `translateY(-2px) scale(1.05)` : 'translateY(0px) scale(1)',
      boxShadow: isActive ? '0 4px 15px rgba(255, 255, 255, 0.1)' : (isHovered ? '0 8px 25px rgba(255, 255, 255, 0.15)' : '0 0 0 0 rgba(255, 255, 255, 0)'),
    };
  };

  const getContactButtonStyles = (): React.CSSProperties => {
    const isHovered = hoveredItem === 'contact';
    
    return {
      background: isHovered 
        ? 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)'
        : 'linear-gradient(135deg, #4B5563 0%, #1F2937 100%)',
      color: isHovered ? '#111827' : '#ffffff',
      padding: isMobile ? '10px 16px' : '14px 28px',
      fontSize: isMobile ? '14px' : '16px',
      fontWeight: '600',
      borderRadius: isMobile ? '14px' : '28px',
      textDecoration: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: isHovered 
        ? '0 8px 30px rgba(255, 255, 255, 0.4)'
        : '0 4px 15px rgba(75, 85, 99, 0.3)',
      marginLeft: isMobile ? '6px' : '10px',
      border: 'none',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      transform: isHovered ? 'translateY(-2px) scale(1.05)' : 'translateY(0px) scale(1)',
    };
  };

  const getSeparatorStyles = (): React.CSSProperties => ({
    width: '1px',
    height: isMobile ? '24px' : '28px',
    background: 'rgba(75, 85, 99, 0.5)',
    margin: isMobile ? '0 6px' : '0 10px',
    flexShrink: 0,
  });

  return (
    <>
      <style jsx>{`
        /* Hide scrollbar but keep scrolling functionality */
        .floating-navbar-container::-webkit-scrollbar {
          display: none;
        }
        
        /* Mobile adjustments */
        @media (max-width: 480px) {
          .floating-navbar-link {
            font-size: 13px !important;
            padding: 8px 14px !important;
          }
          
          .floating-navbar-contact {
            font-size: 13px !important;
            padding: 8px 14px !important;
          }
        }

        @media (max-width: 375px) {
          .floating-navbar-link {
            font-size: 12px !important;
            padding: 8px 12px !important;
          }
          
          .floating-navbar-contact {
            font-size: 12px !important;
            padding: 8px 12px !important;
          }
        }
      `}</style>
      
      <nav style={getNavbarStyles()}>
        <div 
          className="floating-navbar-container"
          style={getContainerStyles()}
        >
          {/* Navigation Links */}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="floating-navbar-link"
              style={getNavLinkStyles(item.name)}
              onClick={() => setActiveItem(item.name)}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Separator */}
          <div style={getSeparatorStyles()}></div>
          
          {/* Let's Connect Button */}
          <Link
            href="#contact"
            className="floating-navbar-contact"
            style={getContactButtonStyles()}
            onClick={() => setActiveItem("Let's Connect !")}
            onMouseEnter={() => setHoveredItem('contact')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Let's Connect !
          </Link>
        </div>
      </nav>
    </>
  );
};

export default FloatingNavbar;
