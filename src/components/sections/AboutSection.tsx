"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Feather, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";

/** Level is derived from years since enrolment (education period start) — no new data is invented. */
function getLevel() {
  const start = parseInt(portfolioData.education[0]?.period ?? "", 10);
  if (Number.isNaN(start)) return { level: 1, progress: 50 };
  const now = new Date();
  const level = Math.max(1, now.getFullYear() - start);
  const progress = Math.round(((now.getMonth() + 1) / 12) * 100);
  return { level, progress };
}

export default function AboutSection() {
  const { level, progress } = getLevel();

  return (
    <section id="about" className="vx-section about">
      <div className="grass-strip" aria-hidden="true" />
      <div className="about-panel wood bevel">
        <FadeIn className="about-avatar">
          <div className="gold-frame">
            <Image className="pixelated" src="/voxel/avatar.jpg" alt="Pixel art avatar" width={150} height={150} unoptimized />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="about-parchment">
          <h2>About me</h2>
          <p>I&apos;m a passionate Full Stack Developer with expertise in building modern, scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.</p>
          <p>With a strong foundation in both frontend and backend technologies, I create seamless user experiences while ensuring robust performance and maintainability.</p>
          <Feather className="quill" aria-hidden="true" />
        </FadeIn>

        <FadeIn delay={0.2} className="player-stats wood-inset">
          <h3><Star size={16} fill="currentColor" aria-hidden="true" />Player stats</h3>
          <dl>
            <div className="stat-level">
              <dt>Level</dt>
              <dd>
                {level} (Student)
                <span className="xp-bar" aria-hidden="true"><span style={{ width: `${progress}%` }} /></span>
              </dd>
            </div>
            <div><dt>Role</dt><dd>{portfolioData.personal.role}</dd></div>
            <div><dt>University</dt><dd>{portfolioData.education[0]?.institution}</dd></div>
            <div><dt>Location</dt><dd>{portfolioData.contact.location}</dd></div>
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
