import { IBM_Plex_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import '~/app/styles/globals.css';

import Footer from '~/components/footer';
import Navigation from '~/components/navigation';
import { generateMetadata } from '~/lib/meta';

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = generateMetadata('home');

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
