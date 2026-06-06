import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  Code2,
  BarChart3,
  Database,
  Cpu,
} from "lucide-react";

const members = [
  {
    name: "Piasa Das",
    id: "241001105104",
    role: "Product Lead",
    focus: "Platform Architecture & Strategy",
    icon: Cpu,
    color: "#a78bfa",
    initials: "PD",
  },
  {
    name: "Sanchita Biswas",
    id: "241001105078",
    role: "Data & Analytics",
    focus: "Market Research & Data Modeling",
    icon: BarChart3,
    color: "#f472b6",
    initials: "SB",
  },
  {
    name: "Pratham Dudani",
    id: "241001105085",
    role: "Developer",
    focus: "System Design & Database Architecture",
    icon: Database,
    color: "#60a5fa",
    initials: "PD",
  },
  {
    name: "Poulami Bhowmick",
    id: "241001105084",
    role: "Designer",
    focus: "UI/UX & User Experience Design",
    icon: Code2,
    color: "#34d399",
    initials: "PB",
  },
];

function TeamCard({
  name,
  id,
  role,
  focus,
  icon: Icon,
  color,
  initials,
  index,
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        background: "rgba(17, 24, 39, 0.95)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "1rem",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        backdropFilter: "blur(12px)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        borderColor: color,
        boxShadow: `0 20px 40px ${color}25`,
      }}
    >
      {/* Top Gradient Bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, ${color}, ${color}80)`,
        }}
      />

      {/* Avatar */}
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: `${color}18`,
          border: `2px solid ${color}50`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: "1.4rem",
          color,
          boxShadow: `0 0 25px ${color}30`,
        }}
      >
        {initials}
      </div>

      {/* Name + Role */}
      <div>
        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 700,
            marginBottom: 8,
            color: "#ffffff",
          }}
        >
          {name}
        </h3>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: "0.8rem",
            fontWeight: 600,
            color,
            background: `${color}15`,
            border: `1px solid ${color}30`,
            padding: "5px 12px",
            borderRadius: 100,
            marginBottom: 10,
          }}
        >
          <Icon size={12} />
          {role}
        </div>

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.9rem",
            lineHeight: 1.5,
          }}
        >
          {focus}
        </p>
      </div>

      {/* Roll Number */}
      <div
        style={{
          marginTop: "auto",
          fontSize: "0.75rem",
          color: "rgba(255,255,255,0.5)",
          letterSpacing: "0.05em",
        }}
      >
        Roll No: {id}
      </div>
    </motion.div>
  );
}

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="team"
      className="section"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #111827 50%, #1e293b 100%)",
        padding: "6rem 1.5rem",
      }}
    >
      <div
        className="section-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            marginBottom: "4rem",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#a78bfa",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontSize: "0.85rem",
            }}
          >
            The Team
          </span>

          <h2
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              marginTop: "1rem",
              marginBottom: "1rem",
              color: "#ffffff",
              lineHeight: 1.2,
            }}
          >
            Built By{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg,#a78bfa,#f472b6,#60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Data Scientists
            </span>{" "}
            With Purpose
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              maxWidth: "750px",
              margin: "0 auto",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            A team of four BSc. Data Science students from Techno India
            University — combining technical skills with a shared mission
            to protect workers through technology.
          </p>

          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: "1.5rem",
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.2)",
              padding: "8px 18px",
              borderRadius: 100,
              fontSize: "0.85rem",
              color: "rgba(241,232,255,0.8)",
            }}
          >
            <GraduationCap size={15} color="#a78bfa" />
            BSc. Data Science · Section-A · Techno India University 2026
          </div>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "1.5rem",
          }}
        >
          {members.map((m, i) => (
            <TeamCard key={m.name} {...m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}