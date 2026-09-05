"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/experience", "Experience"],
  ["/contact", "Contact"],
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark">THITIPUN</span>
        <span className="brand-dot">/DEV</span>
      </Link>

      <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
        <span />
        <span />
      </button>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        {nav.map(([href, label]) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link key={href} href={href} className={active ? "active" : ""} onClick={() => setOpen(false)}>
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
