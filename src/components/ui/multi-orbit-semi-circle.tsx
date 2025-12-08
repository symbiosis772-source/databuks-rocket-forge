"use client";
import React, { useState, useEffect } from "react";

const ICONS = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
];

const ICON_NAMES = [
  "React", "Node.js", "TypeScript", "Python", "PostgreSQL",
  "MongoDB", "Docker", "Next.js", "Tailwind", "Firebase"
];

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize, startIndex = 0 }: any) {
  return (
    <>
      {/* Semi-circle glow background */}
      <div className="absolute inset-0 flex justify-center">
        <div
          className="
            w-[1000px] h-[1000px] rounded-full 
            bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15),transparent_70%)]
            blur-3xl 
            -mt-40 
            pointer-events-none
          "
          style={{ zIndex: 0 }}
        />
      </div>

      {/* Orbit icons */}
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const iconIndex = (startIndex + index) % ICONS.length;
        const icon = ICONS[iconIndex];

        // Tooltip positioning — above or below based on angle
        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            <img
              src={icon}
              alt={ICON_NAMES[iconIndex]}
              width={iconSize}
              height={iconSize}
              className="object-contain cursor-pointer transition-transform hover:scale-110"
              style={{ minWidth: iconSize, minHeight: iconSize }}
            />

            {/* Tooltip */}
            <div
              className={`absolute ${
                tooltipAbove ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
              } hidden group-hover:block w-28 rounded-lg bg-foreground px-2 py-1 text-xs text-background shadow-lg text-center`}
            >
              {ICON_NAMES[iconIndex]}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-foreground ${
                  tooltipAbove ? "top-full -mt-1.5" : "bottom-full -mb-1.5"
                }`}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function MultiOrbitSemiCircle() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = Math.min(size.width * 0.8, 700);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.5;

  const iconSize =
    size.width < 480
      ? Math.max(24, baseWidth * 0.05)
      : size.width < 768
      ? Math.max(28, baseWidth * 0.06)
      : Math.max(32, baseWidth * 0.07);

  return (
    <section className="py-12 relative w-full overflow-hidden">
      <div className="relative flex flex-col items-center text-center z-10">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Tech Ecosystem
        </span>
        <h2 className="my-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Powerful <span className="gradient-text">Integrations</span>
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground lg:text-lg">
          We work with the best technologies to build scalable, modern solutions.
        </p>

        <div
          className="relative"
          style={{ width: baseWidth, height: baseWidth * 0.6 }}
        >
          <SemiCircleOrbit radius={baseWidth * 0.22} centerX={centerX} centerY={centerY} count={4} iconSize={iconSize} startIndex={0} />
          <SemiCircleOrbit radius={baseWidth * 0.36} centerX={centerX} centerY={centerY} count={6} iconSize={iconSize} startIndex={4} />
          <SemiCircleOrbit radius={baseWidth * 0.5} centerX={centerX} centerY={centerY} count={8} iconSize={iconSize} startIndex={2} />
        </div>
      </div>
    </section>
  );
}
