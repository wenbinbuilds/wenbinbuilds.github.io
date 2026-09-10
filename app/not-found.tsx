import { InternalLink as Link } from '@/components/internal-link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() {
  return (
    <main id="main-content" className="not-found container">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>This path ends here.</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <Link className="button primary" href="/">
        <ArrowLeft size={17} /> Back to home
      </Link>
    </main>
  );
}
