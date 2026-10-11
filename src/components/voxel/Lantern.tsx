/** Pixel-art lantern icon (inline SVG, glows via .lantern CSS class). */
export default function Lantern({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      className={`lantern ${className}`}
      width={size}
      height={size * 1.4}
      viewBox="0 0 10 14"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <rect x="4" y="0" width="2" height="1" fill="#3a2414" />
      <rect x="2" y="1" width="6" height="2" fill="#5a3a20" />
      <rect x="1" y="3" width="8" height="1" fill="#3a2414" />
      <rect x="2" y="4" width="6" height="7" fill="#ffb347" />
      <rect x="3" y="5" width="4" height="5" fill="#ffe6a3" />
      <rect x="4" y="6" width="2" height="3" fill="#fff8e0" />
      <rect x="1" y="4" width="1" height="7" fill="#3a2414" />
      <rect x="8" y="4" width="1" height="7" fill="#3a2414" />
      <rect x="1" y="11" width="8" height="1" fill="#3a2414" />
      <rect x="2" y="12" width="6" height="2" fill="#5a3a20" />
    </svg>
  );
}
