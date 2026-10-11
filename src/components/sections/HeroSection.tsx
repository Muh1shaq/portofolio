"use client";

import { Download, Play } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useEffect, useState } from "react";
import SakuraPetals from "@/components/voxel/SakuraPetals";

export default function HeroSection() {
  const [typedTagline, setTypedTagline] = useState("");

  useEffect(() => {
    const tagline = portfolioData.personal.tagline;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedTagline(tagline);
      return;
    }

    let position = 0;
    const timer = window.setInterval(() => {
      position += 1;
      setTypedTagline(tagline.slice(0, position));
      if (position >= tagline.length) window.clearInterval(timer);
    }, 28);

    return () => window.clearInterval(timer);
  }, []);

  const downloadCv = () => {
    const { personal, contact, techStack, experience } = portfolioData;
    const content = [
      personal.name,
      personal.role,
      `${contact.location} | ${contact.email}`,
      "",
      personal.bio,
      "",
      "TECHNICAL SKILLS",
      techStack.map((tech) => tech.name).join(" | "),
      "",
      "EXPERIENCE",
      ...experience.flatMap((job) => [`${job.position} - ${job.company} (${job.period})`, ...job.description.map((item) => `- ${item}`), ""]),
    ].join("\n");
    const file = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Muh-Ishaq-Afif-Ismail-CV.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="hero" aria-label="Intro">
      <div className="hero-bg" role="img" aria-label="Voxel Japanese garden at golden hour with sakura tree, pagoda, bridge and lake" />
      <SakuraPetals />
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="hero-name">{portfolioData.personal.name}</h1>
          <p className="hero-role">{portfolioData.personal.role}</p>
          <div className="hero-tagline wood bevel" aria-label={portfolioData.personal.tagline}>
            <span aria-hidden="true">{typedTagline}</span>
            <span className="typing-cursor" aria-hidden="true" />
          </div>
          <div className="hero-actions">
            <a className="btn btn-green" id="hero-start" href="#projects">
              <Play size={16} fill="currentColor" />Start journey
            </a>
            <button className="btn btn-stone" id="hero-download-cv" type="button" onClick={downloadCv}>
              <Download size={16} />Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
