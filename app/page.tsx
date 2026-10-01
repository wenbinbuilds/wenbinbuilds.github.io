import { InternalLink as Link } from '@/components/internal-link';
import {
  ArrowUpRight,
  FileText,
} from 'lucide-react';
import Image from 'next/image';
export default function Home() {
  return (
    <main id="main-content">
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            UNIVERSITY OF MICHIGAN · COMPUTER SCIENCE
          </p>
          <p className="hero-intro">Hi, I’m Wenbin Liao.</p>
          <h1>
            Software engineer
            <br />building useful tools.
          </h1>
          <p className="hero-description">
            I build full-stack and AI systems, with an interest in reliable developer tools and thoughtful engineering.
          </p>
          <div className="actions">
            <Link className="button primary" href="/projects">
              View projects <ArrowUpRight size={18} />
            </Link>
            <Link className="button secondary" href="/about">
              About me
            </Link>
            <Link className="button secondary" href="/resume">
              <FileText size={17} /> Resume
            </Link>
          </div>
        </div>
        <div className="home-portrait">
          <Image src="/wenbin-liao-headshot.jpg" alt="Wenbin Liao" width={2733} height={3643} priority />
        </div>
      </section>
    </main>
  );
}
