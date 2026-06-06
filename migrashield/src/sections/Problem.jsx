import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DollarSign, FileX, BookOpen, Languages, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Wage Theft",
    desc: "Workers are routinely paid less than promised, with no digital records to dispute discrepancies or prove violation.",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.2)",
  },
  {
    icon: FileX,
    title: "Contract Fraud",
    desc: "Millions sign employment contracts in languages they cannot understand, unknowingly surrendering their legal protections.",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.2)",
  },
  {
    icon: BookOpen,
    title: "Legal Unawareness",
    desc: "Most migrant workers have zero knowledge of labor laws or their rights in the country where they are employed.",
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.2)",
  },
  {
    icon: Languages,
    title: "Language Barriers",
    desc: "Communication difficulties across languages isolate workers and make them easy targets for exploitation.",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.2)",
  },
  {
    icon: AlertTriangle,
    title: "Fear of Reporting",
    desc: "Workers hesitate to complain about abuse due to fear of losing jobs, deportation, or violent retaliation.",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.08)",
    border: "rgba(251,146,60,0.2)",
  },
];

function ProblemCard({ icon: Icon, title, desc, color, bg, border, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: bg, border: `1px solid ${border}`,
        borderRadius: "var(--radius-lg)", padding: "1.75rem",
        display: "flex", flexDirection: "column", gap: "1rem",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "default",
      }}
      whileHover={{ y: -6, boxShadow: `0 20px 60px ${bg}` }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: `rgba(${color.startsWith('#') ? hexToRgb(color) : color}, 0.15)`,
        border: `1px solid ${border}`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon size={22} color={color} />
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color }}>{title}</h3>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>{desc}</p>
    </motion.div>
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export default function Problem() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="problem" className="section" style={{ background: "var(--bg2)" }}>
      <div className="section-inner">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="section-tag">The Crisis</span>
          <h2 className="section-title">
            A Global Crisis With{" "}
            <span className="grad-text">No Accessible Solution</span>
          </h2>
          <p className="section-sub">
            Over 169 million migrant workers worldwide face daily exploitation with no support systems — trapped by language, law, and fear.
          </p>
        </motion.div>

        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(236,72,153,0.1))",
            border: "1px solid rgba(139,92,246,0.25)",
            borderRadius: "var(--radius-xl)", padding: "3rem 2.5rem",
            marginBottom: "3rem", textAlign: "center",
            position: "relative", overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, lineHeight: 1 }} className="grad-text">
            169 Million+
          </div>
          <div style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginTop: "0.75rem" }}>
            migrant workers globally — and the number grows every year
          </div>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}>
          {problems.map((p, i) => <ProblemCard key={p.title} {...p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
