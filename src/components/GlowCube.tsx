import { motion } from "framer-motion";

interface GlowCubeProps {
  size?: number;
  className?: string;
}

const GlowCube = ({ size = 360, className = "" }: GlowCubeProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Outer phosphor scatter */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #7fee64 0%, #3e4a3c 35%, transparent 70%)",
        }}
      />

      {/* Cube */}
      <motion.svg
        viewBox="0 0 200 200"
        className="relative w-full h-full"
        animate={{ rotate: [0, 4, 0, -4, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ddffdc" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#7fee64" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="cubeLeft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7fee64" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#3e4a3c" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#aed2a4" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#212525" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ddffdc" stopOpacity="1" />
            <stop offset="60%" stopColor="#7fee64" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7fee64" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Inner glow core */}
        <circle cx="100" cy="100" r="60" fill="url(#core)" />

        {/* Cube faces */}
        <polygon
          points="100,30 165,65 100,100 35,65"
          fill="url(#cubeTop)"
          stroke="#7fee64"
          strokeWidth="0.8"
          strokeOpacity="0.7"
        />
        <polygon
          points="35,65 100,100 100,170 35,135"
          fill="url(#cubeLeft)"
          stroke="#7fee64"
          strokeWidth="0.8"
          strokeOpacity="0.5"
        />
        <polygon
          points="100,100 165,65 165,135 100,170"
          fill="url(#cubeRight)"
          stroke="#7fee64"
          strokeWidth="0.8"
          strokeOpacity="0.5"
        />
      </motion.svg>

      {/* Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-reactor"
          style={{
            left: `${20 + (i * 9) % 70}%`,
            top: `${15 + (i * 13) % 75}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.div>
  );
};

export default GlowCube;
