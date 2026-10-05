  "use client";

import FadeIn from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section id="about" className="section-wrap section-about">
      <div className="section-content">
        <FadeIn>
          <h2 className="section-title">about <em>me.</em></h2>
        </FadeIn>

        <div className="about-grid">
          <FadeIn delay={0.2}>
            <div className="about-copy">
              <p>I&apos;m a passionate Full Stack Developer with expertise in building modern, scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.</p>
              <p>With a strong foundation in both frontend and backend technologies, I create seamless user experiences while ensuring robust performance and maintainability.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="competencies">
              <span className="eyebrow">WHAT I BRING</span>
              <h3>Thoughtful from<br />interface to infrastructure.</h3>
              <div className="competency-list">
                <Badge variant="secondary">Frontend development</Badge>
                <Badge variant="secondary">Backend systems</Badge>
                <Badge variant="secondary">Database design</Badge>
                <Badge variant="secondary">API development</Badge>
                <Badge variant="secondary">UI / UX</Badge>
                <Badge variant="secondary">Cloud services</Badge>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
