"use client";

import { useEffect, useState } from "react";
import { Braces, Github, Home, Linkedin, Mail, Menu, PanelsTopLeft, UserRound, X, History } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const navItems = [
  { name: "Home", id: "home", icon: Home },
  { name: "About", id: "about", icon: UserRound },
  { name: "Skills", id: "skills", icon: Braces },
  { name: "Projects", id: "projects", icon: PanelsTopLeft },
  { name: "Experience", id: "experience", icon: History },
  { name: "Contact", id: "contact", icon: Mail },
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

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} aria-label="Main navigation">
        <a className="navbar-brand" href="#home">
          <span className="brand-mark">I.</span>
          <span>ISQQ</span>
        </a>

        <div className="navbar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "location" : undefined}
                className={`navbar-link${activeSection === item.id ? " is-active" : ""}`}
                onClick={() => handleNavClick(item.id)}
              >
                <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>

        <div className="navbar-socials" aria-label="Social links">
          <a href={portfolioData.socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${portfolioData.contact.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <button
          className="mobile-nav-toggle"
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-menu open" aria-label="Mobile navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "location" : undefined}
                className={`mobile-menu-link${activeSection === item.id ? " is-active" : ""}`}
                onClick={() => handleNavClick(item.id)}
              >
                <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}
