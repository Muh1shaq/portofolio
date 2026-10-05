"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.2, 0.5] },
    );

    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} aria-label="Main navigation">
        <a className="navbar-brand" href="#home">
          <span>RACER</span>
        </a>

        <div className="navbar-nav">
          {navItems.map((item) => {
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "location" : undefined}
                className={`navbar-link${activeSection === item.id ? " is-active" : ""}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        <div className="navbar-socials" aria-label="Social links">
          <a href={portfolioData.socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          {portfolioData.socialLinks.linkedin?.startsWith("https://") && (
            <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          )}
          {!portfolioData.contact.email.startsWith("TODO:") && (
            <a href={`mailto:${portfolioData.contact.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          )}
        </div>

        <button
          className="mobile-nav-toggle"
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <>
          <button
            className="mobile-menu-backdrop"
            type="button"
            aria-label="Close navigation"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "location" : undefined}
                className={`mobile-menu-link${activeSection === item.id ? " is-active" : ""}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </>
      )}
    </>
  );
}
