"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import TelemetryGauge from "@/components/animations/TelemetryGauge";
import { portfolioData } from "@/data/portfolioData";

export default function TechStackSection() {
  return (
    <section id="skills" className="section-wrap section-skills">
      <div className="section-content">
        <FadeIn>
          <p className="section-index">02 / SKILLS</p>
          <div className="section-heading-row">
            <h2 className="section-title">Telemetry <em>Data.</em></h2>
            <p className="section-intro">Performance metrics and technical capabilities dashboard.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="max-w-2xl mt-8">
          <div className="space-y-4">
            {portfolioData.techStack.map((tech, index) => (
              <TelemetryGauge
                key={index}
                value={tech.level || 85}
                max={100}
                label={tech.name}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-12">
          <div className="section-heading-row">
            <h3 className="text-xl font-bold text-f1-white racing-font">Tech Stack</h3>
          </div>
          <StaggerContainer className="tech-grid mt-6">
            {portfolioData.techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-item"
              >
                <span className="tech-icon" aria-hidden="true">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
                <span className="tech-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  );
}
