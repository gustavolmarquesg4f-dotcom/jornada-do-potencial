import { motion } from "framer-motion";
import { useMemo } from "react";

export default function EmberParticles({ count = 12 }: { count?: number }) {
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.5,
    })), [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: "-5%",
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, oklch(0.82 0.16 55), oklch(0.72 0.19 45))`,
          }}
          animate={{
            y: [0, -window.innerHeight * 1.2],
            x: [0, (Math.random() - 0.5) * 60],
            opacity: [0, p.opacity, p.opacity, 0],
            scale: [0.5, 1, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
