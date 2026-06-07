import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Code2, BarChart3, Database, Cpu } from "lucide-react";

const members = [
  {
    name: "Sanchita Biswas",
    id: "241001105078",
    role: "Product Lead",
    focus: "Platform Architecture & Strategy",
    icon: Cpu,
    color: "#a78bfa",
    initials: "SB",
  },
  {
    name: "Pratham Dudani",
    id: "241001105085",
    role: "Assistant Developer",
    focus: "Website Development",
    icon: BarChart3,
    color: "#f472b6",
    initials: "PD",
  },
  {
    name: "Piasa Das",
    id: "241001105104",
    role: "Senior Developer",
    focus: "System Design & Database Architecture",
    icon: Database,
    color: "#60a5fa",
    initials: "PD",
  },
  {
    name: "Poulami Bhowmick",
    id: "241001105084",
    role: "Frontend Developer",
    focus: "UI/UX & User Experience Design",
    icon: Code2,
    color: "#34d399",
    initials: "PB",
  },
];

function TeamCard({ name, id, role, focus, icon: Icon, color, initials, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "var(--surface)", border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)", padding: "2rem",
        display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
        gap: "1rem", position: "relative", overflow: "hidden",
        transition: "border-color 0.3s",
      }}
      whileHover={{ y: -6, borderColor: `${color}50` }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${color}, ${color}80)`,
      }} />
      {/* Avatar */}
      <div style={{
        width: 72, height: 72, borderRadius: "50%",
        background: `${color}18`, border: `2px solid ${color}35`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.35rem", color,
      }}>
        {initials}
      </div>
      <div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, marginBottom: 4 }}>{name}</h3>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: "0.8rem", fontWeight: 600, color,
          background: `${color}15`, border: `1px solid ${color}30`,
          padding: "3px 10px", borderRadius: 100, marginBottom: 8,
        }}>
          <Icon size={11} /> {role}
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{focus}</p>
      </div>
      <div style={{
        marginTop: "auto", fontSize: "0.75rem", color: "var(--text-dim)",
        fontFamily: "var(--font-body)", letterSpacing: "0.04em",
      }}>
        Roll No: {id}
      </div>
    </motion.div>
  );
}

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="team" className="section" style={{ background: "var(--bg2)" }}>
      <div className="section-inner">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="section-tag">The Team</span>
          <h2 className="section-title">
            Built By{" "}
            <span className="grad-text">Data Scientists</span>{" "}
            With Purpose
          </h2>
          <p className="section-sub">
            A team of four BSc. Data Science students from Techno India University — combining technical skills with a shared mission to protect workers through technology.
          </p>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginTop: "1rem",
            background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)",
            padding: "6px 16px", borderRadius: 100,
            fontSize: "0.85rem", color: "rgba(241,232,255,0.7)",
          }}>
            <GraduationCap size={15} color="#a78bfa" />
            BSc. Data Science · Section-A · Techno India University 2026
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.25rem" }}>
          {members.map((m, i) => <TeamCard key={m.name} {...m} index={i} />)}
        </div>
      </div>
    </section>
  );
}