"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";

export default function ContactSection() {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const handleEmailClick = () => {
    copyToClipboard(portfolioData.contact.email);
  };

  return (
    <section id="contact" className="section-wrap section-contact">
      <div className="section-content">
        <FadeIn>
          <h2 className="section-title">Have a good one<br />in <em>mind?</em></h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="contact-content">
            <p className="contact-copy">
              I&apos;m currently open to new opportunities and collaborations. Feel free to reach out if you&apos;d like to work together.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${portfolioData.contact.email}`}><Mail size={17} />Let&apos;s talk</a>
              <button className="copy-email" onClick={handleEmailClick} aria-live="polite">{isCopied ? "Email copied" : portfolioData.contact.email}</button>
            </div>

            <div className="contact-socials">
              {portfolioData.socialLinks.github && (
                <a
                  href={portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <Github className="h-6 w-6" />
                </a>
              )}
              {portfolioData.socialLinks.linkedin && (
                <a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              )}
              {portfolioData.socialLinks.twitter && (
                <a
                  href={portfolioData.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
