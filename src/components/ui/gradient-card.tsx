
'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GradientCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const GradientCard = ({ title, description, icon }: GradientCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / rect.height) * 10;
      const rotateY = (x / rect.width) * 10;
      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        ref={cardRef}
        className="relative rounded-[32px] overflow-hidden cursor-pointer"
        style={{
          width: "100%",
          maxWidth: "360px",
          height: "450px",
          transformStyle: "preserve-3d",
          backgroundColor: "#0e131f",
          boxShadow: isHovered 
            ? "0 -10px 100px 10px rgba(168, 85, 247, 0.2), 0 0 10px 0 rgba(0, 0, 0, 0.5)"
            : "0 0 20px 0 rgba(0, 0, 0, 0.3)",
        }}
        animate={{
          y: isHovered ? -10 : 0,
          rotateX: rotation.x,
          rotateY: rotation.y,
          perspective: 1000,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Glass reflection */}
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
            backdropFilter: "blur(2px)",
          }}
          animate={{
            opacity: isHovered ? 0.7 : 0.4,
            z: 1,
          }}
        />

        {/* Dark background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-[#050505]" />

        {/* Noise overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay z-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Dynamic Glows */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
          style={{
            background: `
              radial-gradient(ellipse at bottom right, rgba(168, 85, 247, 0.4) -10%, rgba(79, 70, 229, 0) 70%),
              radial-gradient(ellipse at bottom left, rgba(56, 189, 248, 0.4) -10%, rgba(79, 70, 229, 0) 70%)
            `,
            filter: "blur(40px)",
          }}
          animate={{
            opacity: isHovered ? 0.9 : 0.6,
          }}
        />

        {/* Bottom Border Glow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] z-25 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            opacity: isHovered ? 1 : 0.5,
            boxShadow: isHovered 
              ? "0 0 20px 2px rgba(168, 85, 247, 0.8)" 
              : "0 0 10px 0px rgba(168, 85, 247, 0.3)"
          }}
        />

        {/* Card content */}
        <div className="relative flex flex-col h-full p-10 z-40">
          <motion.div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/10 bg-white/5 backdrop-blur-md"
            animate={{
              z: isHovered ? 20 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
          >
            {icon}
          </motion.div>

          <div className="mt-auto">
            <motion.h3
              className="text-2xl font-syne font-bold text-white mb-4 tracking-tight"
              animate={{ z: isHovered ? 15 : 0 }}
            >
              {title}
            </motion.h3>

            <motion.p
              className="text-gray-400 text-sm leading-relaxed mb-8 font-light"
              animate={{ z: isHovered ? 10 : 0 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 group"
              animate={{ x: isHovered ? 5 : 0 }}
            >
              Saiba Mais
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
