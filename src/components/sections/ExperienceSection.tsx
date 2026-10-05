"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { portfolioData } from "@/data/portfolioData";
import KerbPattern from "@/components/animations/KerbPattern";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-wrap section-skills">
      <KerbPattern height={12} className="mb-8" />
      <div className="section-content">
        <FadeIn>
          <p className="section-index">04 / LAP CHART</p>
          <div className="section-heading-row">
            <h2 className="section-title">Race <em>History.</em></h2>
            <p className="section-intro">Career timeline and professional achievements.</p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-12 space-y-8">
          {portfolioData.experience.map((job, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-f1-racing-red"
            >
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 bg-f1-racing-red rounded-full" />
              <div className="mb-2">
                <h3 className="text-xl font-bold text-f1-white racing-font">{job.position}</h3>
                <p className="text-f1-racing-red font-semibold">{job.company}</p>
                <p className="text-xs text-f1-silver telemetry-font mt-1">{job.period}</p>
              </div>
              <ul className="space-y-2 text-f1-silver text-sm">
                {job.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <span className="text-f1-racing-red mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-16">
          <h3 className="text-xl font-bold text-f1-white racing-font mb-6">Milestones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioData.milestones.map((milestone, index) => (
              <div
                key={index}
                className="p-4 border border-f1-gray bg-f1-carbon-lighter hover:border-f1-racing-red transition-colors"
              >
                <div className="text-f1-racing-red font-bold telemetry-font text-lg mb-2">{milestone.year}</div>
                <h4 className="text-f1-white font-semibold mb-1">{milestone.title}</h4>
                <p className="text-f1-silver text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
      <KerbPattern height={12} className="mt-8" />
    </section>
  );
}
