"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, X } from "lucide-react";
import { Project } from "@/types/portfolio";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="project-modal-scrim"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="project-modal"
          >
            <button
              onClick={onClose}
              className="project-modal-close"
            >
              <X className="h-4 w-4" />
            </button>
            
            <div className="space-y-6">
              <div>
                <h2 className="project-modal-title">{project.title}</h2>
                <p className="project-modal-copy">{project.description}</p>
              </div>
              
              <div className="project-modal-art">
                <span>{project.category}</span><strong>{project.title}</strong>
              </div>
              
              <div>
                <h3 className="project-modal-heading">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="project-modal-heading">Key Features</h3>
                  <ul className="project-feature-list">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="project-modal-actions">
                {project.liveUrl && (
                  <Button className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
