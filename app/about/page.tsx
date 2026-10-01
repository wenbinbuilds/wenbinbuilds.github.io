import type { Metadata } from 'next';
import Image from 'next/image';
import { Cpu, Layers, Terminal } from 'lucide-react';
import { PageHeading, SectionHeading } from '@/components/portfolio';
import { profile } from '@/lib/content';
export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Wenbin Liao, a University of Michigan Computer Science student with a Mathematics minor, focused on agentic AI, systems, and practical developer tools.',
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
        title="About me"
        description="Computer Science student at the University of Michigan, with a minor in Mathematics."
      />
      <div className="about-layout">
        <article className="education-card">
          <Image
            className="portrait"
            src="/wenbin-liao-headshot.jpg"
            alt="Wenbin Liao in a suit and tie"
            width={2733}
            height={3643}
            priority
          />
          <p className="eyebrow">EDUCATION</p>
          <h2>University of Michigan</h2>
          <p>B.S.E. in Computer Science<br />Minor in Mathematics</p>
          <div className="inline-meta"><span>Expected graduation · {profile.graduation}</span></div>
        </article>
        <div className="prose">
          <h2>What I work on</h2>
          <p>
            I like working on agentic AI: systems that can reason through a
            task, use tools and relevant knowledge, and give people useful
            results. I’m especially interested in making those systems clear,
            grounded, and dependable—not just impressive in a demo.
          </p>
          <p>
            At IBM, I worked on QA automation and built tooling to inspect
            complex agent systems. Through Michigan’s Multidisciplinary Design
            Program, I work on retrieval systems that help connect questions
            with relevant enterprise knowledge and supporting evidence.
          </p>
          <p>
            I enjoy the full engineering path behind an AI product: designing
            the workflow, connecting models to APIs and data, evaluating what
            goes wrong, and building an interface that makes the result easy to
            understand and act on.
          </p>
        </div>
      </div>
      <section className="section">
        <SectionHeading
          eyebrow="TECHNICAL INTERESTS"
          title="Areas of interest"
        />
        <div className="interest-grid">
          <article className="interest-card">
            <Cpu size={24} />
            <h3>Systems</h3>
            <p>
              The foundations that keep software reliable and fast: how programs
              run concurrently, how services communicate across machines, and
              how hardware and memory shape performance.
            </p>
          </article>
          <article className="interest-card">
            <Layers size={24} />
            <h3>Agentic AI engineering</h3>
            <p>
              Building AI agents that break work into steps, call tools, and
              retrieve the right context. I care about grounding responses in
              evidence, evaluating behavior, and making failures visible so the
              system can improve.
            </p>
          </article>
          <article className="interest-card">
            <Terminal size={24} />
            <h3>Full-stack tools</h3>
            <p>
              Turning complex workflows into useful products by connecting a
              clear interface with APIs, backend services, and data. The goal is
              to give people control and make technical work easier to follow.
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
