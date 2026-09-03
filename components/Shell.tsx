import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TechBackground from "./TechBackground";
import CursorGlow from "./CursorGlow";

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <TechBackground />
      <CursorGlow />
      <div className="noise" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
