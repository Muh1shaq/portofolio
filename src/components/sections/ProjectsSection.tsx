"use client";

import { useState } from "react";
import { ScrollText } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import type { Project } from "@/types/portfolio";
import SectionLabel from "@/components/voxel/SectionLabel";
import Lantern from "@/components/voxel/Lantern";
import ProjectModal from "./ProjectModal";
import ProjectCarousel from "./ProjectCarousel";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="vx-section projects">
        <div className="projects-board wood bevel">
          <Lantern className="board-lantern left" size={26} />
          <Lantern className="board-lantern right" size={26} />
          <SectionLabel icon={<ScrollText size={16} />}>Projects</SectionLabel>
          <ProjectCarousel projects={portfolioData.projects} onOpen={setSelectedProject} />
        </div>
      </section>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}
