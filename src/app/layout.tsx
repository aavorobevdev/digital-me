import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Andrei Vorobev - Frontend Engineer',
  description: 'Frontend Engineer portfolio and personal website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} bg-background text-foreground`}>
      <body className="antialiased bg-background min-h-screen font-sans">{children}</body>
    </html>
  );
}
