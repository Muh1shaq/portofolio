import FadeIn from "@/components/animations/FadeIn";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <FadeIn>
          <div className="footer-row">
            <div className="footer-copy">
              © {currentYear} Portfolio. All rights reserved.
            </div>

            <div className="footer-socials">
              {portfolioData.socialLinks.github && (
                <a
                  href={portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {portfolioData.socialLinks.linkedin && (
                <a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {portfolioData.socialLinks.twitter && (
                <a
                  href={portfolioData.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="contact-social-link"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
