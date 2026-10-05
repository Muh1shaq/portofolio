"use client";

import { motion } from "framer-motion";

interface BackgroundGlowProps {
  className?: string;
  color?: string;
}

export default function BackgroundGlow({ className = "", color = "#6366f1" }: BackgroundGlowProps) {
  return (
    <motion.div
      className={`fixed inset-0 pointer-events-none -z-10 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: color }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: color }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}
