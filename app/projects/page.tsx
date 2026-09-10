import type { Metadata } from 'next';
import {
  PageHeading,
  ProjectCard,
  SectionHeading,
} from '@/components/portfolio';
import { projects } from '@/lib/content';
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
      <section
        aria-label="Selected engineering projects"
        className="project-grid all-projects"
      >
        {projects
          .filter((project) => !project.source)
          .map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
      </section>
      <section className="section">
        <SectionHeading eyebrow="FROM MY GITHUB" title="More experiments." />
        <div className="project-grid">
          {projects
            .filter((project) => project.source)
            .map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
      </section>
      <p className="projects-footnote">
        Public source is linked where available. Internal project materials
        remain private; unverified source and demo links are marked pending.
      </p>
    </main>
  );
}
