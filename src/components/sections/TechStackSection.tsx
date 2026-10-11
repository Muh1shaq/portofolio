"use client";

import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/voxel/SectionLabel";
import { portfolioData } from "@/data/portfolioData";
import { Code2, Cog, Star, Wrench } from "lucide-react";

/** Grouping only — names and logos come from portfolioData.techStack. */
const skillGroups = [
  { id: "languages", title: "Languages", Icon: Code2, names: ["TypeScript", "JavaScript", "Python", "GDScript"] },
  { id: "frameworks", title: "Frameworks", Icon: Cog, names: ["Next.js", "React", "Tailwind CSS", "Java Spring Boot", "Node.js"] },
  { id: "tools", title: "Tools", Icon: Wrench, names: ["PostgreSQL", "Supabase", "Godot", "Figma", "Git", "Vercel"] },
];

export default function TechStackSection() {
  return (
    <section id="skills" className="vx-section skills">
      <div className="grass-strip" aria-hidden="true" />
      <div className="brick-panel bevel">
        <SectionLabel icon={<Star size={16} fill="currentColor" />}>Skills</SectionLabel>
        <div className="skill-grid">
          {skillGroups.map(({ id, title, Icon, names }, i) => (
            <FadeIn delay={i * 0.08} key={id} className="skill-card wood bevel">
              <h3 className="skill-card-head"><Icon size={18} aria-hidden="true" />{title}</h3>
              <ul className="skill-list">
                {names.map((name) => {
                  const tech = portfolioData.techStack.find((item) => item.name === name);
                  if (!tech) return null;
                  return (
                    <li className="skill-item" key={tech.name}>
                      <span className="skill-logo">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={tech.icon} alt="" width={26} height={26} loading="lazy" />
                      </span>
                      <span className="skill-name">{tech.name}</span>
                    </li>
                  );
                })}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
