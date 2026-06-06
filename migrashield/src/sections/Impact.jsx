import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { TrendingUp, Users, FileCheck, AlertOctagon, Landmark, HandCoins } from "lucide-react";

const sdgCards = [
  { icon: HandCoins, color: "#34d399", title: "Decent Wages", desc: "Promotes fair wages and safe working conditions through wage tracking and dispute evidence tools." },
  { icon: TrendingUp, color: "#60a5fa", title: "Economic Growth", desc: "Improves worker productivity and financial security, contributing to broader economic inclusion." },
  { icon: AlertOctagon, color: "#fb923c", title: "Reduce Exploitation", desc: "Identifies, documents, and reports labor abuses — creating accountability where none existed." },
  { icon: Users, color: "#f472b6", title: "Gender Equality", desc: "Special protections for female domestic workers who remain the most vulnerable in the global workforce." },
];

const impact = [
  { value: 100000, suffix: "+", label: "Workers Protected", icon: Users },
  { value: 20000, suffix: "", label: "Contracts Analyzed", icon: FileCheck },
  { value: 10000, suffix: "", label: "Disputes Reported", icon: AlertOctagon },
  { value: 500, suffix: "+", label: "NGO Partnerships", icon: Landmark },
];

const budget = [
  { label: "App Development", value: 8, max: 20, color: "#a78bfa" },
  { label: "Staff Salaries", value: 6, max: 20, color: "#f472b6" },
  { label: "Marketing", value: 2, max: 20, color: "#60a5fa" },
  { label: "Cloud Infrastructure", value: 1.5, max: 20, color: "#34d399" },
  { label: "Legal & Registration", value: 1, max: 20, color: "#fb923c" },
  { label: "Miscellaneous", value: 1.5, max: 20, color: "#fbbf24" },
];

const revenue = [
  { label: "Premium Subscriptions", value: 10, color: "#a78bfa" },
  { label: "NGO Contracts", value: 12, color: "#f472b6" },
  { label: "CSR Sponsorship", value: 8, color: "#60a5fa" },
];

function BudgetBar({ label, value, max, color, index, inView }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{label}</span>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color, fontSize: "0.9rem" }}>₹{value}L</span>
      </div>
      <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 100, overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${(value / max) * 100}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: "100%", background: color, borderRadius: 100 }}
        />
      </div>
    </div>
  );
}

export default function Impact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [finRef, finInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [impRef, impInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const total = revenue.reduce((s, r) => s + r.value, 0);
  let cumulative = 0;

  return (
    <section id="impact" className="section">
      <div className="section-inner">
        {/* SDG Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="section-tag">SDG 8 Alignment</span>
          <h2 className="section-title">
            Impact That Goes{" "}
            <span className="grad-text">Beyond Business</span>
          </h2>
          <p className="section-sub">
            MigraShield doesn't just build a startup — it directly advances four key targets of the UN's Sustainable Development Goal 8: Decent Work and Economic Growth.
          </p>
        </motion.div>

        {/* SDG Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.25rem", marginBottom: "5rem" }}>
          {sdgCards.map(({ icon: Icon, color, title, desc }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)", padding: "1.75rem",
                borderTop: `3px solid ${color}`,
              }}
              whileHover={{ y: -4 }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 11,
                background: `${color}18`, border: `1px solid ${color}30`,
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem",
              }}>
                <Icon size={20} color={color} />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700, marginBottom: 8, color }}>{title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Expected Impact Numbers */}
        <motion.div
          ref={impRef}
          initial={{ opacity: 0 }}
          animate={impInView ? { opacity: 1 } : {}}
          style={{
            background: "linear-gradient(135deg,rgba(124,58,237,0.12),rgba(236,72,153,0.08))",
            border: "1px solid rgba(139,92,246,0.2)",
            borderRadius: "var(--radius-xl)", padding: "3rem 2rem",
            marginBottom: "5rem", textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "0.5rem" }}>
            <span className="section-tag">Expected Impact by Year 3</span>
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, marginBottom: "2.5rem" }}>
            Proving Technology Can Be A Force For Global Labor Justice
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "2rem" }}>
            {impact.map(({ value, suffix, label, icon: Icon }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={impInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Icon size={24} color="#a78bfa" style={{ marginBottom: 8 }} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 800, lineHeight: 1 }} className="grad-text">
                  {impInView ? <CountUp end={value} duration={2.5} separator="," suffix={suffix} /> : "0"}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: 6 }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Financial Plan */}
        <motion.div
          ref={finRef}
          initial={{ opacity: 0, y: 30 }}
          animate={finInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "2rem" }}
        >
          <span className="section-tag">Financial Plan</span>
          <h2 className="section-title">
            <span className="grad-text">Sustainable</span> Revenue Model
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="fin-grid">
          {/* Budget */}
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)", padding: "2rem",
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.25rem" }}>Budget Plan</div>
            <div style={{ color: "#a78bfa", fontSize: "0.85rem", marginBottom: "1.75rem" }}>Total Investment: ₹20,00,000</div>
            {budget.map((b, i) => <BudgetBar key={b.label} {...b} index={i} inView={finInView} />)}
          </div>

          {/* Revenue Donut */}
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)", padding: "2rem",
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.25rem" }}>Year 1 Revenue</div>
            <div style={{ color: "#34d399", fontSize: "0.85rem", marginBottom: "1.75rem" }}>Total: ₹30L | Profit: ₹10L</div>

            {/* SVG Donut */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
              <svg width="160" height="160" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="28" />
                {revenue.map((r, i) => {
                  const pct = r.value / total;
                  const circ = 2 * Math.PI * 60;
                  const dash = pct * circ;
                  const offset = -(cumulative / total) * circ - circ / 4;
                  cumulative += r.value;
                  return (
                    <motion.circle key={r.label} cx="80" cy="80" r="60"
                      fill="none" stroke={r.color} strokeWidth="28"
                      strokeDasharray={`${dash} ${circ - dash}`}
                      strokeDashoffset={offset}
                      initial={{ opacity: 0 }}
                      animate={finInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.2 }}
                    />
                  );
                })}
                <text x="80" y="76" textAnchor="middle" fill="#f1e8ff" fontFamily="Syne" fontSize="14" fontWeight="700">₹30L</text>
                <text x="80" y="94" textAnchor="middle" fill="rgba(241,232,255,0.5)" fontSize="10">Revenue</text>
              </svg>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {revenue.map(r => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 3, background: r.color }} />
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{r.label}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: r.color, fontSize: "0.9rem" }}>₹{r.value}L</span>
                </div>
              ))}
              <div style={{ marginTop: 8, paddingTop: 12, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Projected Profit</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#34d399" }}>₹10L (33%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){ .fin-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
