// src/components/sections/ContactSection.tsx
"use client";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 lg:scroll-mt-28"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1.5rem",
        position: "relative",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 820,
          width: "100%",
          pointerEvents: "auto",
          borderRadius: 32,
          border: "1px solid rgba(255,255,255,0.18)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
          boxShadow: "0 25px 70px rgba(0,0,0,0.25), 0 10px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.12)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          padding: "4rem 3rem",
          margin: "0 auto",
        }}
      >
        {/* Header with Press Start 2P Font */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div 
            style={{
              fontSize: "clamp(0.6rem, 2vw, 0.875rem)",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(156, 163, 175, 0.8)",
              marginBottom: "1.5rem",
              fontFamily: "var(--font-press-start), 'Courier New', monospace",
              lineHeight: "1.4"
            }}
          >
            LET'S CONNECT
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 6vw, 3rem)",
              lineHeight: 1.3,
              fontWeight: 800,
              marginBottom: "2rem",
              fontFamily: "var(--font-press-start), 'Courier New', monospace",
              letterSpacing: "0.1em",
            }}
          >
            GET IN TOUCH
          </h2>
          <p
            style={{
              fontSize: "clamp(0.9rem, 2.5vw, 1.125rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.85)",
              maxWidth: 580,
              margin: "0 auto",
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: "0.02em"
            }}
          >
            Ready to collaborate on something amazing? I'm always excited to discuss 
            new opportunities, innovative projects, and creative ideas.
          </p>
        </div>

        {/* Pixelated Primary CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3.5rem",
          }}
        >
          <a
            href="mailto:aniketsingh4269@gmail.com"
            aria-label="Send Email"
            className="pixel-button"
            style={{
              padding: "clamp(0.8rem, 2vw, 1rem) clamp(1.2rem, 4vw, 2rem)",
              background: "rgba(75, 85, 99, 0.8)",
              border: "2px solid #ffffff",
              borderRadius: "0",
              color: "white",
              textDecoration: "none",
              fontSize: "clamp(0.6rem, 1.8vw, 0.9rem)",
              fontWeight: "normal",
              fontFamily: "var(--font-press-start), 'Courier New', monospace",
              letterSpacing: "clamp(0.02em, 0.3vw, 0.05em)",
              transition: "all 0.2s ease",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              imageRendering: "pixelated"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.color = '#000000'
              e.currentTarget.style.transform = 'translate(-2px, -2px)'
              e.currentTarget.style.boxShadow = '2px 2px 0px #000000'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(75, 85, 99, 0.8)'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.transform = 'translate(0px, 0px)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            SEND EMAIL
          </a>

          <a
            href="https://www.linkedin.com/in/aniket-singh-8835b5319/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn"
            className="pixel-button"
            style={{
              padding: "clamp(0.8rem, 2vw, 1rem) clamp(1.2rem, 4vw, 2rem)",
              background: "#000000",
              border: "2px solid #ffffff",
              borderRadius: "0",
              color: "white",
              textDecoration: "none",
              fontSize: "clamp(0.6rem, 1.8vw, 0.9rem)",
              fontWeight: "normal",
              fontFamily: "var(--font-press-start), 'Courier New', monospace",
              letterSpacing: "clamp(0.02em, 0.3vw, 0.05em)",
              transition: "all 0.2s ease",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              imageRendering: "pixelated"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.color = '#000000'
              e.currentTarget.style.transform = 'translate(-2px, -2px)'
              e.currentTarget.style.boxShadow = '2px 2px 0px #ffffff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#000000'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.transform = 'translate(0px, 0px)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            LINKEDIN
          </a>
        </div>

        {/* Social Icons Only - No Text */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <SocialIconButton
            href="https://github.com/thatanikett"
            label="GitHub"
            brand="github"
            svg={
              <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.01c-3.22.7-3.9-1.41-3.9-1.41-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.74 1.27 3.41.97.11-.77.41-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.17a11.1 11.1 0 0 1 5.82 0c2.21-1.48 3.19-1.17 3.19-1.17.63 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.41-2.7 5.38-5.28 5.66.42.36.79 1.07.79 2.15v3.19c0 .31.2.66.8.55A11.5 11.5 0 0 0 12 .5z" />
              </svg>
            }
          />

          <SocialIconButton
            href="https://www.linkedin.com/in/aniket-singh-8835b5319/"
            label="LinkedIn"
            brand="linkedin"
            svg={
              <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.83v1.97h.05c.53-1.01 1.83-2.07 3.77-2.07 4.03 0 4.78 2.65 4.78 6.1V23h-3.99v-6.43c0-1.53-.03-3.49-2.12-3.49-2.12 0-2.45 1.66-2.45 3.38V23H8V8.5z" />
              </svg>
            }
          />

          <SocialIconButton
            href="https://x.com/anikett78"
            label="X (Twitter)"
            brand="x"
            svg={
              <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2H21l-6.58 7.51L22 22h-5.828l-4.542-5.94L6.41 22H3.652l7.046-8.04L2 2h5.914l4.109 5.523L18.244 2Zm-1.02 18.4h1.69L7.83 3.53H6.07l11.154 16.87Z"/>
              </svg>
            }
          />
        </div>
      </div>

      {/* Add pixelated button styles */}
      <style jsx>{`
        .pixel-button, .social-icon-button {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        /* Mobile responsiveness for buttons */
        @media (max-width: 480px) {
          .pixel-button {
            width: 100%;
            text-align: center;
          }
          
          .social-icon-button svg {
            width: 28px !important;
            height: 28px !important;
          }
        }
        
        @media (max-width: 320px) {
          .social-icon-button svg {
            width: 24px !important;
            height: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

/**
 * SocialIconButton — Just the logo with pixelated hover effects
 */
function SocialIconButton({
  href,
  label,
  brand,
  svg,
}: {
  href: string;
  label: string;
  brand: "github" | "linkedin" | "x";
  svg: React.ReactNode;
}) {
  // Brand colors for hover effects
  const brandColors: Record<typeof brand, { normal: string; hover: string }> = {
    github: { normal: "rgba(255,255,255,0.7)", hover: "#f0f0f0" },
    linkedin: { normal: "rgba(255,255,255,0.7)", hover: "#0A66C2" },
    x: { normal: "rgba(255,255,255,0.7)", hover: "#f0f0f0" },
  } as const;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="social-icon-button"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "64px",
        height: "64px",
        borderRadius: "0", // Square for pixel look
        color: brandColors[brand].normal,
        textDecoration: "none",
        border: "2px solid rgba(255,255,255,0.3)",
        background: "rgba(255,255,255,0.05)",
        transition: "all 0.2s ease",
        imageRendering: "pixelated",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = brandColors[brand].hover;
        e.currentTarget.style.background = "rgba(255,255,255,0.15)";
        e.currentTarget.style.transform = 'translate(-2px, -2px)';
        e.currentTarget.style.boxShadow = `2px 2px 0px ${brandColors[brand].hover}`;
        e.currentTarget.style.borderColor = brandColors[brand].hover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = brandColors[brand].normal;
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
        e.currentTarget.style.transform = 'translate(0px, 0px)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
      }}
    >
      {svg}
    </a>
  );
}

// Utility function (kept for any future use)
function hexToRgba(hex: string, alpha = 1) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
