import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import PageShell from '../../components/PageShell';
import { site, type Locale } from '../../lib/content';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://permata-bangun-indo.netlify.app';

export function generateStaticParams() {
  return [{ locale: 'id' }, { locale: 'en' }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === 'en';
  const path = `/${en ? 'en' : 'id'}`;
  const title = en ? 'Home' : 'Beranda';
  const description = en
    ? 'PT Permata Bangun Indo delivers construction, civil, and mechanical-electrical projects for public and private sectors across Indonesia.'
    : 'PT Permata Bangun Indo mengerjakan proyek konstruksi, sipil, serta mekanikal dan elektrikal untuk sektor publik dan swasta di Indonesia.';
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { id: '/id', en: '/en' },
    },
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      url: `${siteUrl}${path}`,
      locale: en ? 'en_US' : 'id_ID',
      alternateLocale: [en ? 'id_ID' : 'en_US'],
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== 'id' && locale !== 'en') notFound();
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: `${siteUrl}/${locale}`,
    description:
      locale === 'en'
        ? 'Construction, civil, and mechanical-electrical work for public and private sectors in Indonesia.'
        : 'Konstruksi, sipil, serta mekanikal dan elektrikal untuk sektor publik dan swasta di Indonesia.',
    areaServed: 'Indonesia',
    knowsAbout: ['Building construction', 'Civil engineering', 'Mechanical and electrical construction'],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <PageShell locale={locale as Locale}>{children}</PageShell>
    </>
  );
}
