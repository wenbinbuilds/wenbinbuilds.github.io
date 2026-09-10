import type { ComponentProps } from 'react';

/**
 * Uses native navigation for portfolio routes. This keeps navigation reliable
 * when a host does not support the framework's client-side RSC requests.
 */
export function InternalLink({ href, children, ...props }: ComponentProps<'a'>) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
