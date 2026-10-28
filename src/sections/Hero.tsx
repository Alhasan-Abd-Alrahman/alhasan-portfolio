import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  MoveUpRight,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="availability">
          <span className="pulse-dot" /> AVAILABLE FOR THE RIGHT OPPORTUNITY
        </div>
        <p className="eyebrow hero-eyebrow">
          FRONTEND DEVELOPER <span>·</span> DAMASCUS, SYRIA
        </p>

        
       <motion.div
        className="hero-profile"
        initial={{ opacity: 0, scale: 0.92, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="hero-profile-glow" />
        <img
          src="/images/profile.png"
          alt="Alhasan Abd Alrahman"
          className="hero-profile-image"
        />
        <span className="hero-profile-ring" />
      </motion.div>
        <p className="hero-lede">
          I’m Alhasan — a frontend developer building thoughtful, responsive web
          experiences with <b>React</b> and <b>Vue</b>. I care about the details
          users feel, not just the pixels they see.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a className="button button-ghost" href="#contact">
            Let’s talk <MoveUpRight size={16} />
          </a>
        </div>
        <div className="hero-socials">
          <a
            href="https://github.com/Alhasan-Abd-Alrahman"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alhasan-abd-alrahman"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <span className="social-divider" />
          <span className="mono">
            SCROLL TO EXPLORE <ArrowDown size={13} />
          </span>
        </div>
      </motion.div>



      <motion.div
        className="hero-art"
        initial={{ opacity: 0, scale: 0.92, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <motion.div
          className="orbit-node node-one"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <span />
        </motion.div>
        <motion.div
          className="orbit-node node-two"
          animate={{ rotate: -360 }}
          transition={{ duration: 31, repeat: Infinity, ease: "linear" }}
        >
          <span />
        </motion.div>
        <div className="core-card">
          <div className="core-top">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="mono">developer.tsx</span>
            <Code2 size={15} />
          </div>
          <div className="code-lines">
            <p>
              <span className="line-no">01</span>
              <span className="code-purple">const</span>{" "}
              <span className="code-blue">developer</span> = {"{"}
            </p>
            <p>
              <span className="line-no">02</span>&nbsp; name:{" "}
              <span className="code-green">'Alhasan'</span>,
            </p>
            <p>
              <span className="line-no">03</span>&nbsp; focus:{" "}
              <span className="code-green">'Frontend'</span>,
            </p>
            <p>
              <span className="line-no">04</span>&nbsp; mindset:{" "}
              <span className="code-green">'Always learning'</span>,
            </p>
            <p>
              <span className="line-no">05</span>&nbsp; coffee:{" "}
              <span className="code-orange">true</span>
            </p>
            <p>
              <span className="line-no">06</span>
              {"}"}
              <span className="typing-cursor" />
            </p>
          </div>
          <div className="code-footer">
            <span>
              <i className="live-mini" /> SYSTEM READY
            </span>
            <span className="mono">v.2026</span>
          </div>
        </div>
        <motion.div
          className="float-chip chip-react"
          animate={{ y: [0, -9, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="chip-icon react-icon">✳</span>
          <div>
            <b>React</b>
            <small>Component thinking</small>
          </div>
        </motion.div>
        <motion.div
          className="float-chip chip-vue"
          animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="chip-icon vue-icon">V</span>
          <div>
            <b>Vue.js</b>
            <small>Production experience</small>
          </div>
        </motion.div>
        <motion.div
          className="float-chip chip-craft"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={16} />
          <span>Craft over clutter</span>
        </motion.div>
        <div className="art-caption mono">
          DESIGNING THE EXPERIENCE <span>✳</span>
        </div>
      </motion.div>
      <div className="hero-bottomline">
        <span>01 / 05</span>
        <div className="progress-track">
          <i />
        </div>
        <span className="mono">SCROLL DOWN</span>
      </div>
    </section>
  );
}
