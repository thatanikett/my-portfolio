'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, FolderKanban, Award, Mail } from 'lucide-react';


interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
}

const FloatingNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentHash, setCurrentHash] = useState('');
  
  const pathname = usePathname();

const navItems: NavItem[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/#about', icon: User },
  { name: 'Projects', href: '/#projects', icon: FolderKanban },
  { name: 'Skills', href: '/skills', icon: Award },
];


const getActiveItem = (): string | null => {
  // Check /skills page first
  if (pathname === '/skills') {
    return 'Skills';  // ONLY Skills active
  }
  
  // Check homepage with hash sections
  if (pathname === '/') {
    // No hash = Home active
    if (!currentHash || currentHash === '') {
      return 'Home';
    }
    
    // Specific hash checks
    if (currentHash === '#about') {
      return 'About';  // ONLY About active
    }
    
    if (currentHash === '#projects') {
      return 'Projects';  // ONLY Projects active
    }
    
    // Default for other hashes
    return 'Home';
  }
  
  return null;  // No active item for other pages
};


  const activeItem = getActiveItem();


useEffect(() => {
  // Set initial hash
  const initialHash = typeof window !== 'undefined' ? window.location.hash : '';
  setCurrentHash(initialHash);
  
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleHashChange = () => {
    setCurrentHash(window.location.hash);
  };
  
  // ✅ FIX: Override pushState and replaceState
  // Next.js Link uses these internally, not hashchange event
  const originalPushState = window.history.pushState;
  const originalReplaceState = window.history.replaceState;
  
  window.history.pushState = function(...args) {
    originalPushState.apply(window.history, args);
    // Update hash after pushState
    setTimeout(() => {
      setCurrentHash(window.location.hash);
    }, 0);
  };
  
  window.history.replaceState = function(...args) {
    originalReplaceState.apply(window.history, args);
    // Update hash after replaceState
    setTimeout(() => {
      setCurrentHash(window.location.hash);
    }, 0);
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  handleResize();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  window.addEventListener('hashchange', handleHashChange);
  window.addEventListener('modalOpen', handleModalOpen);
  window.addEventListener('modalClose', handleModalClose);
  
  return () => {
    window.history.pushState = originalPushState;
    window.history.replaceState = originalReplaceState;
    
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('hashchange', handleHashChange);
    window.removeEventListener('modalOpen', handleModalOpen);
    window.removeEventListener('modalClose', handleModalClose);
  };
}, []);



 const getNavbarStyles = (): React.CSSProperties => ({
  position: 'fixed',
  top: isMobile ? '12px' : '20px',
  left: '50%',
  transform: `translateX(-50%) scale(${isScrolled ? 0.98 : 1})`,
  zIndex: 9999,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  opacity: isModalOpen ? 0 : 1,
  pointerEvents: isModalOpen ? 'none' : 'auto',
  // ✅ FIX: Let navbar shrink to content size
  maxWidth: isMobile ? 'fit-content' : 'auto',
  width: isMobile ? 'auto' : 'auto',
});


const getContainerStyles = (): React.CSSProperties => ({
  background: 'rgba(17, 24, 39, 0.95)',
  border: '2px solid rgba(255, 255, 255, 0.6)',
  borderRadius: isMobile ? '24px' : '32px',
  padding: isMobile ? '10px 16px' : '10px 16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: isMobile ? '6px' : '8px',
  minHeight: isMobile ? '52px' : '64px',
  // ✅ FIX: Remove width constraint
  width: 'auto',  // Changed from '100%'
  overflow: 'visible',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
});


  const getNavLinkStyles = (itemName: string): React.CSSProperties => {
    const isActive = activeItem === itemName;
    const isHovered = hoveredItem === itemName;
    
    return {
      position: 'relative',
      padding: isMobile ? '8px 16px' : '12px 20px',
      fontSize: isMobile ? 'clamp(0.6rem, 2.5vw, 0.75rem)' : 'clamp(0.7rem, 1.5vw, 0.85rem)',
      fontWeight: 'normal',
      fontFamily: "var(--font-press-start), 'Courier New', monospace",
      letterSpacing: 'clamp(0.02em, 0.5vw, 0.05em)',
      color: isActive || isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
      background: isActive 
        ? 'rgba(75, 85, 99, 0.8)' 
        : (isHovered ? 'rgba(255, 255, 255, 0.15)' : 'transparent'),
      borderRadius: isMobile ? '16px' : '20px',
      border: (isActive || isHovered) ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      flex: isMobile ? 'none' : 'auto',
      textTransform: 'uppercase',
      transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0px) scale(1)',
      boxShadow: isActive 
        ? '0 4px 16px rgba(75, 85, 99, 0.4)' 
        : (isHovered ? '0 6px 20px rgba(255, 255, 255, 0.2)' : 'none'),
    };
  };

  const getContactButtonStyles = (): React.CSSProperties => {
    const isHovered = hoveredItem === 'contact';
    
    return {
      background: isHovered 
        ? 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)'
        : 'linear-gradient(135deg, #4B5563 0%, #1F2937 100%)',
      color: isHovered ? '#000000' : '#ffffff',
      padding: isMobile ? '10px 16px' : '12px 24px',
      fontSize: isMobile ? 'clamp(0.6rem, 2.5vw, 0.75rem)' : 'clamp(0.7rem, 1.5vw, 0.85rem)',
      fontWeight: 'normal',
      fontFamily: "var(--font-press-start), 'Courier New', monospace",
      letterSpacing: 'clamp(0.02em, 0.5vw, 0.05em)',
      borderRadius: isMobile ? '16px' : '20px',
      border: '2px solid rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginLeft: isMobile ? '8px' : '12px',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      textTransform: 'uppercase',
      transform: isHovered ? 'translateY(-2px) scale(1.05)' : 'translateY(0px) scale(1)',
      boxShadow: isHovered 
        ? '0 8px 25px rgba(255, 255, 255, 0.3)' 
        : '0 4px 12px rgba(75, 85, 99, 0.3)',
    };
  };

  const getSeparatorStyles = (): React.CSSProperties => ({
    width: '1px',
    height: isMobile ? '24px' : '28px',
    background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.6), transparent)',
    margin: isMobile ? '0 8px' : '0 12px',
    flexShrink: 0,
    borderRadius: '0.5px',
  });

  return (
    <>
      <style jsx>{`
        .floating-navbar-container::-webkit-scrollbar {
          display: none;
        }
        
        .floating-navbar-link, .floating-navbar-contact {
          font-feature-settings: "kern" 1;
        }
        
        @media (max-width: 480px) {
          .floating-navbar-link {
            font-size: clamp(0.5rem, 2vw, 0.7rem) !important;
            padding: 6px 14px !important;
          }
          
          .floating-navbar-contact {
            font-size: clamp(0.5rem, 2vw, 0.7rem) !important;
            padding: 8px 14px !important;
          }
        }

        @media (max-width: 375px) {
          .floating-navbar-link {
            font-size: clamp(0.45rem, 1.8vw, 0.65rem) !important;
            padding: 6px 12px !important;
          }
          
          .floating-navbar-contact {
            font-size: clamp(0.45rem, 1.8vw, 0.65rem) !important;
            padding: 8px 12px !important;
          }
        }

        @media (max-width: 320px) {
          .floating-navbar-link {
            font-size: 0.5rem !important;
            padding: 5px 10px !important;
            letter-spacing: 0.02em !important;
          }
          
          .floating-navbar-contact {
            font-size: 0.5rem !important;
            padding: 6px 10px !important;
            letter-spacing: 0.02em !important;
          }
        }

        @media (max-width: 768px) {
  .nav-text {
    display: none; 
  }
}

@media (min-width: 769px) {
  .nav-icon {
    display: none; 
      `}</style>
      
      <nav style={getNavbarStyles()}>
        <div 
          className="floating-navbar-container"
          style={getContainerStyles()}
        >
          {navItems.map((item) => {
  const IconComponent = item.icon;
  return (
    <Link
      key={item.name}
      href={item.href}
      className="floating-navbar-link"
      style={getNavLinkStyles(item.name)}
      onMouseEnter={() => setHoveredItem(item.name)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {/* Show icon on mobile */}
      <span className="nav-icon">
        <IconComponent size={18} strokeWidth={2.5} />
      </span>
      {/* Show text on desktop */}
      <span className="nav-text">
        {item.name}
      </span>
    </Link>
  );
})}

          
          <div style={getSeparatorStyles()}></div>
          
          <Link
            href="#contact"
            className="floating-navbar-contact"
            style={getContactButtonStyles()}
            onMouseEnter={() => setHoveredItem('contact')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {isMobile ? "CONNECT" : "LET'S CONNECT"}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default FloatingNavbar;
