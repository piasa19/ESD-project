import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Market", href: "#market" },
  { label: "Impact", href: "#impact" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "1rem 1.5rem",
          background: scrolled ? "rgba(9,5,15,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.4s ease",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg,#7c3aed,#ec4899)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Shield size={18} color="#fff" />
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>
            Migra<span className="grad-text">Shield</span>
          </span>
        </a>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="nav-links-desktop">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              color: "rgba(241,232,255,0.65)", fontSize: "0.875rem", fontWeight: 500,
              textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "#c084fc"}
              onMouseLeave={e => e.target.style.color = "rgba(241,232,255,0.65)"}
            >{l.label}</a>
          ))}
          <a href="#contact" style={{
            background: "linear-gradient(135deg,#7c3aed,#ec4899)",
            color: "#fff", padding: "0.5rem 1.25rem", borderRadius: 100,
            textDecoration: "none", fontSize: "0.875rem", fontWeight: 600,
            transition: "opacity 0.2s",
          }}
            onMouseEnter={e => e.target.style.opacity = "0.85"}
            onMouseLeave={e => e.target.style.opacity = "1"}
          >Get in Touch</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 4 }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed", top: 68, left: 0, right: 0, zIndex: 99,
              background: "rgba(17,11,30,0.98)", backdropFilter: "blur(20px)",
              padding: "1.5rem", borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex", flexDirection: "column", gap: "1.25rem",
            }}
          >
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                style={{ color: "rgba(241,232,255,0.8)", textDecoration: "none", fontWeight: 500, fontSize: "1rem" }}
              >{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} style={{
              background: "linear-gradient(135deg,#7c3aed,#ec4899)",
              color: "#fff", padding: "0.75rem 1.5rem", borderRadius: 100,
              textDecoration: "none", fontSize: "0.95rem", fontWeight: 600,
              textAlign: "center",
            }}>Get in Touch</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
