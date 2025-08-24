import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';

import './styles/globals.css';
import { ThemeProvider } from 'next-themes';
import ThemeChanger from '~/components/theme-changer';

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Rohit',
  description: 'Rohit',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexMono.variable} antialiased`}>
        <ThemeProvider>
          <ThemeChanger />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
