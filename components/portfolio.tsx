import { InternalLink as Link } from '@/components/internal-link';
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Cpu,
  Network,
  Search,
  Workflow,
  Database,
  Layers,
  ScanEye,
  ChartNoAxesCombined,
} from 'lucide-react';
import { profile, type Project } from '@/lib/content';
export function SocialIcon({ kind }: { kind: 'github' | 'linkedin' }) {
  return kind === 'github' ? (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.31-3.76-1.31-.51-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.71 2.6 1.22 3.23.94.1-.72.39-1.22.7-1.5-2.48-.28-5.08-1.24-5.08-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.12 2.94.71.78 1.14 1.78 1.14 3 0 4.28-2.61 5.22-5.09 5.5.4.35.75 1.02.75 2.06V22c0 .3.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.7 2 2 2.67 2 3.5v17c0 .83.7 1.5 1.55 1.5h16.9c.86 0 1.55-.67 1.55-1.5v-17c0-.83-.69-1.5-1.55-1.5ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85h-2.94V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.53V9.2h2.82v1.3h.04c.39-.74 1.35-1.53 2.78-1.53 2.98 0 3.58 1.96 3.58 4.5v5.28Z" />
    </svg>
  );
}
export function SocialLinks() {
  return (
    <div className="social-links">
      <a href={profile.linkedin} target="_blank" rel="noreferrer">
        <SocialIcon kind="linkedin" />
        LinkedIn<span className="sr-only"> (opens in a new tab)</span>
      </a>
      <a href={profile.github} target="_blank" rel="noreferrer">
        <SocialIcon kind="github" />
        GitHub<span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <Link className="footer-name" href="/">
          Wenbin Liao<span>Computer Science · University of Michigan</span>
        </Link>
        <SocialLinks />
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Wenbin Liao</span>
        <span className="mono">ANN ARBOR, MICHIGAN</span>
        <Link href="/contact">
          Let’s connect <ArrowUpRight size={14} />
        </Link>
      </div>
    </footer>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  href,
  linkText,
}: {
  eyebrow: string;
  title: string;
  href?: string;
  linkText?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {href && (
        <Link className="text-link" href={href}>
          {linkText}
          <ArrowRight size={17} />
        </Link>
      )}
    </div>
  );
}
export function IBMCard() {
  return (
    <article className="ibm-card">
      <div className="ibm-wordmark" aria-label="IBM">
        IBM
      </div>
      <div className="ibm-card-content">
        <p className="eyebrow">SOFTWARE DEVELOPER INTERN</p>
        <h3>Building at IBM.</h3>
        <p>
          QA automation for watsonx Orchestrate, with Agent Evaluator / Bobathon
          project work.
        </p>
        <div className="inline-meta">
          <span>San Jose</span>
          <span>Summer 2026</span>
        </div>
      </div>
      <Link
        className="ibm-card-link"
        href="/resume"
        aria-label="Read my resume"
      >
        <ArrowUpRight size={26} />
      </Link>
    </article>
  );
}
export function ProjectVisual({ kind }: { kind: Project['kind'] }) {
  const visuals = {
    agent: {
      Icon: Network,
      top: 'AGENT EVALUATION',
      bottom: 'wxO / AGENT EVALUATOR',
    },
    embedded: {
      Icon: Cpu,
      top: 'SIGNAL → CONTROL',
      bottom: 'PPM · DIFFERENTIAL DRIVE',
    },
    web: {
      Icon: Braces,
      top: 'EVENT → INTERACTION',
      bottom: 'DOM · JAVASCRIPT',
    },
    search: {
      Icon: Search,
      top: 'INDEX → RANK → RETRIEVE',
      bottom: 'TF-IDF · PAGERANK',
    },
    distributed: {
      Icon: Workflow,
      top: 'MAP → SHUFFLE → REDUCE',
      bottom: 'MANAGER / WORKER',
    },
    retrieval: {
      Icon: Database,
      top: 'QUESTION → EVIDENCE',
      bottom: 'RETRIEVAL · GROUNDING',
    },
    fullstack: {
      Icon: Layers,
      top: 'CLIENT ↔ API ↔ DATA',
      bottom: 'REACT · FLASK · SQLITE',
    },
    architecture: {
      Icon: Cpu,
      top: 'FETCH → EXECUTE → WRITE BACK',
      bottom: 'PIPELINE · CACHE',
    },
    vision: {
      Icon: ScanEye,
      top: 'PATCHES → ATTENTION',
      bottom: 'CNN · VISION TRANSFORMER',
    },
    ml: {
      Icon: ScanEye,
      top: 'MEASURE → VALIDATE → SCORE',
      bottom: 'ICU DATA · AUROC',
    },
    trading: {
      Icon: ChartNoAxesCombined,
      top: 'ORDER → MATCH → UPDATE',
      bottom: 'PRIORITY QUEUES · HEAPS',
    },
  };
  const { Icon, top, bottom } = visuals[kind];
  return (
    <div className={`project-visual visual-${kind}`} aria-hidden="true">
      <span className="visual-top mono">{top}</span>
      <div className="visual-path">
        <span />
        <i />
        <div className="visual-core">
          <Icon size={37} strokeWidth={1.25} />
        </div>
        <i />
        <span />
      </div>
      <div className="visual-bottom mono">{bottom}</div>
    </div>
  );
}
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link
        className="project-visual-link"
        tabIndex={-1}
        aria-hidden="true"
        href={`/projects/${project.slug}`}
      >
        <ProjectVisual kind={project.kind} />
      </Link>
      <div className="project-card-body">
        <p className="eyebrow">{project.category}</p>
        <div className="project-title-row">
          <h3>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>
          <ArrowUpRight size={22} aria-hidden="true" />
        </div>
        <p>{project.description}</p>
        <ul className="tags" aria-label={`${project.title} technologies`}>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="card-bottom">
          <Link className="text-link" href={`/projects/${project.slug}`}>
            View project <ArrowRight size={16} />
          </Link>
          {project.pending ? (
            <span className="pending-label">Case study pending</span>
          ) : (
            <div className="project-external-links">
              {project.source ? (
                <a
                  className="source-link"
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon kind="github" /> Source
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <span className="source-unavailable">
                  {project.sourceStatus || 'Source link pending'}
                </span>
              )}
              {project.presentation && (
                <a
                  className="source-link"
                  href={project.presentation.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Presentation <ArrowUpRight size={15} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
export function PageHeading({
  number,
  kicker,
  title,
  description,
}: {
  number: string;
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-heading">
      <p className="eyebrow">
        <span>{number}</span> / {kicker}
      </p>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
export function Placeholder({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="placeholder">
      <span className="pending-label">CONTENT PENDING</span>
      <h3>{title}</h3>
      <div>{children}</div>
    </aside>
  );
}
