import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import '~/app/styles/globals.css';

import Footer from '~/components/footer';
import { JsonLd } from '~/components/json-ld';
import Navigation from '~/components/navigation';
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from '~/lib/constants';
import { generateMetadata as fetchMetadata } from '~/lib/queries';

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export async function generateMetadata(): Promise<Metadata> {
  const meta = await fetchMetadata('home');

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: meta.title || SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description: meta.description,
    keywords: ['software developer', 'web developer', 'portfolio', 'blog', 'programming'],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: {
      email: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: SITE_URL,
      siteName: SITE_NAME,
      title: meta.title || SITE_NAME,
      description: meta.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title || SITE_NAME,
      description: meta.description,
      creator: TWITTER_HANDLE,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: SITE_URL,
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f0eee7' },
    { media: '(prefers-color-scheme: dark)', color: '#171611' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <JsonLd type="website" />
        <JsonLd type="person" />
      </head>
      <body className={`${ibmPlexMono.variable} antialiased`}>
        <main className="md:max-w-screen-lg mx-auto flex flex-col md:flex-row md:justify-between py-10 md:py-20 px-4 md:px-0">
          <ThemeProvider>
            {children}
            <Navigation />
          </ThemeProvider>
        </main>

        <Footer />
      </body>
    </html>
  );
}
