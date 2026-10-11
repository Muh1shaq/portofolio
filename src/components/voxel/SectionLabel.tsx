import type { ReactNode } from "react";

/** Wooden title plaque sitting on the top-left edge of a section panel. */
export default function SectionLabel({ icon, children, as: Tag = "h2" }: { icon: ReactNode; children: ReactNode; as?: "h2" | "h3" }) {
  return (
    <Tag className="section-label">
      <span className="section-label-icon" aria-hidden="true">{icon}</span>
      {children}
    </Tag>
  );
}
