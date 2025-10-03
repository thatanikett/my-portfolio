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
        overflow: "hidden",
      }}
    >
      {/* Floating 3D Shapes */}
      <FloatingShape 
        type="circle"
        size={120}
        color="rgba(156, 163, 175, 0.1)"
        position={{ top: "10%", left: "5%" }}
        animation="float1"
        duration="6s"
      />
      <FloatingShape 
        type="triangle"
        size={80}
        color="rgba(107, 114, 128, 0.15)"
        position={{ top: "20%", right: "8%" }}
        animation="float2"
        duration="8s"
      />
      <FloatingShape 
        type="square"
        size={60}
        color="rgba(75, 85, 99, 0.12)"
        position={{ bottom: "25%", left: "3%" }}
        animation="float3"
        duration="7s"
      />
      <FloatingShape 
        type="hexagon"
        size={100}
        color="rgba(156, 163, 175, 0.08)"
        position={{ bottom: "15%", right: "4%" }}
        animation="float1"
        duration="9s"
      />
      <FloatingShape 
        type="diamond"
        size={70}
        color="rgba(107, 114, 128, 0.1)"
        position={{ top: "60%", left: "2%" }}
        animation="float2"
        duration="5s"
      />
      <FloatingShape 
        type="circle"
        size={40}
        color="rgba(75, 85, 99, 0.2)"
        position={{ top: "40%", right: "6%" }}
        animation="float3"
        duration="10s"
      />

      {/* Main Glass Container */}
      <div
        style={{
          maxWidth: 820,
          width: "100%",
          pointerEvents: "auto",
          borderRadius: 32,
          border: "2px solid rgba(255,255,255,0.15)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
          boxShadow: `
            0 32px 80px rgba(0,0,0,0.25),
            0 16px 50px rgba(0,0,0,0.15),
            0 8px 32px rgba(0,0,0,0.1),
            inset 0 2px 0 rgba(255,255,255,0.15),
            inset 0 -2px 0 rgba(255,255,255,0.05)
          `,
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          padding: "4rem 3rem",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Glass overlay for extra depth */}
        <div
          style={{
            position: "absolute",
            inset: "1px",
            borderRadius: 30,
            background: "linear-gradient(135deg, rgba(255,255,255,0.03), transparent, rgba(255,255,255,0.02))",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div 
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(156, 163, 175, 0.8)",
              marginBottom: "1rem",
            }}
          >
            Let's Connect
          </div>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              fontWeight: 800,
              marginBottom: "1.5rem",
              color: "white",
              background: "linear-gradient(135deg, #ffffff, #e5e7eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Get In Touch
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 580,
              margin: "0 auto",
              fontWeight: 400,
            }}
          >
            Ready to collaborate on something amazing? I'm always excited to discuss 
            new opportunities, innovative projects, and creative ideas.
          </p>
        </div>

        {/* Primary CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3.5rem",
          }}
        >
          <a
            href="mailto:your@email.com"
            aria-label="Send Email"
            style={{
              padding: "1rem 2rem",
              background: "linear-gradient(135deg, #6b7280, #4b5563)",
              borderRadius: 50,
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.025em",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 10px 30px rgba(107, 114, 128, 0.4), 0 4px 16px rgba(75, 85, 99, 0.3), 0 0 20px rgba(156, 163, 175, 0.2)",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(107, 114, 128, 0.5), 0 8px 20px rgba(75, 85, 99, 0.4), 0 0 30px rgba(156, 163, 175, 0.3)";
              e.currentTarget.style.background = "linear-gradient(135deg, #7c8089, #565d6b)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(107, 114, 128, 0.4), 0 4px 16px rgba(75, 85, 99, 0.3), 0 0 20px rgba(156, 163, 175, 0.2)";
              e.currentTarget.style.background = "linear-gradient(135deg, #6b7280, #4b5563)";
            }}
          >
            Send Email
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn"
            style={{
              padding: "1rem 2rem",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 50,
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.025em",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 8px 25px rgba(107, 114, 128, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              e.currentTarget.style.boxShadow = "0 12px 35px rgba(107, 114, 128, 0.3), 0 0 25px rgba(156, 163, 175, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(107, 114, 128, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)";
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* Social Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1.25rem",
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          <SocialButton
            href="https://github.com/yourhandle"
            label="GitHub"
            brand="github"
            svg={
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.01c-3.22.7-3.9-1.41-3.9-1.41-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.74 1.27 3.41.97.11-.77.41-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.17a11.1 11.1 0 0 1 5.82 0c2.21-1.48 3.19-1.17 3.19-1.17.63 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.41-2.7 5.38-5.28 5.66.42.36.79 1.07.79 2.15v3.19c0 .31.2.66.8.55A11.5 11.5 0 0 0 12 .5z" />
              </svg>
            }
          />

          <SocialButton
            href="https://linkedin.com/in/yourprofile"
            label="LinkedIn"
            brand="linkedin"
            svg={
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.83v1.97h.05c.53-1.01 1.83-2.07 3.77-2.07 4.03 0 4.78 2.65 4.78 6.1V23h-3.99v-6.43c0-1.53-.03-3.49-2.12-3.49-2.12 0-2.45 1.66-2.45 3.38V23H8V8.5z" />
              </svg>
            }
          />

          <SocialButton
            href="https://x.com/yourhandle"
            label="X"
            brand="x"
            svg={
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2H21l-6.58 7.51L22 22h-5.828l-4.542-5.94L6.41 22H3.652l7.046-8.04L2 2h5.914l4.109 5.523L18.244 2Zm-1.02 18.4h1.69L7.83 3.53H6.07l11.154 16.87Z"/>
              </svg>
            }
          />
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          33% { transform: translateY(-30px) rotateZ(120deg); }
          66% { transform: translateY(15px) rotateZ(240deg); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateX(0px) rotateY(0deg); }
          50% { transform: translateX(25px) rotateY(180deg); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
          25% { transform: translate(20px, -20px) rotate(90deg) scale(0.9); }
          50% { transform: translate(-15px, 30px) rotate(180deg) scale(1.1); }
          75% { transform: translate(-25px, -10px) rotate(270deg) scale(0.95); }
        }
      `}</style>
    </section>
  );
}

/**
 * Floating Shape Component with 3D transforms
 */
function FloatingShape({
  type,
  size,
  color,
  position,
  animation,
  duration,
}: {
  type: "circle" | "square" | "triangle" | "diamond" | "hexagon";
  size: number;
  color: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  animation: string;
  duration: string;
}) {
  const getShapeStyles = () => {
    const baseStyles = {
      width: size,
      height: size,
      background: color,
      position: "absolute" as const,
      border: "1px solid rgba(255,255,255,0.1)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
      animation: `${animation} ${duration} ease-in-out infinite`,
      zIndex: 0,
      ...position,
    };

    switch (type) {
      case "circle":
        return { ...baseStyles, borderRadius: "50%" };
      case "square":
        return { ...baseStyles, borderRadius: "12px" };
      case "triangle":
        return {
          ...baseStyles,
          width: 0,
          height: 0,
          background: "transparent",
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
          borderRadius: 0,
        };
      case "diamond":
        return {
          ...baseStyles,
          transform: "rotate(45deg)",
          borderRadius: "8px",
        };
      case "hexagon":
        return {
          ...baseStyles,
          clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
          borderRadius: 0,
        };
      default:
        return baseStyles;
    }
  };

  return <div style={getShapeStyles()} />;
}

/**
 * SocialButton — enhanced glassmorphism with better dark theme styling
 */
function SocialButton({
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
  const accents: Record<typeof brand, string> = {
    github: "#f8fafc",
    linkedin: "#0A66C2",
    x: "#f8fafc",
  } as const;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.875rem",
        padding: "1.125rem 1.25rem",
        borderRadius: 20,
        color: "white",
        textDecoration: "none",
        border: "1px solid rgba(255,255,255,0.15)",
        background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0 6px 25px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
        e.currentTarget.style.background = "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))";
        e.currentTarget.style.boxShadow = `0 12px 35px ${hexToRgba(accents[brand], 0.2)}, 0 6px 25px rgba(0,0,0,0.15), 0 0 20px rgba(107, 114, 128, 0.15)`;
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.background = "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))";
        e.currentTarget.style.boxShadow = "0 6px 25px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.08)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
      }}
    >
      <span
        aria-hidden
        style={{
          display: "grid",
          placeItems: "center",
          width: 44,
          height: 44,
          borderRadius: 14,
          background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
          color: accents[brand],
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        {svg}
      </span>
      <span 
        style={{ 
          fontWeight: 600, 
          letterSpacing: "0.025em",
          fontSize: "0.925rem"
        }}
      >
        {label}
      </span>
    </a>
  );
}

// Utility function
function hexToRgba(hex: string, alpha = 1) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
