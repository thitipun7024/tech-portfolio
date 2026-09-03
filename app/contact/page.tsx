"use client";

import PageHero from "@/components/PageHero";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    setSent(true);
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container subpage">
      <PageHero
        eyebrow="CONTACT / 04"
        title="Have a hard problem?"
        accent="Let’s build."
        description="For product engineering, internal platforms, automation, infrastructure or technical collaboration — send a signal."
      />

      <section className="contact-grid">
        <form className="contact-form glass-panel" onSubmit={submit}>
          <span className="card-index">TRANSMIT MESSAGE</span>
          <label><span>01 / NAME</span><input name="name" placeholder="Your name" required /></label>
          <label><span>02 / EMAIL</span><input name="email" type="email" placeholder="you@company.com" required /></label>
          <label><span>03 / MESSAGE</span><textarea name="message" placeholder="Tell me what you're building..." rows={6} required /></label>
          <button className="btn primary submit-btn" type="submit">Send transmission <span>→</span></button>
          {sent && <small className="form-note">Opening your email client… Replace your.email@example.com before publishing.</small>}
        </form>

        <aside className="contact-console">
          <div className="console-card">
            <div className="console-top"><i/><span>secure_channel.exe</span><em>LIVE</em></div>
            <pre>{`> location\nBANGKOK / THAILAND\n\n> timezone\nUTC+07:00\n\n> response_mode\nASYNC / EMAIL\n\n> specialties\nFULL_STACK\nINFRASTRUCTURE\nAUTOMATION\nNETWORKING\n\n> status\nREADY_`}</pre>
          </div>
          <div className="social-grid">
            <a href="https://github.com/thitipun7024">GITHUB <span>↗</span></a>
            <a href="thitipun7024@gmail.com">EMAIL <span>↗</span></a>
            <a href="https://www.facebook.com/share/194CXs8s75/">facebook<span>↗</span></a>
            <a href="https://www.instagram.com/thitipun_7024?igsi=MWgxdXpsd24wdDhxOA==">Instagram <span>↗</span></a>
          </div>
        </aside>
      </section>
    </div>
  );
}
