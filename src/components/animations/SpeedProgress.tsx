"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SpeedProgressProps {
  className?: string;
}

export default function SpeedProgress({ className = "" }: SpeedProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollProgress(Math.min(scrolled, 100));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 h-1 bg-f1-carbon-lighter z-50 ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-f1-racing-red to-f1-racing-red-hover"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
