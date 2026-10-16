import './globals.css';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://permata-bangun-indo.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PT Permata Bangun Indo — Konstruksi, Sipil & MEP',
    template: '%s — PT Permata Bangun Indo',
  },
  description:
    'Perusahaan konstruksi Indonesia yang mengerjakan bangunan, sipil, serta mekanikal dan elektrikal untuk sektor publik dan swasta.',
  keywords: ['PT Permata Bangun Indo', 'konstruksi Indonesia', 'pekerjaan sipil', 'mekanikal elektrikal', 'MEP'],
  applicationName: 'PT Permata Bangun Indo',
  authors: [{ name: 'PT Permata Bangun Indo' }],
  creator: 'PT Permata Bangun Indo',
  alternates: {
    languages: {
      id: '/id',
      en: '/en',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'PT Permata Bangun Indo',
    title: 'PT Permata Bangun Indo — Konstruksi, Sipil & MEP',
    description:
      'Perusahaan konstruksi Indonesia yang mengerjakan bangunan, sipil, serta mekanikal dan elektrikal untuk sektor publik dan swasta.',
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT Permata Bangun Indo — Konstruksi, Sipil & MEP',
    description: 'Konstruksi, sipil, serta mekanikal dan elektrikal untuk sektor publik dan swasta di Indonesia.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
