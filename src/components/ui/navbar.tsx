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
    opacity: isScrolled ? 0.95 : 1,
    maxWidth: isMobile ? 'calc(100vw - 24px)' : 'auto',
    width: isMobile ? '100%' : 'auto',
  });

  const getContainerStyles = (): React.CSSProperties => ({
    background: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(75, 85, 99, 0.3)',
    borderRadius: isMobile ? '20px' : '50px',
    padding: isMobile ? '6px 8px' : '8px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '2px' : '4px',
    minHeight: isMobile ? '44px' : '56px',
    width: '100%',
    overflow: 'hidden',
  });

  const getNavLinkStyles = (): React.CSSProperties => ({
    position: 'relative',
    padding: isMobile ? '8px 10px' : '10px 20px',
    fontSize: isMobile ? '13px' : '15px',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.8)',
    borderRadius: isMobile ? '12px' : '25px',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    flex: isMobile ? '1' : 'auto',
    minWidth: isMobile ? '0' : 'auto',
  });

  const getLoginButtonStyles = (): React.CSSProperties => ({
    background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
    color: '#000000',
    padding: isMobile ? '8px 12px' : '12px 24px',
    fontSize: isMobile ? '13px' : '15px',
    fontWeight: '600',
    borderRadius: isMobile ? '12px' : '25px',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
    marginLeft: isMobile ? '4px' : '8px',
    border: 'none',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  });

  const getSeparatorStyles = (): React.CSSProperties => ({
    width: '1px',
    height: isMobile ? '20px' : '24px',
    background: 'rgba(75, 85, 99, 0.5)',
    margin: isMobile ? '0 4px' : '0 8px',
    flexShrink: 0,
  });

  return (
    <>
      <style jsx>{`
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

        .floating-navbar-content {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 100% !important;
          gap: ${isMobile ? '2px' : '4px'} !important;
        }

        @media (max-width: 480px) {
          .floating-navbar-link {
            font-size: 12px !important;
            padding: 6px 8px !important;
          }
          
          .floating-navbar-login {
            font-size: 12px !important;
            padding: 6px 10px !important;
          }

          .floating-navbar-separator {
            margin: 0 2px !important;
          }
        }

        @media (max-width: 375px) {
          .floating-navbar-link {
            font-size: 11px !important;
            padding: 6px 6px !important;
          }
          
          .floating-navbar-login {
            font-size: 11px !important;
            padding: 6px 8px !important;
          }
        }

        /* Ensure text doesn't wrap on very small screens */
        @media (max-width: 320px) {
          .floating-navbar-link {
            font-size: 10px !important;
            padding: 5px 4px !important;
          }
          
          .floating-navbar-login {
            font-size: 10px !important;
            padding: 5px 6px !important;
          }
        }
      `}</style>
      
      <nav style={getNavbarStyles()}>
        <div style={getContainerStyles()}>
          <div className="floating-navbar-content">
            {/* Navigation Links */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`floating-navbar-link ${activeItem === item.name ? 'floating-navbar-active' : ''}`}
                style={getNavLinkStyles()}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Separator - Hide on very small screens */}
            {!isMobile && (
              <div className="floating-navbar-separator" style={getSeparatorStyles()}></div>
            )}
            
            {/* Login Button */}
            <Link
              href="/login"
              className="floating-navbar-login"
              style={getLoginButtonStyles()}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FloatingNavbar;
