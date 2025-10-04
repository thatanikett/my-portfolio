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
            href="mailto:aniketsingh4269@gmail.com"
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
            href="https://www.linkedin.com/in/aniket-singh-8835b5319/"
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
            href="https://github.com/thatanikett"
            label="GitHub"
            brand="github"
            svg={
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.01c-3.22.7-3.9-1.41-3.9-1.41-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.74 1.27 3.41.97.11-.77.41-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.17a11.1 11.1 0 0 1 5.82 0c2.21-1.48 3.19-1.17 3.19-1.17.63 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.41-2.7 5.38-5.28 5.66.42.36.79 1.07.79 2.15v3.19c0 .31.2.66.8.55A11.5 11.5 0 0 0 12 .5z" />
              </svg>
            }
          />

          <SocialButton
            href="https://www.linkedin.com/in/aniket-singh-8835b5319/"
            label="LinkedIn"
            brand="linkedin"
            svg={
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.83v1.97h.05c.53-1.01 1.83-2.07 3.77-2.07 4.03 0 4.78 2.65 4.78 6.1V23h-3.99v-6.43c0-1.53-.03-3.49-2.12-3.49-2.12 0-2.45 1.66-2.45 3.38V23H8V8.5z" />
              </svg>
            }
          />

          <SocialButton
            href="https://x.com/anikett78"
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
    </section>
  );
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
