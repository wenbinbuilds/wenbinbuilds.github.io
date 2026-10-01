'use client';
import { InternalLink as Link } from '@/components/internal-link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
const navigation = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/projects', 'Projects'],
  ['/resume', 'Resume'],
  ['/contact', 'Contact'],
];
export function Header() {
  const pathname = usePathname();
  return <Navigation key={pathname} pathname={pathname} />;
}
function Navigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Wenbin Liao home">
          <span className="brand-mark" aria-hidden="true">
            w<span>.</span>
          </span>
          <span>
            Wenbin Liao<span className="brand-subtitle">SOFTWARE ENGINEER</span>
          </span>
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-controls="main-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? 'navigation is-open' : 'navigation'}
        >
          {navigation.map(([href, label]) => {
            const active =
              href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`${active ? 'active ' : ''}${href === '/contact' ? 'nav-contact' : ''}`}
                onClick={() => setOpen(false)}
              >
                {label}
                {href === '/contact' && <ArrowUpRight size={15} />}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
