"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolioData";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { ExternalLink, Github } from "lucide-react";
import KerbPattern from "@/components/animations/KerbPattern";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="section-wrap section-projects">
        <KerbPattern height={12} className="mb-8" />
        <div className="section-content">
          <FadeIn>
            <p className="section-index">03 / PIT WALL</p>
            <div className="section-heading-row">
              <h2 className="section-title">Race <em>Strategy.</em></h2>
              <p className="section-intro">Experiments, tools, and products built to solve real problems.</p>
            </div>
          </FadeIn>

          <StaggerContainer className="project-grid">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") setSelectedProject(project);
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${project.title} project details`}
              >
                <div className={`project-art project-art-${index % 4}`}>
                  <span className="project-art-label telemetry-font">{project.category.toUpperCase()}</span>
                  <span className="project-art-symbol racing-font">{project.title.slice(0, 1)}</span>
                  <span className="project-art-index telemetry-font">0{index + 1}</span>
                </div>

                <div className="project-details">
                  <div className="project-title-row"><h3 className="racing-font">{project.title}</h3><span aria-hidden="true" className="text-f1-racing-red">↗</span></div>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="project-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}><ExternalLink size={14} /> Live</a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}><Github size={14} /> Code</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
        <KerbPattern height={12} className="mt-8" />
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
