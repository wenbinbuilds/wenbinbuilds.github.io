import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight,
  Terminal,
  Layers,
  Cpu,
  FileText,
} from 'lucide-react';
import {
  SocialLinks,
  SectionHeading,
  ProjectCard,
  IBMCard,
} from '@/components/portfolio';
import { projects, profile } from '@/lib/content';
export default function Home() {
  return (
    <main id="main-content">
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> UNIVERSITY OF MICHIGAN · COMPUTER
            SCIENCE
          </p>
          <p className="hero-intro">Hi, I’m Wenbin Liao.</p>
          <h1>
            Thoughtful code.
            <br />
            <span>Useful systems.</span>
          </h1>
          <p className="hero-description">
            Computer Science student and software engineer, exploring systems,
            AI engineering, and full-stack developer tools.
          </p>
          <div className="actions">
            <Link className="button primary" href="/projects">
              Explore projects <ArrowUpRight size={18} />
            </Link>
            <Link className="button secondary" href="/experience">
              Experience <ArrowRight size={17} />
            </Link>
            <Link className="text-link resume-link" href="/resume">
              <FileText size={17} /> Resume
            </Link>
          </div>
          <div className="hero-socials">
            <SocialLinks />
            <span className="social-divider" />
            <span className="subtle">
              Graduating {profile.graduation}
              {profile.graduationPending ? ' · month to confirm' : ''}
            </span>
          </div>
        </div>
        <div
          className="system-visual"
          aria-label="Areas of interest: full-stack tools, AI engineering, and systems"
        >
          <div className="diagram-heading">
            <span className="mono">ENGINEERING / AREAS OF INTEREST</span>
            <span className="diagram-cross">+</span>
          </div>
          <div className="diagram-body">
            <div className="diagram-axis" />
            <div className="interest-node node-interface">
              <Terminal size={22} />
              <div>
                <span className="mono">01 / INTERFACE</span>
                <strong>Full-stack tools</strong>
              </div>
              <span className="node-port" />
            </div>
            <div className="interest-node node-ai">
              <Layers size={22} />
              <div>
                <span className="mono">02 / INTELLIGENCE</span>
                <strong>AI engineering</strong>
              </div>
              <span className="node-port" />
            </div>
            <div className="interest-node node-systems">
              <Cpu size={22} />
              <div>
                <span className="mono">03 / FOUNDATION</span>
                <strong>Systems</strong>
              </div>
              <span className="node-port" />
            </div>
          </div>
          <div className="diagram-footer">
            <span className="mono">FROM INTERFACE TO INFRASTRUCTURE</span>
            <span aria-hidden="true">↗</span>
          </div>
        </div>
      </section>
      <div className="credential-strip">
        <div className="container">
          <span>
            <span className="strip-label">EDUCATION</span> University of
            Michigan
          </span>
          <span>
            <span className="strip-label">EXPERIENCE</span> IBM · Summer 2026
          </span>
          <span>
            <span className="strip-label">FOCUS</span> Software engineering
          </span>
        </div>
      </div>
      <section className="section container">
        <SectionHeading
          eyebrow="01 / EXPERIENCE"
          title="A summer at IBM."
          href="/experience"
          linkText="View experience"
        />
        <IBMCard />
      </section>
      <section className="section container projects-section">
        <SectionHeading
          eyebrow="02 / SELECTED WORK"
          title="Ideas, in implementation."
          href="/projects"
          linkText="All projects"
        />
        <div className="project-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="home-contact container">
        <div>
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>Have something in mind?</h2>
          <p>
            I’d welcome a conversation about software, systems, and engineering
            opportunities.
          </p>
        </div>
        <Link className="button primary" href="/contact">
          Get in touch <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
}
