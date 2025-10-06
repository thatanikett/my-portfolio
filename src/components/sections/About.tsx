// src/components/sections/AboutSection.tsx
"use client";

import { useState } from "react";

export function AboutSection() {
  const [showCallout, setShowCallout] = useState(false);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
        position: "relative",
        zIndex: 2,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Enhanced floating geometric shapes - mix of 2D and 3D */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        {/* 3D Glowing Cube decoration */}
        <div
          style={{
            position: "absolute",
            top: "8%",
            left: "3%",
            width: "clamp(60px, 6vw, 100px)",
            height: "clamp(60px, 6vw, 100px)",
            transformStyle: "preserve-3d",
            transform: "rotateX(45deg) rotateY(45deg)",
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(96, 165, 250, 0.2))",
              transform: "translateZ(30px)",
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              border: "1px solid rgba(96, 165, 250, 0.3)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.1))",
              transform: "rotateY(90deg) translateZ(30px)",
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)",
              border: "1px solid rgba(96, 165, 250, 0.2)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(96, 165, 250, 0.1))",
              transform: "rotateX(90deg) translateZ(30px)",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
              border: "1px solid rgba(96, 165, 250, 0.2)",
            }}
          />
        </div>

        {/* 3D Pyramid decoration */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "5%",
            width: "0",
            height: "0",
            borderLeft: "clamp(25px, 3vw, 40px) solid transparent",
            borderRight: "clamp(25px, 3vw, 40px) solid transparent",
            borderBottom: "clamp(40px, 5vw, 65px) solid rgba(34, 197, 94, 0.6)",
            transform: "rotateX(30deg) rotateY(20deg)",
            filter:
              "drop-shadow(0 0 25px rgba(34, 197, 94, 0.5)) drop-shadow(0 10px 15px rgba(34, 197, 94, 0.3))",
            animation: "rotate3d 8s linear infinite",
            transformStyle: "preserve-3d",
          }}
        />

        {/* Enhanced 3D Hexagon */}
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "8%",
            width: "clamp(50px, 5vw, 80px)",
            height: "clamp(30px, 3vw, 48px)",
            background: "rgba(147, 51, 234, 0.7)",
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
            filter:
              "drop-shadow(0 0 30px rgba(147, 51, 234, 0.6)) drop-shadow(0 8px 20px rgba(147, 51, 234, 0.4))",
            transform: "rotateX(15deg) rotateZ(10deg)",
            animation: "pulse3d 4s ease-in-out infinite",
            boxShadow: "inset 0 0 20px rgba(147, 51, 234, 0.3)",
          }}
        />

        {/* 3D Tilted Rectangle */}
        <div
          style={{
            position: "absolute",
            bottom: "25%",
            right: "12%",
            width: "clamp(35px, 3.5vw, 60px)",
            height: "clamp(50px, 5vw, 90px)",
            background:
              "linear-gradient(45deg, rgba(245, 158, 11, 0.6), rgba(251, 191, 36, 0.4))",
            borderRadius: "8px",
            transform: "rotateX(25deg) rotateY(-15deg) rotateZ(-10deg)",
            boxShadow:
              "0 0 35px rgba(245, 158, 11, 0.5), 0 15px 25px rgba(245, 158, 11, 0.3)",
            animation: "bounce3d 5s ease-in-out infinite",
            border: "1px solid rgba(245, 158, 11, 0.4)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "40%",
            right: "20%",
            width: "clamp(25px, 2.5vw, 45px)",
            height: "clamp(25px, 2.5vw, 45px)",
            background: "rgba(14, 165, 233, 0.6)",
            transform: "rotateX(30deg) rotateY(60deg) rotateZ(45deg)",
            borderRadius: "6px",
            boxShadow:
              "0 0 20px rgba(14, 165, 233, 0.5), 0 10px 20px rgba(14, 165, 233, 0.3)",
            animation: "rotate3d 10s linear infinite reverse",
            border: "1px solid rgba(14, 165, 233, 0.4)",
          }}
        />

        {/* Keep some shapes away from the content area */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            right: "2%",
            width: "clamp(15px, 1.5vw, 25px)",
            height: "clamp(15px, 1.5vw, 25px)",
            background: "rgba(168, 85, 247, 0.6)",
            borderRadius: "50%",
            boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
            animation: "float 9s ease-in-out infinite",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          color: "white",
          pointerEvents: "auto",
          display: "flex",
          flexDirection: "row",
          gap: "clamp(2rem, 5vw, 4rem)",
          alignItems: "center",
        }}
      >
        {/* Left side - Fun meme element with floating emojis around it */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            minWidth: "280px",
            maxWidth: "400px",
            flex: "0 0 auto",
            minHeight: "500px",
          }}
        >
          {/* Enhanced meme illustration container - ORIGINAL STYLE */}
          <div
            style={{
              position: "relative",
              padding: "2rem",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "24px",
              border: "2px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0 25px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            }}
          >
            {/* Decorative rings around meme */}
            <div
              style={{
                position: "absolute",
                top: "-15px",
                left: "-15px",
                right: "-15px",
                bottom: "-15px",
                border: "2px solid rgba(96, 165, 250, 0.3)",
                borderRadius: "28px",
                animation: "pulse 4s infinite",
              }}
            />

            {/* Meme illustration - ORIGINAL INNER CONTAINER STYLE */}
            <div
              style={{
                width: "clamp(240px, 25vw, 320px)",
                height: "clamp(180px, 19vw, 240px)",
                background:
                  "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "inset 0 2px 10px rgba(255, 255, 255, 0.1)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Image inside the container */}
              <img
                src="/images/meme.png"
                alt="Me coding at 3 AM meme"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "13px",
                }}
                onError={(e) => {
                  // Fallback if image doesn't load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.innerHTML = `
                    <div style="
                      width: 100%; 
                      height: 100%; 
                      display: flex; 
                      align-items: center; 
                      justify-content: center; 
                      flex-direction: column;
                      color: rgba(255, 255, 255, 0.8);
                    ">
                      <div style="font-size: clamp(2rem, 4vw, 3rem);">😴</div>
                      <div style="
                        font-size: clamp(0.9rem, 1.5vw, 1.1rem);
                        font-weight: 600;
                        font-family: monospace;
                        margin-top: 0.5rem;
                      ">Me coding at 3 AM</div>
                    </div>
                  `;
                }}
              />
            </div>

            {/* Floating Coffee emoji - AROUND the container */}
            <div
              style={{
                position: "absolute",
                top: "-10px",
                left: "-10px",
                fontSize: "clamp(2.5rem, 4vw, 3rem)",
                animation: "float 4s ease-in-out infinite",
                filter:
                  "drop-shadow(0 0 15px rgba(139, 69, 19, 0.7)) drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = "scale(1.3) rotate(15deg)";
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = "scale(1) rotate(0deg)";
              }}
            >
              ☕
            </div>

            {/* Floating Penguin emoji - AROUND the container */}
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "-10px",
                fontSize: "clamp(2.5rem, 4vw, 3rem)",
                animation: "float 5s ease-in-out infinite reverse",
                filter:
                  "drop-shadow(0 0 15px rgba(234, 179, 8, 0.7)) drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = "scale(1.3) rotate(-15deg)";
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = "scale(1) rotate(0deg)";
              }}
            >
              🐧
            </div>
          </div>

          {/* Floating Cat Image - with Callout */}
          <div
            style={{
              position: "relative",
              marginTop: "12rem",
            }}
            onMouseEnter={() => setShowCallout(true)}
            onMouseLeave={() => setShowCallout(false)}
            onClick={() => setShowCallout(!showCallout)}
          >
            <div
              style={{
                width: "clamp(200px, 18vw, 220px)",
                height: "clamp(200px, 18vw, 220px)",
                animation: "floatSlow 6s ease-in-out infinite",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                pointerEvents: "auto",
              }}
            >
              <img
                src="/images/umasktually.png"
                alt="Floating cat"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Nerdy Callout */}
            {showCallout && (
              <div
                style={{
                  position: "absolute",
                  bottom: "110%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(30, 30, 30, 0.98)",
                  border: "2px solid rgba(96, 165, 250, 0.6)",
                  borderRadius: "16px",
                  padding: "1rem 1.5rem",
                  minWidth: "280px",
                  maxWidth: "350px",
                  boxShadow:
                    "0 10px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(96, 165, 250, 0.3)",
                  animation: "slideIn 0.3s ease-out",
                  zIndex: 1000,
                  pointerEvents: "none",
                }}
              >
                {/* Nerd emoji */}
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  🤓
                </div>

                {/* Um Actually text */}
                <div
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                    color: "#e2e8f0",
                    fontFamily: "monospace",
                    textAlign: "center",
                  }}
                >
                  <span style={{ color: "#60a5fa", fontWeight: "700" }}>
                    Um, actually...
                  </span>
                  <br />
                  <span style={{ fontSize: "0.9rem" }}>I use arch btw !!!</span>
                </div>

                {/* Arrow pointing down */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0",
                    height: "0",
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderTop: "10px solid rgba(96, 165, 250, 0.6)",
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Right side - Content */}
        <div style={{ flex: "1 1 auto", minWidth: "0" }}>
          {/* Enhanced heading with gradient text */}
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              marginBottom: "clamp(2rem, 4vw, 3rem)",
              textAlign: "left",
              background:
                "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-press-start), 'Courier New', monospace",
              position: "relative",
              marginTop:"3rem"
            }}
          >
            About Me
            {/* Enhanced decorative underline */}
            <div
              style={{
                position: "absolute",
                bottom: "-12px",
                left: "0",
                width: "clamp(50px, 8vw, 80px)",
                height: "4px",
                background: "linear-gradient(90deg, #60a5fa, #34d399, #a855f7)",
                borderRadius: "2px",
                boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)",
              }}
            />
          </h2>

          {/* Enhanced paragraph with better typography */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "24px",
              padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem)",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0 25px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)",
              position: "relative",
            }}
          >
            {/* Enhanced quote decoration */}
            <div
              style={{
                position: "absolute",
                top: "clamp(0.5rem, 1.5vw, 1rem)",
                left: "clamp(1rem, 2vw, 1.5rem)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "rgba(96, 165, 250, 0.4)",
                fontFamily: "serif",
                textShadow: "0 0 10px rgba(96, 165, 250, 0.3)",
              }}
            >
              "
            </div>

            <p
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
                lineHeight: "1.8",
                textAlign: "left",
                opacity: 0.94,
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontWeight: "400",
                letterSpacing: "0.01em",
                marginBottom: "0",
                color: "#f8fafc",
                paddingTop: "clamp(0.5rem, 1.5vw, 1rem)",
              }}
            >
              I am a{" "}
              <span
                style={{
                  color: "#60a5fa",
                  fontWeight: "600",
                  background:
                    "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 20px rgba(96, 165, 250, 0.3)",
                }}
              >
                passionate Web developer
              </span>{" "}
              with a love for creating beautiful and functional web
              applications. My journey in tech started with a fascination for
              how things work, which led me to explore everything from Web
              development and Linux to many modern frameworks like Next.js
              <br />
              <br />What really gets me excited about the{" "}
                <span
                style={{
                  color: "#60a5fa",
                  fontWeight: "600",
                  background:
                    "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 20px rgba(96, 165, 250, 0.3)",
                }}
              >
                Open Source community 
              </span>
              {" "} is that it is a community where developers collectively say "screw paid software" and build
               better alternatives with more control, better performance and no costs.
              <br />
              <br />I thrive on challenges and constantly learn new technologies
               because standing still in tech is basically moving backward.  Currently 
               looking forward to diving into GenAI to expand my skillset
               When I'm not debugging my errors, you'll find me customizing{" "}
              <span
                style={{
                  color: "#34d399",
                  fontWeight: "500",
                  textShadow: "0 0 15px rgba(52, 211, 153, 0.3)",
                }}
              >
                Arch Linux setup
              </span>
              {" "}for the 47th time this month, hunting for the perfect terminal theme,
              or exploring obscure open-source tools that solve problems I didn't know I had
            </p>
          </div>

          {/* Enhanced stats with better mobile layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "clamp(1rem, 2vw, 1.5rem)",
              marginTop: "clamp(2rem, 3vw, 2.5rem)",
            }}
          >
            {[
              {
                number: "99+",
                label: "Stack Overflow Visits",
                icon: "📚",
                color: "#ef4444",
              },
              {
                number: "Ctrl+C, Ctrl+V",
                label: "Mastery",
                icon: "🔄",
                color: "#f59e0b",
              },
              {
                number: "20+",
                label: "Distro Hops",
                icon: "🐧",
                color: "#8b5cf6",
              },
              {
                number: "∞",
                label: "Debug Hours",
                icon: "🐛",
                color: "#10b981",
              },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  padding:
                    "clamp(1.2rem, 2vw, 1.8rem) clamp(0.8rem, 1.5vw, 1.2rem)",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: `2px solid ${stat.color}30`,
                  borderRadius: "20px",
                  textAlign: "center",
                  backdropFilter: "blur(15px)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = "translateY(-8px) scale(1.03)";
                  target.style.background = `${stat.color}15`;
                  target.style.boxShadow = `0 15px 40px ${stat.color}25`;
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = "translateY(0) scale(1)";
                  target.style.background = "rgba(255, 255, 255, 0.06)";
                  target.style.boxShadow = "none";
                }}
              >
                {/* Emoji */}
                <div
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    marginBottom: "0.5rem",
                    filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))",
                    pointerEvents: "none",
                  }}
                >
                  {stat.icon}
                </div>

                {/* Number */}
                <div
                  style={{
                    fontSize: stat.number.includes("Ctrl")
                      ? "clamp(1rem, 1.6vw, 1.3rem)"
                      : "clamp(1.4rem, 2.2vw, 1.8rem)",
                    fontWeight: "700",
                    color: stat.color,
                    marginBottom: "0.3rem",
                    textShadow: `0 0 15px ${stat.color}50`,
                    fontFamily: stat.number.includes("Ctrl")
                      ? "monospace"
                      : "inherit",
                    pointerEvents: "none",
                  }}
                >
                  {stat.number}
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)",
                    color: "rgba(255, 255, 255, 0.8)",
                    fontWeight: "600",
                    lineHeight: "1.2",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    pointerEvents: "none",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animation styles with 3D effects */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes float3d {
          0%,
          100% {
            transform: rotateX(45deg) rotateY(45deg) translateY(0px);
          }
          50% {
            transform: rotateX(45deg) rotateY(45deg) translateY(-15px);
          }
        }

        @keyframes rotate3d {
          from {
            transform: rotateX(30deg) rotateY(0deg) rotateZ(45deg);
          }
          to {
            transform: rotateX(30deg) rotateY(360deg) rotateZ(45deg);
          }
        }

        @keyframes pulse3d {
          0%,
          100% {
            transform: rotateX(15deg) rotateZ(10deg) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: rotateX(15deg) rotateZ(10deg) scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes bounce3d {
          0%,
          100% {
            transform: rotateX(25deg) rotateY(-15deg) rotateZ(-10deg)
              translateY(0px);
          }
          50% {
            transform: rotateX(25deg) rotateY(-15deg) rotateZ(-10deg)
              translateY(-12px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        /* Mobile responsiveness - 768px and below */
        @media (max-width: 768px) {
          /* Main container - switch to column layout */
          section > div:last-child {
            flex-direction: column !important;
            gap: 2rem !important;
            text-align: center !important;
          }

          /* Image container - center and full width */
          section > div:last-child > div:first-child {
            min-width: 100% !important;
            max-width: 500px !important;
            margin: 0 auto !important;
            min-height: auto !important;
            gap: 2rem !important;
          }

          /* Content container */
          section > div:last-child > div:last-child {
            width: 100% !important;
            max-width: 500px !important;
            margin: 0 auto !important;
          }

          /* Heading styles */
          section h2 {
            text-align: center !important;
            font-size: 2.5rem !important;
            margin-bottom: 1rem !important;
          }

          /* Center the underline */
          section h2 > div {
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 60px !important;
          }

          /* Text box */
          section > div:last-child > div:last-child > div:nth-child(2) {
            border-radius: 16px !important;
            padding: 1.5rem !important;
          }

          /* Stats grid */
          section > div:last-child > div:last-child > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
            margin-top: 2rem !important;
          }

          section p {
            text-align: center !important;
            font-size: 1.1rem !important;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 1.5rem 0.5rem !important;
          }

          section h2 {
            font-size: 2rem !important;
          }

          section p {
            font-size: 1rem !important;
          }

          section > div:last-child > div:last-child > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
