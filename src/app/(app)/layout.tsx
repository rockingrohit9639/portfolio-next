import configPromise from '@payload-config';
import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { getPayload } from 'payload';

import '~/app/styles/globals.css';

import Footer from '~/components/footer';
import Navigation from '~/components/navigation';

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise });
  const meta = await payload.findGlobal({
    slug: 'meta',
    select: { home: true },
  });

  return {
    title: meta.home.title,
    description: meta.home.description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
