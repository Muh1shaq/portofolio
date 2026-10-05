"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TelemetryGaugeProps {
  value: number;
  max: number;
  label: string;
  className?: string;
}

export default function TelemetryGauge({ value, max, label, className = "" }: TelemetryGaugeProps) {
  const [progress, setProgress] = useState(0);
  const percentage = Math.min((value / max) * 100, 100);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <div className={`telemetry-font ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-f1-silver uppercase tracking-wider">{label}</span>
        <span className="text-xs text-f1-racing-red font-bold">{value}/{max}</span>
      </div>
      <div className="relative h-2 bg-f1-carbon-lighter rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-f1-racing-red to-f1-racing-red-hover"
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
