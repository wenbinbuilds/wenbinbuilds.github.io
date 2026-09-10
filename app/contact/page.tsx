import type { Metadata } from 'next';
import { InternalLink as Link } from '@/components/internal-link';
import { ArrowUpRight, ArrowRight, Mail } from 'lucide-react';
import { PageHeading, SocialIcon } from '@/components/portfolio';
import { profile } from '@/lib/content';
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Connect with Wenbin Liao on LinkedIn or GitHub to discuss software engineering, systems, AI engineering, and developer tools.',
  openGraph: {
    title: 'Contact Wenbin Liao',
    description: 'Connect on LinkedIn and GitHub.',
  },
};
export default function Contact() {
  return (
    <main id="main-content" className="page-shell container">
      <PageHeading
        number="05"
        kicker="CONTACT"
        title="Good work starts with a conversation."
        description="Let’s connect about software engineering opportunities, technical projects, or something interesting you’re building."
      />
      <div className="contact-layout">
        <div className="contact-links">
          <a
            className="contact-card"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-symbol">
              <SocialIcon kind="linkedin" />
            </span>
            <div>
              <h2>LinkedIn</h2>
              <p>linkedin.com/in/wenbinliao</p>
            </div>
            <ArrowUpRight size={22} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            className="contact-card"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-symbol">
              <SocialIcon kind="github" />
            </span>
            <div>
              <h2>GitHub</h2>
              <p>github.com/wizice325</p>
            </div>
            <ArrowUpRight size={22} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          {profile.email ? (
            <a className="contact-card" href={`mailto:${profile.email}`}>
              <span className="contact-symbol">
                <Mail size={20} />
              </span>
              <div>
                <h2>Email</h2>
                <p>{profile.email}</p>
              </div>
              <ArrowUpRight size={22} />
            </a>
          ) : (
            <div className="contact-card email-pending">
              <span className="contact-symbol">
                <Mail size={20} />
              </span>
              <div>
                <h2>Email</h2>
                <p>
                  Professional email pending verification.
                  <br />
                  Please use LinkedIn for now.
                </p>
                <span className="pending-label">EMAIL PLACEHOLDER</span>
              </div>
            </div>
          )}
        </div>
        <aside className="contact-aside">
          <h2>Let’s talk about building.</h2>
          <p>
            I’m a University of Michigan Computer Science student graduating in
            May 2028, interested in software that connects useful interfaces
            with thoughtful engineering.
          </p>
          <ul className="tags">
            <li>Software engineering</li>
            <li>Systems</li>
            <li>AI engineering</li>
            <li>Full-stack tools</li>
          </ul>
          <Link className="text-link" href="/projects">
            Explore my work <ArrowRight size={17} />
          </Link>
        </aside>
      </div>
    </main>
  );
}
