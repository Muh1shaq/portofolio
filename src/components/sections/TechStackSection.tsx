"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { portfolioData } from "@/data/portfolioData";

export default function TechStackSection() {
  return (
    <section id="skills" className="section-wrap section-skills">
      <div className="section-content">
        <FadeIn>
          <div className="section-heading-row">
            <h2 className="section-title">Tools of the <em>trade.</em></h2>
            <p className="section-intro">A practical toolkit for building polished products that hold up under the hood.</p>
          </div>
        </FadeIn>

        <StaggerContainer className="tech-grid">
          {portfolioData.techStack.map((tech, index) => (
            <div
              key={index}
              className="tech-item"
            >
              <span
                className="tech-icon"
                aria-hidden="true"
                style={{ backgroundImage: `url("${tech.icon}")` }}
              />
              <span className="tech-copy">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-category">{tech.category}</span>
              </span>
              <span className="tech-number">{String(index + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
