import type { Metadata } from 'next';
import { Download } from 'lucide-react';
import { PageHeading } from '@/components/portfolio';
import { profile } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Wenbin Liao’s education, experience, projects, and technical skills.',
};

const roles = [
  { date: 'May – August 2026', location: 'San Jose, CA', organization: 'IBM Silicon Valley Lab', title: 'Software Developer Intern', bullets: ['Built a Python/FastAPI and React tool that recursively inspects agent, tool, and collaborator hierarchies, producing health scores and actionable recommendations.', 'Implemented parallel, two-pass analysis with watsonx.ai, streaming per-node findings and progress to the interface; added run history, exports, fuzzy search, and caching.', 'Automated end-to-end regression tests, reproduced product defects, reviewed logs and test output, and validated fixes for watsonx Orchestrate.'] },
  { date: 'January 2026 – Present', location: 'Ann Arbor, MI', organization: 'Walbridge · Multidisciplinary Design Program', title: 'Undergraduate AI Researcher', bullets: ['Built a retrieval workflow for natural-language access to historical lessons, root causes, impacts, and project risks while preserving role-based access boundaries.', 'Separated orchestration, query generation, retrieval, filtering, and summarization into independently testable stages.', 'Evaluated relevance, accuracy, completeness, and groundedness; incorporated feedback from industry stakeholders and faculty mentors.'] },
  { date: 'July – August 2023', location: 'Quincy, MA', organization: 'Quincy College', title: 'Information Technology Intern', bullets: ['Diagnosed hardware, software, network connectivity, authentication, and account issues for campus users.', 'Used SQL in the Jenzabar information system for schema-aware queries, data cleaning, and multi-table joins.'] },
];

export default function Resume() {
  return (
    <main id="main-content" className="page-shell container">
      <PageHeading number="02" kicker="RESUME" title="Resume" description="Education, experience, selected work, and technical skills." />
      <div className="resume-toolbar"><p>Wenbin Liao</p><a className="button primary" href={profile.resumeUrl ?? '#'} download><Download size={17} /> Download PDF</a></div>
      <div className="resume-content">
        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-entry"><div><h3>University of Michigan</h3><p>B.S.E. in Computer Science, Minor in Mathematics</p></div><p>Ann Arbor, MI<br />Expected {profile.graduation}</p></div>
          <p className="resume-coursework"><strong>Relevant coursework:</strong> Data Structures and Algorithms, Web Systems, Computer Organization, Applied Agentic Software Engineering, Introduction to Machine Learning.</p>
        </section>
        <section className="resume-section"><h2>Experience</h2>{roles.map((role) => <article className="resume-role" key={role.title}><div className="resume-entry"><div><h3>{role.title}</h3><p>{role.organization}</p></div><p>{role.location}<br />{role.date}</p></div><ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</section>
        <section className="resume-section"><h2>Selected projects</h2><div className="resume-projects"><p><strong>wxO Agent Evaluator</strong> · Python, FastAPI, React, watsonx.ai — Internal full-stack tool for recursively evaluating agent hierarchies.</p><p><strong>Search Engine</strong> · Python, MapReduce, Flask, PageRank — Distributed search platform with TF-IDF indexing and concurrent retrieval.</p><p><strong>Clinical Mortality Prediction</strong> · Python, scikit-learn — Reproducible ICU mortality prediction workflow with AUROC-focused evaluation.</p></div></section>
        <section className="resume-section"><h2>Skills</h2><p><strong>Languages:</strong> Python, C/C++, TypeScript, JavaScript, Java, SQL</p><p><strong>Tools:</strong> React, FastAPI, Flask, PyTorch, RAG, Linux, Git, SQLite, MapReduce</p></section>
      </div>
    </main>
  );
}
