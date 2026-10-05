"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import CheckeredFlag from "@/components/animations/CheckeredFlag";
import { useState } from "react";

export default function ContactSection() {
  const { copyToClipboard, isCopied } = useCopyToClipboard();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailClick = () => {
    copyToClipboard(portfolioData.contact.email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // DUMMY - Replace with actual form submission logic
    setTimeout(() => {
      alert("Message sent! (This is a dummy - connect to a real backend)"); // DUMMY
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-wrap section-contact">
      <div className="section-content">
        <FadeIn>
          <p className="section-index">05 / FINISH LINE</p>
          <h2 className="section-title">Start a <em>Conversation.</em></h2>
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

        <FadeIn delay={0.3} className="mt-12 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-f1-silver mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-f1-carbon-lighter border border-f1-gray text-f1-white rounded-md focus:outline-none focus:border-f1-racing-red transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-f1-silver mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-f1-carbon-lighter border border-f1-gray text-f1-white rounded-md focus:outline-none focus:border-f1-racing-red transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-f1-silver mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-f1-carbon-lighter border border-f1-gray text-f1-white rounded-md focus:outline-none focus:border-f1-racing-red transition-colors resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="button button-primary w-full flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Sending..." : "Send Message"} <Send size={17} />
            </button>
          </form>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-12 flex justify-center">
          <CheckeredFlag width={200} height={40} />
        </FadeIn>
      </div>
    </section>
  );
}
