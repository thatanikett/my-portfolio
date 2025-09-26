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
        padding: "2rem 1rem",
        position: "relative",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <div
        style={{
          // Glass card container
          maxWidth: 780,
          width: "100%",
          pointerEvents: "auto",
          borderRadius: 24,
          border: "1px solid rgba(255,255,255,0.18)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
          boxShadow:
            "0 10px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          padding: "2.5rem 2rem",
          margin: "0 auto",
        }}
      >
      {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              lineHeight: 1.15,
              fontWeight: 800,
              marginBottom: "0.75rem",
              color: "white",
            }}
          >
            Get In Touch
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.8)",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Open to collaborations, internships, and exciting product ideas. Drop a note or reach out on any platform below.
          </p>
        </div>

        {/* Primary CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <a
            href="mailto:your@email.com"
            aria-label="Send Email"
            style={{
              padding: "0.9rem 1.5rem",
              background: "linear-gradient(45deg, #5227FF, #B19EEF)",
              borderRadius: 999,
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              transition: "transform .25s ease, box-shadow .25s ease, opacity .25s ease",
              boxShadow: "0 8px 24px rgba(82,39,255,0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(82,39,255,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(82,39,255,0.35)";
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
              padding: "0.9rem 1.5rem",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 999,
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              transition: "transform .25s ease, background .25s ease, border-color .25s ease",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* Social Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "0.9rem",
          }}
        >
          <SocialButton
            href="https://github.com/yourhandle"
            label="GitHub"
            brand="github"
            svg={
              // GitHub mark
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.01c-3.22.7-3.9-1.41-3.9-1.41-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.74 1.27 3.41.97.11-.77.41-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.17a11.1 11.1 0 0 1 5.82 0c2.21-1.48 3.19-1.17 3.19-1.17.63 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.41-2.7 5.38-5.28 5.66.42.36.79 1.07.79 2.15v3.19c0 .31.2.66.8.55A11.5 11.5 0 0 0 12 .5z" />
              </svg>
            }
          />

          <SocialButton
            href="https://linkedin.com/in/yourprofile"
            label="LinkedIn"
            brand="linkedin"
            svg={
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.83v1.97h.05c.53-1.01 1.83-2.07 3.77-2.07 4.03 0 4.78 2.65 4.78 6.1V23h-3.99v-6.43c0-1.53-.03-3.49-2.12-3.49-2.12 0-2.45 1.66-2.45 3.38V23H8V8.5z" />
              </svg>
            }
          />

          <SocialButton
            href="https://instagram.com/yourhandle"
            label="Instagram"
            brand="instagram"
            svg={
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.06 1.8.25 2.22.42.56.22.97.49 1.39.91.42.42.69.83.91 1.39.17.42.36 1.05.42 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.25 1.8-.42 2.22-.22.56-.49.97-.91 1.39-.42.42-.83.69-1.39.91-.42.17-1.05.36-2.22.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.8-.25-2.22-.42a3.86 3.86 0 0 1-1.39-.91 3.86 3.86 0 0 1-.91-1.39c-.17-.42-.36-1.05-.42-2.22C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.06-1.17.25-1.8.42-2.22.22-.56.49-.97.91-1.39.42-.42.83-.69 1.39-.91.42-.17 1.05-.36 2.22-.42C8.42 2.21 8.8 2.2 12 2.2m0-2.2C8.75 0 8.33.01 7.05.07 5.77.13 4.77.35 3.95.67c-.85.33-1.58.78-2.3 1.5C.92 2.89.47 3.62.14 4.47.02 4.8-.11 5.18-.19 5.86-.31 6.83-.36 7.38-.39 8.77-.42 10.16-.42 13.84-.39 15.23c.03 1.39.08 1.94.2 2.91.08.68.21 1.06.33 1.39.33.85.78 1.58 1.5 2.3.72.72 1.45 1.17 2.3 1.5.33.12.71.25 1.39.33.97.12 1.52.17 2.91.2 1.39.03 1.94.03 3.33 0 1.39-.03 1.94-.08 2.91-.2.68-.08 1.06-.21 1.39-.33.85-.33 1.58-.78 2.3-1.5.72-.72 1.17-1.45 1.5-2.3.12-.33.25-.71.33-1.39.12-.97.17-1.52.2-2.91.03-1.39.03-1.94 0-3.33-.03-1.39-.08-1.94-.2-2.91-.08-.68-.21-1.06-.33-1.39a5.86 5.86 0 0 0-1.5-2.3A5.86 5.86 0 0 0 20.05.67c-.33-.12-.71-.25-1.39-.33C17.69.22 17.14.17 15.75.14 14.36.11 13.81.11 12 .11 10.19.11 9.64.11 8.25.14 6.86.17 6.31.22 5.34.34c-.68.08-1.06.21-1.39.33A5.86 5.86 0 0 0 1.65 2.5 5.86 5.86 0 0 0 .67 3.95c-.12.33-.25.71-.33 1.39C.22 6.31.17 6.86.14 8.25.11 9.64.11 10.19.11 12s0 2.36.03 3.75.08 1.94.2 2.91c.08.68.21 1.06.33 1.39.33.85.78 1.58 1.5 2.3.72.72 1.45 1.17 2.3 1.5.33.12.71.25 1.39.33.97.12 1.52.17 2.91.2 1.39.03 1.94.03 3.33 0 1.39-.03 1.94-.08 2.91-.2.68-.08 1.06-.21 1.39-.33.85-.33 1.58-.78 2.3-1.5.72-.72 1.17-1.45 1.5-2.3.12-.33.25-.71.33-1.39.12-.97.17-1.52.2-2.91.03-1.39.03-1.94 0-3.33-.03-1.39-.08-1.94-.2-2.91-.08-.68-.21-1.06-.33-1.39-.33-.85-.78-1.58-1.5-2.3A5.86 5.86 0 0 0 20.05.67c-.33-.12-.71-.25-1.39-.33C17.69.22 17.14.17 15.75.14 14.36.11 13.81.11 12 .11z" />
                <circle cx="12" cy="12" r="3.4" />
                <circle cx="18.4" cy="5.6" r="1.2" />
              </svg>
            }
          />

          <SocialButton
            href="https://x.com/yourhandle"
            label="X"
            brand="x"
            svg={
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
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
 * SocialButton — a glassmorphism icon pill with brand color focus ring
 */
function SocialButton({
  href,
  label,
  brand,
  svg,
}: {
  href: string;
  label: string;
  brand: "github" | "linkedin" | "instagram" | "x";
  svg: React.ReactNode;
}) {
  // brand accent colors
  const accents: Record<typeof brand, string> = {
    github: "#ffffff",
    linkedin: "#0A66C2",
    instagram: "#E1306C",
    x: "#ffffff",
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
        gap: "0.75rem",
        padding: "0.9rem 1rem",
        borderRadius: 16,
        color: "white",
        textDecoration: "none",
        border: "1px solid rgba(255,255,255,0.22)",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        transition:
          "transform .25s ease, box-shadow .25s ease, background .25s ease, border-color .25s ease",
        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.background = "rgba(255,255,255,0.12)";
        e.currentTarget.style.boxShadow = `0 10px 28px ${hexToRgba(
          accents[brand],
          0.35
        )}`;
        e.currentTarget.style.borderColor = hexToRgba(accents[brand], 0.55);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.25)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
      }}
    >
      <span
        aria-hidden
        style={{
          display: "grid",
          placeItems: "center",
          width: 40,
          height: 40,
          borderRadius: 12,
          background:
            brand === "instagram"
              ? "linear-gradient(45deg,#FFDC80,#F77737,#E1306C,#833AB4)"
              : "rgba(255,255,255,0.14)",
          color: accents[brand],
          border:
            brand === "instagram"
              ? "1px solid rgba(255,255,255,0.35)"
              : "1px solid rgba(255,255,255,0.25)",
          boxShadow:
            brand === "instagram"
              ? "0 6px 18px rgba(225,48,108,0.35)"
              : "none",
        }}
      >
        {svg}
      </span>
      <span style={{ fontWeight: 600, letterSpacing: "0.02em" }}>{label}</span>
    </a>
  );
}

// small util
function hexToRgba(hex: string, alpha = 1) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
