"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, MessageSquare, Send, User } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import SectionLabel from "@/components/voxel/SectionLabel";
import Lantern from "@/components/voxel/Lantern";

const isUrl = (value?: string) => !!value && /^https?:\/\//.test(value);

export default function ContactSection() {
  const { copyToClipboard, isCopied } = useCopyToClipboard();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { email } = portfolioData.contact;
  const { github, linkedin } = portfolioData.socialLinks;

  // Same channel as the previous "Let's talk" mailto action, pre-filled with the form fields.
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleEmailClick = () => {
    copyToClipboard(email);
  };

  return (
    <section id="contact" className="vx-section contact">
      <div className="brick-panel contact-panel bevel">
        <div className="contact-scene" aria-hidden="true">
          <Image className="pixelated" src="/voxel/contact-pond.svg" alt="" width={240} height={200} unoptimized />
          <Lantern className="contact-lantern" size={22} />
        </div>

        <div className="contact-form-wrap">
          <SectionLabel icon={<Mail size={16} />}>Send a message in a bottle</SectionLabel>
          <form className="contact-form wood bevel" onSubmit={handleSubmit}>
            <label htmlFor="contact-name"><User size={14} aria-hidden="true" />Name</label>
            <input id="contact-name" name="name" required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <label htmlFor="contact-email"><Mail size={14} aria-hidden="true" />Email</label>
            <input id="contact-email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <label htmlFor="contact-message"><MessageSquare size={14} aria-hidden="true" />Message</label>
            <textarea id="contact-message" name="message" required rows={3} placeholder="Tell me about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button className="btn btn-gold contact-send" id="contact-send" type="submit"><Send size={14} />Send</button>
          </form>
        </div>

        <div className="connect-panel stone-inset bevel">
          <h3 className="connect-title">Let&apos;s connect</h3>
          <div className="connect-icons">
            {github && (
              <a className="social-block" id="social-github" href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
            )}
            {isUrl(linkedin) ? (
              <a className="social-block linkedin" id="social-linkedin" href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            ) : (
              <span className="social-block linkedin is-disabled" id="social-linkedin" aria-label="LinkedIn (coming soon)" title="LinkedIn coming soon"><Linkedin size={20} /></span>
            )}
            <a
              className="social-block mail"
              id="social-email"
              href={`mailto:${email}`}
              onClick={handleEmailClick}
              aria-label={isCopied ? "Email copied" : "Email"}
              title={isCopied ? "Email copied" : email || "Email"}
            >
              <Mail size={20} />
            </a>
          </div>
          <span className="sr-only" aria-live="polite">{isCopied ? "Email copied" : ""}</span>
        </div>
      </div>
    </section>
  );
}
