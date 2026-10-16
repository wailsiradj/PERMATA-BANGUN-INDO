import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://permatabangunindo.example'),
  title: {
    default: 'PT Permata Bangun Indo — Konstruksi, Sipil & MEP',
    template: '%s — PT Permata Bangun Indo',
  },
  description:
    'Perusahaan konstruksi Indonesia yang mengerjakan bangunan, sipil, serta mekanikal dan elektrikal untuk sektor publik dan swasta.',
  openGraph: {
    type: 'website',
    siteName: 'PT Permata Bangun Indo',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
