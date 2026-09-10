import type { Metadata } from 'next';
import { ArrowUpRight, FileText, Download } from 'lucide-react';
import { PageHeading } from '@/components/portfolio';
import { profile } from '@/lib/content';
export const metadata: Metadata = {
  title: 'Resume',
  description:
    'View or download Wenbin Liao’s current résumé, with private contact and personal details removed.',
  openGraph: {
    title: 'Resume — Wenbin Liao',
    description:
      'Wenbin Liao’s education, experience, and engineering projects.',
  },
};
export default function Resume() {
  return (
    <main id="main-content" className="page-shell container">
      <PageHeading
        number="04"
        kicker="RESUME"
        title="The essentials, in one place."
        description="Education, experience, and engineering projects. View the résumé below or take a copy with you."
      />
      {profile.resumeUrl ? (
        <>
          <div className="resume-toolbar">
            <div>
              <p>Wenbin Liao · Résumé</p>
              <span className="subtle">Public copy · PDF</span>
            </div>
            <div className="actions">
              <a
                className="button secondary"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open PDF <ArrowUpRight size={17} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a className="button primary" href={profile.resumeUrl} download>
                <Download size={17} /> Download résumé
              </a>
            </div>
          </div>
          {profile.graduationPending && (
            <p className="resume-date-note">
              <span className="pending-label">MONTH PENDING CONFIRMATION</span>{' '}
              Recent source résumés say April 2028; this profile was requested
              with May 2028. The PDF labels the month as pending.
            </p>
          )}
          <iframe
            className="resume-document"
            src={profile.resumeUrl}
            title="Wenbin Liao résumé"
          >
            <a href={profile.resumeUrl}>Open résumé PDF</a>
          </iframe>
          <p className="resume-source-note">
            Based on the latest Library résumé reviewed, dated September 9,
            2026. Personal contact and other private details have been removed;
            the professional email is retained.
          </p>
        </>
      ) : (
        <div className="resume-panel">
          <section className="resume-primary">
            <FileText size={40} strokeWidth={1.25} />
            <div>
              <span className="pending-label">RESUME PLACEHOLDER</span>
            </div>
            <h2>Resume available on request.</h2>
            <p>
              A current résumé PDF has not yet been added. Connect with me on
              LinkedIn to request a copy.
            </p>
            <a
              className="button primary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Request on LinkedIn <ArrowUpRight size={18} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </section>
          <aside className="resume-context">
            <h3>At a glance</h3>
            <dl className="summary-list">
              <dt>EDUCATION</dt>
              <dd>
                University of Michigan
                <br />
                Computer Science
              </dd>
              <dt>EXPECTED GRADUATION</dt>
              <dd>{profile.graduation}</dd>
              <dt>EXPERIENCE</dt>
              <dd>
                IBM · Software Developer Intern
                <br />
                Summer 2026 · San Jose
              </dd>
              <dt>INTERESTS</dt>
              <dd>
                Systems · AI engineering
                <br />
                Full-stack developer tools
              </dd>
            </dl>
          </aside>
        </div>
      )}
    </main>
  );
}
