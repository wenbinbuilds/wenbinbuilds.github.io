import type { Metadata } from 'next';
import { Cpu, Layers, Terminal } from 'lucide-react';
import { PageHeading, SectionHeading } from '@/components/portfolio';
import { profile } from '@/lib/content';
export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Wenbin Liao, a University of Michigan Computer Science student with a Mathematics minor, interested in systems, AI engineering, and developer tools.',
  openGraph: {
    title: 'About Wenbin Liao',
    description:
      'Computer Science at the University of Michigan. Education, technical interests, and skills.',
  },
};
const skillGroups = [
  [
    'LANGUAGES',
    ['Python', 'C / C++', 'TypeScript / JavaScript', 'Java', 'SQL'],
  ],
  [
    'APPLICATIONS & AI',
    ['React', 'FastAPI', 'Flask', 'watsonx.ai', 'PyTorch', 'RAG'],
  ],
  [
    'SYSTEMS & ENGINEERING',
    ['Linux / Unix', 'Git', 'MapReduce', 'TCP / UDP', 'SQLite', 'Cypress'],
  ],
] as const;
export default function About() {
  return (
    <main id="main-content" className="page-shell container">
      <PageHeading
        number="01"
        kicker="ABOUT"
        title="Curious about what’s underneath."
        description="I’m Wenbin Liao, a Computer Science student at the University of Michigan with a minor in Mathematics."
      />
      <div className="about-layout">
        <div className="prose">
          <h2>From the interface to the system.</h2>
          <p>
            I’m interested in how software fits together: the systems underneath
            an application, the intelligence behind it, and the tools that make
            it useful.
          </p>
          <p>
            At IBM, I worked on QA automation and built tooling to inspect
            complex agent systems. Through Michigan’s Multidisciplinary Design
            Program, I work on retrieval systems that connect questions to
            relevant enterprise knowledge.
          </p>
          <p>
            I’m drawn to engineering work that combines clear interfaces,
            careful evaluation, and a solid understanding of the system behind
            them.
          </p>
        </div>
        <article className="education-card">
          <div className="education-mark" aria-hidden="true">
            M
          </div>
          <p className="eyebrow">EDUCATION</p>
          <h2>University of Michigan</h2>
          <p>
            B.S.E. in Computer Science
            <br />
            Minor in Mathematics
          </p>
          <div className="inline-meta">
            <span>Expected graduation · {profile.graduation}</span>
          </div>
          {profile.graduationPending && (
            <div className="graduation-note">
              <span className="pending-label">MONTH PENDING CONFIRMATION</span>
              <p>
                The profile uses May as requested; recent résumés list April
                2028.
              </p>
            </div>
          )}
        </article>
      </div>
      <section className="section">
        <SectionHeading
          eyebrow="TECHNICAL INTERESTS"
          title="What I’m drawn to."
        />
        <div className="interest-grid">
          <article className="interest-card">
            <Cpu size={24} />
            <h3>Systems</h3>
            <p>
              Concurrency, distributed processing, and the relationship between
              software and hardware.
            </p>
          </article>
          <article className="interest-card">
            <Layers size={24} />
            <h3>AI engineering</h3>
            <p>
              Useful agent workflows, grounded retrieval, and evaluation that
              makes failures easier to understand.
            </p>
          </article>
          <article className="interest-card">
            <Terminal size={24} />
            <h3>Full-stack tools</h3>
            <p>
              Connecting APIs and interfaces to make complex engineering tasks
              easier to work with.
            </p>
          </article>
        </div>
      </section>
      <section className="skills-section">
        <div>
          <h2>Tools I work with.</h2>
          {skillGroups.map(([title, skills]) => (
            <div className="skill-group" key={title}>
              <h3>{title}</h3>
              <ul className="tags">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="coursework-panel">
          <h2>Relevant coursework</h2>
          <ul className="coursework-list">
            <li>Data Structures and Algorithms</li>
            <li>Foundations of Computer Science</li>
            <li>Web Systems</li>
            <li>Introduction to Computer Organization</li>
            <li>Applied Agentic Software Engineering</li>
            <li>Introduction to Machine Learning</li>
          </ul>
          <p className="subtle">
            Course titles as listed on the current software engineering résumé.
          </p>
        </div>
      </section>
    </main>
  );
}
