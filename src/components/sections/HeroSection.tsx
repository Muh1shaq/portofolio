"use client";

import FadeIn from "@/components/animations/FadeIn";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function HeroSection() {
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
          <FadeIn delay={0.15}>
            <p className="eyebrow"><span className="availability-dot" /> Available for select projects</p>
            <h1>MUH ISHAQ<br /><span>AFIF ISMAIL</span></h1>
            <p className="hero-subtitle">an Informatics student at Telkom University with a strong background in computer and network engineering.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={downloadCv}><Download size={17} />Download CV</button>
              <a className="button button-outline" href="#projects">View Projects<ArrowUpRight size={17} /></a>
            </div>
          </FadeIn>
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
