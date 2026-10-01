import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/portfolio';
import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://wenbin-liao-portfolio.blueprintvictorl.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Wenbin Liao — Software Engineer',
    template: '%s | Wenbin Liao',
  },
  description: `Wenbin Liao, University of Michigan Computer Science student graduating in December 2027. Software engineering, systems, AI engineering, and full-stack developer tools.`,
  authors: [{ name: 'Wenbin Liao' }],
  openGraph: {
    title: 'Wenbin Liao — Software Engineer',
    description:
      'Computer Science at the University of Michigan. Explore my experience and projects across software, systems, and developer tools.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Wenbin Liao',
  },
  twitter: {
    card: 'summary',
    title: 'Wenbin Liao — Software Engineer',
    description:
      'Computer Science at the University of Michigan. Systems, AI engineering, and full-stack tools.',
  },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
