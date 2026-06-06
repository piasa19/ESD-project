import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Mail, MapPin, Link } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* CTA Section */}
      <section id="contact" className="section">
        <div className="section-inner">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: "3rem" }}
          >
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">
              Ready To Support{" "}
              <span className="grad-text">MigraShield?</span>
            </h2>
            <p className="section-sub">
              Whether you're an NGO, investor, government body, or just someone who believes in fair labor — we'd love to hear from you.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "2.5rem", alignItems: "start" }} className="contact-grid">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { icon: Mail, label: "Email", value: "migrashield@technoindiagroup.com" },
                  { icon: MapPin, label: "Location", value: "Kolkata, West Bengal, India" },
                  { icon: Shield, label: "SDG Focus", value: "Goal 8 — Decent Work & Economic Growth" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={17} color="#a78bfa" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 3 }}>{label}</div>
                      <div style={{ fontSize: "0.9rem", color: "rgba(241,232,255,0.8)" }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* SDG 8 Badge */}
              <div style={{
                marginTop: "2rem",
                background: "linear-gradient(135deg,rgba(124,58,237,0.15),rgba(236,72,153,0.1))",
                border: "1px solid rgba(139,92,246,0.25)",
                borderRadius: "var(--radius-lg)", padding: "1.5rem",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>
                  Funding Requirement
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2rem" }} className="grad-text">₹20–25 Lakhs</div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: 8, lineHeight: 1.6 }}>
                  Seeking grants from ILO, UN Women, Government Innovation Programs, and CSR-committed corporations.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              onSubmit={handleSubmit}
              style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)", padding: "2rem",
                display: "flex", flexDirection: "column", gap: "1.25rem",
              }}
            >
              {sent ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <Shield size={48} color="#34d399" style={{ margin: "0 auto 1rem" }} />
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, marginBottom: 8 }}>Message Sent!</div>
                  <p style={{ color: "var(--text-muted)" }}>Thank you for your interest in MigraShield. We'll be in touch shortly.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.07em" }}>Your Name</label>
                    <input
                      type="text" required value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Anjali Sharma"
                      style={{
                        width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "var(--radius)", padding: "0.75rem 1rem", color: "#f1e8ff",
                        fontSize: "0.95rem", outline: "none", transition: "border-color 0.2s",
                        fontFamily: "var(--font-body)",
                      }}
                      onFocus={e => e.target.style.borderColor = "rgba(139,92,246,0.5)"}
                      onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.07em" }}>Email Address</label>
                    <input
                      type="email" required value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      style={{
                        width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "var(--radius)", padding: "0.75rem 1rem", color: "#f1e8ff",
                        fontSize: "0.95rem", outline: "none", transition: "border-color 0.2s",
                        fontFamily: "var(--font-body)",
                      }}
                      onFocus={e => e.target.style.borderColor = "rgba(139,92,246,0.5)"}
                      onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.07em" }}>Message</label>
                    <textarea
                      required rows={5} value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="I'm interested in partnering with MigraShield as..."
                      style={{
                        width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "var(--radius)", padding: "0.75rem 1rem", color: "#f1e8ff",
                        fontSize: "0.95rem", outline: "none", transition: "border-color 0.2s", resize: "vertical",
                        fontFamily: "var(--font-body)",
                      }}
                      onFocus={e => e.target.style.borderColor = "rgba(139,92,246,0.5)"}
                      onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                    />
                  </div>
                  <button type="submit" style={{
                    background: "linear-gradient(135deg,#7c3aed,#ec4899)",
                    color: "#fff", border: "none", padding: "0.85rem 2rem",
                    borderRadius: 100, fontSize: "0.95rem", fontWeight: 600, cursor: "pointer",
                    fontFamily: "var(--font-body)", transition: "opacity 0.2s, transform 0.2s",
                    boxShadow: "0 0 30px rgba(124,58,237,0.3)",
                  }}
                    onMouseEnter={e => { e.target.style.opacity = "0.88"; e.target.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={e => { e.target.style.opacity = "1"; e.target.style.transform = "translateY(0)"; }}
                  >
                    Send Message →
                  </button>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "var(--bg2)", borderTop: "1px solid var(--border)",
        padding: "3rem 1.5rem",
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 9,
              background: "linear-gradient(135deg,#7c3aed,#ec4899)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Shield size={16} color="#fff" />
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem" }}>
              Migra<span className="grad-text">Shield</span>
            </span>
          </div>
          <div style={{ color: "var(--text-dim)", fontSize: "0.85rem", textAlign: "center" }}>
            BSc. Data Science · Section-A · Techno India University 2026<br />
            ESD Assignment — SDG 8: Decent Work & Economic Growth
          </div>
          <div style={{ color: "var(--text-dim)", fontSize: "0.8rem" }}>
            © 2026 MigraShield
          </div>
        </div>
      </footer>

      <style>{`
        @media(max-width:768px){ .contact-grid { grid-template-columns: 1fr !important; } }
        input::placeholder, textarea::placeholder { color: rgba(241,232,255,0.25); }
      `}</style>
    </>
  );
}
