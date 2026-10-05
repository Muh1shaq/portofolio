"use client";

import FadeIn from "@/components/animations/FadeIn";
import StartLights from "@/components/animations/StartLights";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [hasLaunched, setHasLaunched] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Fallback: show content after 4 seconds if animation hasn't completed
  useEffect(() => {
    if (!hasLaunched && !prefersReducedMotion) {
      const timeout = setTimeout(() => {
        setHasLaunched(true);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [hasLaunched, prefersReducedMotion]);

  // If reduced motion, show content immediately
  const shouldShowContent = hasLaunched || prefersReducedMotion;

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
    <section id="home" className="hero-section section-wrap">
      <div className="hero-inner">
        <div className="hero-copy">
          {!prefersReducedMotion && <StartLights onAnimationComplete={() => setHasLaunched(true)} />}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={shouldShowContent ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="eyebrow"><span className="availability-dot" /> Available for select projects</p>
            <h1>Hi, I&apos;m <span className="racing-font">{portfolioData.personal.name}</span></h1>
            <p className="hero-subtitle">{portfolioData.personal.tagline}</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={downloadCv}><Download size={17} />Download CV</button>
              <a className="button button-outline" href="#projects">View Projects<ArrowUpRight size={17} /></a>
            </div>
          </motion.div>
          <div className="hero-meta"><span>01 / 06</span><span className="meta-rule" /><span>Scroll to explore</span></div>
        </div>
        <FadeIn delay={0.3} className="hero-art-wrap">
          <div className="hero-art" aria-label="Decorative code editor illustration">
            <div className="code-window-top"><span /><span /><span /><small>hello-world.tsx</small></div>
            <div className="code-lines" aria-hidden="true">
              <span><i>01</i> <b>const</b> developer = &#123;</span>
              <span><i>02</i> &nbsp; name: <em>&quot;Ishaq&quot;</em>,</span>
              <span><i>03</i> &nbsp; focus: <em>&quot;the details&quot;</em>,</span>
              <span><i>04</i> &nbsp; builds: [</span>
              <span><i>05</i> &nbsp;&nbsp; <em>&quot;thoughtful UI&quot;</em>,</span>
              <span><i>06</i> &nbsp;&nbsp; <em>&quot;reliable systems&quot;</em></span>
              <span><i>07</i> &nbsp; ]</span>
              <span><i>08</i> &#125;;<b className="code-cursor">|</b></span>
            </div>
            <div className="art-stamp">DESIGN<br />&amp; BUILD<span>✳</span></div>
            <div className="art-caption">A little logic.<br />A lot of care.</div>
          </div>
        </FadeIn>
      </div>
      <motion.a href="#about" className="hero-scroll" aria-label="Scroll to About" animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
