"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import type { Project } from "@/types/portfolio";

const VISIBLE_DESKTOP = 4;

interface Props {
  projects: Project[];
  onOpen: (project: Project) => void;
}

/** Horizontal scroll-snap carousel. With <=4 projects it renders as a static row (no arrows, no scroll). */
export default function ProjectCarousel({ projects, onOpen }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [overflowing, setOverflowing] = useState(projects.length > VISIBLE_DESKTOP);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setOverflowing(max > 2);
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < max - 2);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const step = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".project-card");
    const gap = parseFloat(getComputedStyle(el).columnGap || "0");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + gap), behavior: "smooth" });
  };

  // Mouse drag-to-scroll on desktop (touch uses native swipe).
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !overflowing || !trackRef.current) return;
    drag.current = { active: true, startX: e.clientX, startScroll: trackRef.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!drag.current.active || !el) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 5 && !drag.current.moved) {
      drag.current.moved = true;
      el.classList.add("is-dragging");
    }
    if (drag.current.moved) el.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    trackRef.current?.classList.remove("is-dragging");
  };
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <div className={`project-carousel${overflowing ? " is-scrollable" : ""}`}>
      {overflowing && (
        <button type="button" id="projects-prev" className="carousel-arrow prev" onClick={() => step(-1)} disabled={!canPrev} aria-label="Previous projects">
          <ChevronLeft size={20} strokeWidth={3} />
        </button>
      )}
      <div
        ref={trackRef}
        className="project-track"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
      >
        {projects.map((project) => {
          const href = project.liveUrl || project.githubUrl;
          return (
            <article className="project-card wood bevel" key={project.id}>
              <div className="project-thumb">
                <Image className="pixelated" src={project.image} alt={`${project.title} thumbnail`} width={320} height={180} draggable={false} unoptimized />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span className="tag-pill" key={tech}>{tech}</span>
                ))}
              </div>
              {href ? (
                <a className="btn btn-gold btn-sm project-view" id={`view-${project.id}`} href={href} target="_blank" rel="noreferrer">
                  <Eye size={14} />View
                </a>
              ) : (
                <button className="btn btn-gold btn-sm project-view" id={`view-${project.id}`} type="button" onClick={() => onOpen(project)}>
                  <Eye size={14} />View
                </button>
              )}
            </article>
          );
        })}
      </div>
      {overflowing && (
        <button type="button" id="projects-next" className="carousel-arrow next" onClick={() => step(1)} disabled={!canNext} aria-label="Next projects">
          <ChevronRight size={20} strokeWidth={3} />
        </button>
      )}
    </div>
  );
}
