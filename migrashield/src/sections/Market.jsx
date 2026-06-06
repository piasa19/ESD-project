import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Building2, Globe2 } from "lucide-react";

const regions = [
  { region: "Gulf Countries", users: 35, color: "#a78bfa" },
  { region: "Southeast Asia", users: 25, color: "#f472b6" },
  { region: "North America", users: 15, color: "#60a5fa" },
  { region: "Europe", users: 9, color: "#34d399" },
];

const maxVal = 35;

function RegionBar({ region, users, color, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ marginBottom: "1.25rem" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{region}</span>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color }}>{users}M</span>
      </div>
      <div style={{ height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 100, overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${(users / maxVal) * 100}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: "100%", background: color, borderRadius: 100 }}
        />
      </div>
    </motion.div>
  );
}

export default function Market() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="market" className="section" style={{ background: "var(--bg2)" }}>
      <div className="section-inner">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="section-tag">Market Analysis</span>
          <h2 className="section-title">
            An Underserved Market{" "}
            <span className="grad-text">Worth Billions</span>
          </h2>
          <p className="section-sub">
            Reaching the world's most underserved workforce — where technology finally meets labor rights.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="market-grid">
          {/* Target Users */}
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", marginBottom: "1.5rem", color: "var(--text-muted)" }}>Who We Serve</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: Users, label: "Primary Users", color: "#a78bfa", desc: "Migrant, domestic, construction, and agricultural workers — those most exposed to wage theft, contract fraud, and labor exploitation with little legal protection." },
                { icon: Building2, label: "Secondary Users", color: "#f472b6", desc: "NGOs, labor unions, government labor departments, and ethical employers — monitoring compliance and building fair, transparent workplaces." },
                { icon: Globe2, label: "Global Reach", color: "#60a5fa", desc: "169M+ migrant workers across Gulf countries, Southeast Asia, Europe, and North America — a massive underserved digital audience." },
              ].map(({ icon: Icon, label, color, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  style={{
                    background: "var(--surface)", border: "1px solid var(--border)",
                    borderRadius: "var(--radius)", padding: "1.25rem",
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: `${color}18`, border: `1px solid ${color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={18} color={color} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: 4 }}>{label}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.65 }}>{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Market Size */}
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", marginBottom: "1.5rem", color: "var(--text-muted)" }}>Market Size by Region</h3>
            <div style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)", padding: "2rem", marginBottom: "1.25rem",
            }}>
              {regions.map((r, i) => <RegionBar key={r.region} {...r} index={i} />)}
              <div style={{
                marginTop: "1.5rem", paddingTop: "1.5rem",
                borderTop: "1px solid var(--border)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Total Addressable Market</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem" }} className="grad-text">169M+</span>
              </div>
            </div>

            {/* Mission & Vision */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { label: "Mission", text: "Empower migrant workers with accessible technology, legal awareness, and protection tools." },
                { label: "Vision", text: "Become the world's most trusted digital platform for migrant worker welfare by Year 3." },
              ].map(({ label, text }) => (
                <div key={label} style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(236,72,153,0.06))",
                  border: "1px solid rgba(139,92,246,0.2)",
                  borderRadius: "var(--radius)", padding: "1.25rem",
                }}>
                  <div style={{ fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#a78bfa", marginBottom: 8 }}>{label}</div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.83rem", lineHeight: 1.65 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){ .market-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
