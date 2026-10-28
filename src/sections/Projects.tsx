
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Layers3,
} from "lucide-react";

import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  mark: string;
  image: string;
  link: string;
  github: string;
  featured: boolean;
};

// All project data lives in this file
const projects: Project[] = [
  {
    number: "01",
    category: "BUSINESS PLATFORM",
    title: "Operations Control",
    description:
      "A role-aware operations dashboard designed to turn complex daily workflows into clear, actionable screens.",
    tags: ["Vue 3", "Pinia", "REST API", "PWA"],
    accent: "blue",
    mark: "OPS",
    image: "",
    link: "",
    github: "",
    featured: true,
  },
  {
    number: "02",
    category: "SERVICE MARKETPLACE",
    title: "Wesal Job",
    description:
      "A multi-role services platform with tailored profiles, service discovery, requests, and order workflows.",
    tags: ["Vue 3", "Role-based UI", "Reusable Components"],
    accent: "cyan",
    mark: "W/",
    image: "../../public/images/wesal jobe project.jpg",
    link: "",
    github: "",
    featured: true,
  },
  {
    number: "03",
    category: "BUSINESS WEB",
    title: "MTN Syria",
    description:
      "A business-facing web experience with practical navigation and data-focused interfaces.",
    tags: ["Vue", "Routing", "Filtering"],
    accent: "blue",
    mark: "MTN",
    image: "../../public/images/Mtn project.jpg",
    link: "https://www.mtnsyr.com/home",
    github: "",
    featured: false,
  },
  {
    number: "04",
    category: "ERP & BOOKING",
    title: "Interfaces that Scale",
    description:
      "ERP-style and booking interfaces focused on reusable UI, responsive layouts, and API-driven data.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    accent: "violet",
    mark: "{ }",
    image: "",
    link: "",
    github: "",
    featured: false,
  },
];

type ProjectVisualProps = {
  project: Project;
};

function ProjectVisual({ project }: ProjectVisualProps) {
  return (
    <div className="project-visual">
      {project.image ? (
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
        />
      ) : (
        <>
          <div className="visual-grid" />
          <div className="visual-orb" />

          <div className="visual-mark">{project.mark}</div>

          <div className="visual-ui">
            <span />
            <span />
            <span />

            <div className="ui-chart">
              {Array.from({ length: 7 }, (_, index) => (
                <i key={index} />
              ))}
            </div>

            <div className="ui-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
        </>
      )}

      <div className="visual-top">
        <span className="mono">PROJECT / {project.number}</span>

        <span className="visual-arrow">
          <ArrowUpRight size={17} />
        </span>
      </div>

      <div className="visual-bottom mono">{project.category}</div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-shell section-pad projects-section"
    >
      <Reveal>
        <SectionTitle
          index="02"
          eyebrow="SELECTED WORK / THINGS I'VE BUILT"
          title="Work with a purpose."
          description="A look at the kinds of problems I enjoy solving — from operations tools to service platforms."
        />
      </Reveal>

      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal key={project.number} delay={index * 0.08}>
            <motion.article
              className={`project-card project-${project.accent}`}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectVisual project={project} />

              <div className="project-content">
                <div className="project-meta">
                  <span className="mono">
                    {project.number} — {project.category}
                  </span>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                      title="Live website"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {(project.link || project.github) && (
                  <div className="project-links">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Preview <ArrowUpRight size={15} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={15} />
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="project-footnote">
          <Layers3 size={17} />

          <p>
            More projects and implementation details are available on request.
          </p>

          <a
            href="https://github.com/Alhasan-Abd-Alrahman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
