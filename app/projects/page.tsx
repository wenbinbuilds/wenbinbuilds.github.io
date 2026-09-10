import type { Metadata } from 'next';
import {
  PageHeading,
  ProjectCard,
  SectionHeading,
} from '@/components/portfolio';
import { projects } from '@/lib/content';

const projectGroups = [
  {
    title: 'AI & Machine Learning',
    eyebrow: 'MODELS, AGENTS & EVALUATION',
    description: 'Applied AI work spanning model training, retrieval, and agent evaluation.',
  },
  {
    title: 'Python & Full-Stack',
    eyebrow: 'SERVICES, DATA & INTERFACES',
    description: 'Backend systems and web applications built around data, APIs, and user workflows.',
  },
  {
    title: 'C++ & Systems',
    eyebrow: 'PERFORMANCE, HARDWARE & ARCHITECTURE',
    description: 'Low-level projects that explore control, performance, and system behavior.',
  },
] as const;
export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore Wenbin Liao’s AI tools, distributed systems, full-stack applications, processor simulations, and machine learning projects.',
  openGraph: {
    title: 'Projects — Wenbin Liao',
    description:
      'Selected projects in AI tooling, distributed systems, full-stack development, and computer architecture.',
  },
};
export default function Projects() {
  return (
    <main id="main-content" className="page-shell container">
      <PageHeading
        number="03"
        kicker="PROJECTS"
        title="Different layers. Same curiosity."
        description="From agent tooling and distributed services to the processor underneath. Selected internship, research, and course projects."
      />
      {projectGroups.map((group) => (
        <section className="section project-group" key={group.title}>
          <SectionHeading eyebrow={group.eyebrow} title={group.title} />
          <p className="project-group-description">{group.description}</p>
          <div className="project-grid">
            {projects
              .filter((project) => project.group === group.title)
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
        </section>
      ))}
      <p className="projects-footnote">
        Public source is linked where available. Internal project materials
        remain private; unverified source and demo links are marked pending.
      </p>
    </main>
  );
}
