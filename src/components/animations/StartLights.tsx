"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StartLightsProps {
  onAnimationComplete?: () => void;
}

export default function StartLights({ onAnimationComplete }: StartLightsProps) {
  const [lights, setLights] = useState([false, false, false, false, false]);
  const [allLightsOn, setAllLightsOn] = useState(false);

  useEffect(() => {
    let lightIndex = 0;
    const interval = setInterval(() => {
      if (lightIndex < 5) {
        setLights((prev) => {
          const newLights = [...prev];
          newLights[lightIndex] = true;
          return newLights;
        });
        lightIndex++;
      } else {
        clearInterval(interval);
        setAllLightsOn(true);
        setTimeout(() => {
          setLights([false, false, false, false, false]);
          onAnimationComplete?.();
        }, 500);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [onAnimationComplete]);

  return (
    <div className="flex gap-3 mb-8" role="img" aria-label="F1 start lights animation">
      {lights.map((isOn, index) => (
        <motion.div
          key={index}
          className="w-8 h-8 rounded-full border-2 border-gray-700"
          initial={{ backgroundColor: "#1a1a1a" }}
          animate={{
            backgroundColor: isOn ? "#e10600" : "#1a1a1a",
            boxShadow: isOn ? "0 0 20px rgba(225, 6, 0, 0.8)" : "none",
          }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );
}
