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

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Skills', href: '/skills' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyles: React.CSSProperties = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 9999,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: isScrolled ? 0.95 : 1,
    transform: `translateX(-50%) scale(${isScrolled ? 0.98 : 1})`,
  };

  const containerStyles: React.CSSProperties = {
    background: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(75, 85, 99, 0.3)',
    borderRadius: '50px',
    padding: '8px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    minHeight: '56px',
  };

  const navLinkStyles: React.CSSProperties = {
    position: 'relative',
    padding: '10px 20px',
    fontSize: '15px',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '25px',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
  };

  const loginButtonStyles: React.CSSProperties = {
    background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
    color: '#000000',
    padding: '12px 24px',
    fontSize: '15px',
    fontWeight: '600',
    borderRadius: '25px',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
    marginLeft: '8px',
    border: 'none',
  };

  const separatorStyles: React.CSSProperties = {
    width: '1px',
    height: '24px',
    background: 'rgba(75, 85, 99, 0.5)',
    margin: '0 8px',
  };

  // Mobile styles
  const mobileContainerStyles: React.CSSProperties = {
    ...containerStyles,
    padding: '6px',
    minHeight: '48px',
  };

  const mobileNavLinkStyles: React.CSSProperties = {
    ...navLinkStyles,
    padding: '8px 16px',
    fontSize: '14px',
  };

  const mobileLoginButtonStyles: React.CSSProperties = {
    ...loginButtonStyles,
    padding: '10px 18px',
    fontSize: '14px',
    marginLeft: '4px',
  };

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .floating-navbar-container {
            padding: 6px !important;
            min-height: 48px !important;
          }
          .floating-navbar-link {
            padding: 8px 16px !important;
            font-size: 14px !important;
          }
          .floating-navbar-login {
            padding: 10px 18px !important;
            font-size: 14px !important;
            margin-left: 4px !important;
          }
          .floating-navbar-separator {
            margin: 0 4px !important;
          }
        }
        
        .floating-navbar-link:hover {
          color: rgba(255, 255, 255, 1) !important;
          background: rgba(255, 255, 255, 0.1) !important;
          transform: translateY(-1px) !important;
        }
        
        .floating-navbar-login:hover {
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%) !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3) !important;
        }
        
        .floating-navbar-active {
          color: rgba(255, 255, 255, 1) !important;
          background: rgba(255, 255, 255, 0.15) !important;
        }
      `}</style>
      
      <nav style={navbarStyles}>
        <div 
          className="floating-navbar-container"
          style={window.innerWidth <= 768 ? mobileContainerStyles : containerStyles}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {/* Navigation Links */}
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`floating-navbar-link ${activeItem === item.name ? 'floating-navbar-active' : ''}`}
                style={window.innerWidth <= 768 ? mobileNavLinkStyles : navLinkStyles}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Separator */}
            <div className="floating-navbar-separator" style={separatorStyles}></div>
            
            {/* Login Button */}
            <Link
              href="resume.pdf"
              className="floating-navbar-login"
              style={window.innerWidth <= 768 ? mobileLoginButtonStyles : loginButtonStyles}
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FloatingNavbar;
