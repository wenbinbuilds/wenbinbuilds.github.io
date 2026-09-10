import type { Metadata } from 'next';
import { InternalLink as Link } from '@/components/internal-link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react';
import {
  PageHeading,
  ProjectVisual,
  Placeholder,
  SocialIcon,
} from '@/components/portfolio';
import { projects } from '@/lib/content';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) return { title: 'Project not found' };
  return {
    title: p.title,
    description: p.description,
    openGraph: {
      title: `${p.title} — Wenbin Liao`,
      description: p.description,
    },
    twitter: {
      card: 'summary',
      title: `${p.title} — Wenbin Liao`,
      description: p.description,
    },
  };
}
export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <main id="main-content" className="page-shell container">
      <Link className="breadcrumb" href="/projects">
        <ArrowLeft size={16} /> All projects
      </Link>
      <div className="project-detail-heading">
        <PageHeading
          number="PROJECT"
          kicker={p.category}
          title={p.title}
          description={p.description}
        />
      </div>
      <div className="detail-hero">
        <ProjectVisual kind={p.kind} />
        <aside className="project-facts" aria-label="Project information">
          <dl>
            <dt>PROJECT AREA</dt>
            <dd>
              {p.category
                .split(' / ')[0]
                .toLowerCase()
                .replace(/^./, (c) => c.toUpperCase())}
            </dd>
            <dt>TECHNOLOGIES</dt>
            <dd>
              <ul className="tags">
                {p.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </dd>
            <dt>SOURCE</dt>
            <dd>
              {p.source ? (
                <a
                  className="text-link"
                  href={p.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon kind="github" /> View on GitHub{' '}
                  <ArrowUpRight size={16} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <>
                  <p>{p.sourceStatus || 'Source link not provided'}</p>
                  <span className="pending-label">
                    Public source / demo pending
                  </span>
                </>
              )}
            </dd>
            {p.presentation && (
              <>
                <dt>PRESENTATION</dt>
                <dd>
                  <a
                    className="text-link"
                    href={p.presentation.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.presentation.label} <ArrowUpRight size={16} />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </dd>
              </>
            )}
          </dl>
        </aside>
      </div>
      {p.kind === 'agent' && (
        <ol className="evaluation-flow" aria-label="Agent evaluation workflow">
          <li>
            <span className="mono">01 / DISCOVER</span>
            <strong>Traverse the graph</strong>
            <p>Agents · tools · collaborators</p>
          </li>
          <li>
            <span className="mono">02 / EVALUATE</span>
            <strong>Analyze in parallel</strong>
            <p>Per-node findings · live progress</p>
          </li>
          <li>
            <span className="mono">03 / SYNTHESIZE</span>
            <strong>Understand the system</strong>
            <p>Health scores · recommendations</p>
          </li>
        </ol>
      )}
      <div className="detail-content">
        <div>
          <section>
            <h2>The problem</h2>
            <p>{p.problem}</p>
          </section>
          <section>
            <h2>The implementation</h2>
            <p>{p.solution}</p>
            <ul className="feature-list">
              {p.features.map((feature) => (
                <li key={feature.title}>
                  <strong>{feature.title}</strong>
                  {feature.text}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <aside>
          <section>
            <h2>Project context</h2>
            <p>{p.evidence}</p>
            {p.kind === 'agent' && (
              <Link className="text-link" href="/experience">
                IBM internship <ArrowRight size={16} />
              </Link>
            )}
            {p.kind === 'retrieval' && (
              <Link className="text-link" href="/experience#mdp">
                Walbridge MDP experience <ArrowRight size={16} />
              </Link>
            )}
          </section>
          {p.contextPending && (
            <section>
              <Placeholder title="Additional details pending">
                <p>{p.contextPending}</p>
              </Placeholder>
            </section>
          )}
          {p.kind === 'embedded' && (
            <section>
              <a
                className="text-link"
                href="https://github.com/Wizice325/DormDash/blob/main/src/main.cpp"
                target="_blank"
                rel="noreferrer"
              >
                Read the firmware <ArrowUpRight size={15} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </section>
          )}
        </aside>
      </div>
      <div className="detail-links">
        <Link className="text-link" href="/projects">
          <ArrowLeft size={16} /> Back to projects
        </Link>
        <Link className="text-link" href="/contact">
          Let’s talk engineering <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
