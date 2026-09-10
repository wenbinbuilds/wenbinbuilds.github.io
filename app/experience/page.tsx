import type { Metadata } from 'next';
import { InternalLink as Link } from '@/components/internal-link';
import { ArrowRight } from 'lucide-react';
import { PageHeading } from '@/components/portfolio';
export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Wenbin Liao’s experience at IBM, Walbridge’s Multidisciplinary Design Program, and Quincy College.',
  openGraph: {
    title: 'Experience — Wenbin Liao',
    description:
      'Software development, AI research, and technical problem-solving.',
  },
};
const roles = [
  {
    id: 'ibm',
    date: 'May – August 2026',
    location: 'San Jose, CA',
    organization: 'IBM SILICON VALLEY LAB',
    title: 'Software Developer Intern',
    intro:
      'Full-stack developer tooling and QA automation for watsonx Orchestrate.',
    points: [
      [
        'Agent Evaluator / Bobathon',
        'Built a Python/FastAPI and React tool that recursively inspects agent, tool, and collaborator hierarchies, producing health scores and actionable recommendations.',
      ],
      [
        'Evaluation pipeline',
        'Implemented parallel, two-pass analysis with watsonx.ai, streaming per-node findings and progress to the interface. Added run history, exports, fuzzy search, and caching.',
      ],
      [
        'QA and debugging',
        'Automated end-to-end regression tests, reproduced product defects, reviewed logs and test output, and validated fixes. Used IBM Bob with manual review of generated code and recommendations.',
      ],
    ],
    href: '/projects/wxo-agent-evaluator',
    link: 'Explore Agent Evaluator',
  },
  {
    id: 'mdp',
    date: 'January 2026 – Present',
    location: 'Ann Arbor, MI',
    organization: 'WALBRIDGE · MULTIDISCIPLINARY DESIGN PROGRAM',
    title: 'Undergraduate AI Researcher',
    intro:
      'Enterprise knowledge retrieval and evaluation in an industry-sponsored engineering project.',
    points: [
      [
        'Retrieval system',
        'Built a workflow for natural-language access to historical lessons, root causes, impacts, and project risks while preserving role-based access boundaries.',
      ],
      [
        'Modular architecture',
        'Separated orchestration, query generation, retrieval, filtering, and summarization into independently testable stages.',
      ],
      [
        'Evaluation and collaboration',
        'Evaluated relevance, accuracy, completeness, and groundedness. Incorporated feedback from industry stakeholders and faculty mentors and documented design decisions and failure modes.',
      ],
    ],
    href: '/projects/lessons-learned-agent',
    link: 'Explore the retrieval agent',
  },
  {
    id: 'quincy',
    date: 'July – August 2023',
    location: 'Quincy, MA',
    organization: 'QUINCY COLLEGE',
    title: 'Information Technology Intern',
    intro: 'Technical support and data operations across campus systems.',
    points: [
      [
        'Troubleshooting',
        'Diagnosed hardware, software, network connectivity, authentication, and account issues for campus users.',
      ],
      [
        'Data operations',
        'Used SQL in the Jenzabar information system for schema-aware queries, data cleaning, and multi-table joins.',
      ],
    ],
    href: null,
    link: null,
  },
];
export default function Experience() {
  return (
    <main id="main-content" className="page-shell container">
      <PageHeading
        number="02"
        kicker="EXPERIENCE"
        title="Engineering in practice."
        description="From enterprise AI tools to retrieval systems: experience building, testing, and understanding software."
      />
      <div className="experience-timeline">
        {roles.map((role) => (
          <div className="timeline" id={role.id} key={role.id}>
            <div className="timeline-date">
              {role.date}
              <span>{role.location}</span>
            </div>
            <article className="experience-detail">
              <div className="experience-title">
                <div>
                  <p className="eyebrow">{role.organization}</p>
                  <h2>{role.title}</h2>
                </div>
                {role.id === 'ibm' && <span className="ibm-small">IBM</span>}
              </div>
              <p>{role.intro}</p>
              <ul className="experience-points">
                {role.points.map(([heading, text]) => (
                  <li key={heading}>
                    <strong>{heading}:</strong> {text}
                  </li>
                ))}
              </ul>
              {role.href && (
                <Link className="text-link" href={role.href}>
                  {role.link}
                  <ArrowRight size={17} />
                </Link>
              )}
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}
