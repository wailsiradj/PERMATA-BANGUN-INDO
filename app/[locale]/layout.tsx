import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import PageShell from '../../components/PageShell';
import type { Locale } from '../../lib/content';

export function generateStaticParams() {
  return [{ locale: 'id' }, { locale: 'en' }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === 'en';
  return {
    title: en ? 'Home' : 'Beranda',
    description: en
      ? 'PT Permata Bangun Indo delivers construction, civil, and mechanical-electrical projects for public and private sectors across Indonesia.'
      : 'PT Permata Bangun Indo mengerjakan proyek konstruksi, sipil, serta mekanikal dan elektrikal untuk sektor publik dan swasta di Indonesia.',
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
  return <PageShell locale={locale as Locale}>{children}</PageShell>;
}
