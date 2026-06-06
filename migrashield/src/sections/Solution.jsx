import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Bot, Clock, Library, PhoneCall, EyeOff, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Bot,
    tag: "AI-Powered",
    tagColor: "#a78bfa",
    title: "Smart Contract Scanner",
    desc: "Our AI engine reads employment contracts in any language, flags exploitative clauses, and explains risks in simple terms the worker can understand.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    icon: Clock,
    tag: "Tracking",
    tagColor: "#34d399",
    title: "Wage & Hours Tracker",
    desc: "Workers log shifts, record payments, and build a tamper-proof payment history — giving them undeniable evidence if wages are withheld.",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
  },
  {
    icon: Library,
    tag: "Multilingual",
    tagColor: "#60a5fa",
    title: "Rights Library",
    desc: "Labor laws from 20+ countries available in 15+ languages, with simplified explanations designed for low-literacy users.",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
  },
  {
    icon: PhoneCall,
    tag: "Emergency",
    tagColor: "#f87171",
    title: "Emergency SOS",
    desc: "One-tap access to embassies, local NGOs, police, and crisis helplines — with location sharing and offline functionality.",
    img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80",
  },
  {
    icon: EyeOff,
    tag: "Anonymous",
    tagColor: "#fb923c",
    title: "Secure Reporting",
    desc: "Workers report abuse, wage theft, and unsafe conditions completely anonymously — with encrypted data and no traceable identity.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
  },
  {
    icon: MessageCircle,
    tag: "Community",
    tagColor: "#f472b6",
    title: "Peer Community Forums",
    desc: "Native-language discussion boards connect workers across regions — sharing experiences, advice, and solidarity.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  },
];

function FeatureCard({ icon: Icon, tag, tagColor, title, desc, img, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)", overflow: "hidden",
        display: "flex", flexDirection: "column",
        transition: "border-color 0.3s, transform 0.3s",
      }}
      whileHover={{ y: -6, borderColor: "rgba(139,92,246,0.4)" }}
    >
      <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
        <img
          src={img} alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s" }}
          onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(9,5,15,0.8) 0%, transparent 60%)",
        }} />
        <div style={{
          position: "absolute", top: 14, left: 14,
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "rgba(9,5,15,0.7)", backdropFilter: "blur(8px)",
          border: `1px solid ${tagColor}40`,
          padding: "4px 10px", borderRadius: 100,
          fontSize: "11px", fontWeight: 600, color: tagColor, letterSpacing: "0.05em",
        }}>
          <Icon size={11} /> {tag}
        </div>
      </div>
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 9,
            background: `${tagColor}18`,
            border: `1px solid ${tagColor}35`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Icon size={16} color={tagColor} />
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700 }}>{title}</h3>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7, flex: 1 }}>{desc}</p>
      </div>
    </motion.div>
  );
}

export default function Solution() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="solution" className="section">
      <div className="section-inner">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span className="section-tag">Our Platform</span>
          <h2 className="section-title">
            Six Tools. One Mission.{" "}
            <span className="grad-text">Total Protection.</span>
          </h2>
          <p className="section-sub">
            MigraShield combines AI, legal databases, and community infrastructure into a single accessible platform — working even on low-end devices with limited connectivity.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}>
          {features.map((f, i) => <FeatureCard key={f.title} {...f} index={i} />)}
        </div>
      </div>
    </section>
  );
}
