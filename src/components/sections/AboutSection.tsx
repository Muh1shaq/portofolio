"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolioData";
import KerbPattern from "@/components/animations/KerbPattern";

// DUMMY - Statistics
const stats = [
  { label: "Projects", value: "15+" }, // DUMMY
  { label: "Years Experience", value: "5+" }, // DUMMY
  { label: "Technologies", value: "20+" }, // DUMMY
  { label: "Happy Clients", value: "10+" }, // DUMMY
];

export default function AboutSection() {
  return (
    <section id="about" className="section-wrap section-about">
      <KerbPattern height={12} className="mb-8" />
      <div className="section-content">
        <FadeIn>
          <p className="section-index">01 / ABOUT</p>
          <h2 className="section-title">Driver <em>Profile.</em></h2>
        </FadeIn>

        <div className="about-grid">
          <FadeIn delay={0.2}>
            <div className="about-copy">
              <p>{portfolioData.personal.bio}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="competencies">
              <span className="eyebrow">DRIVER STATS</span>
              <h3 className="racing-font">{portfolioData.personal.role}</h3>
              <div className="mb-4 telemetry-font text-xs text-f1-silver">
                <div className="flex justify-between mb-1">
                  <span>LOCATION:</span>
                  <span className="text-f1-racing-red">{portfolioData.personal.location}</span>
                </div>
                <div className="flex justify-between">
                  <span>STATUS:</span>
                  <span className="text-f1-green">AVAILABLE</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="p-3 border border-f1-gray bg-f1-carbon-lighter">
                    <div className="text-2xl font-bold text-f1-racing-red racing-font">{stat.value}</div>
                    <div className="text-xs text-f1-silver">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="competency-list">
                <Badge variant="secondary">Frontend development</Badge>
                <Badge variant="secondary">Backend systems</Badge>
                <Badge variant="secondary">Database design</Badge>
                <Badge variant="secondary">API development</Badge>
                <Badge variant="secondary">UI / UX</Badge>
                <Badge variant="secondary">Cloud services</Badge>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <KerbPattern height={12} className="mt-8" />
    </section>
  );
}
