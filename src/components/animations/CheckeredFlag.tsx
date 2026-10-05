"use client";

interface CheckeredFlagProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function CheckeredFlag({ className = "", width = 100, height = 100 }: CheckeredFlagProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Checkered flag pattern"
    >
      <defs>
        <pattern id="checkered" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="10" height="10" fill="#ffffff" />
          <rect x="10" y="0" width="10" height="10" fill="#0a0a0a" />
          <rect x="0" y="10" width="10" height="10" fill="#0a0a0a" />
          <rect x="10" y="10" width="10" height="10" fill="#ffffff" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#checkered)" />
    </svg>
  );
}
