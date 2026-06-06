import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Users } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

const stats = [
  { icon: Globe, value: "169M+", label: "Global Migrant Workers" },
  { icon: Shield, value: "SDG 8", label: "Decent Work & Growth" },
  { icon: Users, value: "4", label: "Target Regions" },
];

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
      {/* Background blobs */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.25) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 80% 80%, rgba(236,72,153,0.15) 0%, transparent 60%)",
      }} />
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="section-inner" style={{ paddingTop: "8rem", paddingBottom: "6rem", width: "100%" }}>
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: "1.5rem" }}>
          <span className="section-tag">
            <Shield size={12} />
            ESD Assignment · Techno India University 2026
          </span>
        </motion.div>

        <motion.h1 {...fadeUp(0.2)} style={{
          fontSize: "clamp(2.8rem, 8vw, 5.5rem)", fontWeight: 800,
          lineHeight: 1.05, marginBottom: "1.5rem", maxWidth: 800,
        }}>
          Protecting Workers.{" "}
          <span className="grad-text">Powering Growth.</span>{" "}
          Changing Lives.
        </motion.h1>

        <motion.p {...fadeUp(0.35)} style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(241,232,255,0.6)",
          maxWidth: 620, lineHeight: 1.8, marginBottom: "2.5rem",
        }}>
          MigraShield is a mobile-first platform that empowers migrant and domestic workers with AI-powered contract analysis, wage tracking, multilingual legal resources, and emergency support — directly advancing UN Sustainable Development Goal 8.
        </motion.p>

        <motion.div {...fadeUp(0.45)} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "5rem" }}>
          <a href="#solution" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg,#7c3aed,#ec4899)",
            color: "#fff", padding: "0.85rem 2rem", borderRadius: 100,
            textDecoration: "none", fontSize: "0.95rem", fontWeight: 600,
            boxShadow: "0 0 40px rgba(124,58,237,0.4)",
            transition: "box-shadow 0.3s, transform 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 60px rgba(124,58,237,0.6)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 40px rgba(124,58,237,0.4)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Explore the Solution <ArrowRight size={16} />
          </a>
          <a href="#team" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "rgba(241,232,255,0.8)", padding: "0.85rem 2rem", borderRadius: 100,
            textDecoration: "none", fontSize: "0.95rem", fontWeight: 500,
            border: "1px solid rgba(255,255,255,0.12)",
            transition: "border-color 0.3s, color 0.3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(192,132,252,0.5)"; e.currentTarget.style.color = "#c084fc"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(241,232,255,0.8)"; }}
          >
            Meet the Team
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "rgba(139,92,246,0.15)",
                border: "1px solid rgba(139,92,246,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={18} color="#a78bfa" />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.2rem" }}>{value}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating visual element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute", right: "-5%", top: "50%", transform: "translateY(-50%)",
          width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(236,72,153,0.08) 50%, transparent 70%)",
          border: "1px solid rgba(139,92,246,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          pointerEvents: "none",
        }}
        className="hero-orb"
      >
        <div style={{
          width: 280, height: 280, borderRadius: "50%",
          border: "1px solid rgba(139,92,246,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            width: 160, height: 160, borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(236,72,153,0.3))",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Shield size={60} color="#c084fc" opacity={0.8} />
          </div>
        </div>
      </motion.div>

      <style>{`
        @media(max-width:768px){ .hero-orb { display: none !important; } }
      `}</style>
    </section>
  );
}
