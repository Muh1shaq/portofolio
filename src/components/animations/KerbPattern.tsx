"use client";

interface KerbPatternProps {
  className?: string;
  height?: number;
}

export default function KerbPattern({ className = "", height = 8 }: KerbPatternProps) {
  return (
    <div
      className={`kerb-pattern ${className}`}
      style={{ height: `${height}px` }}
      role="separator"
      aria-label="Racing kerb pattern"
    />
  );
}
