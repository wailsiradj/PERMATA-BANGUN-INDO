import type { Metadata } from 'next';
import {
  AboutHero,
  AboutVision,
  ProcessSection,
  RegistryProfile,
  StatsBand,
  Story,
  ValuesSection,
} from '../../../components/about-sections';
import { CtaBand } from '../../../components/home-sections';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === 'en';
  return {
    title: en ? 'About Us' : 'Tentang Kami',
    description: en ? 'The story, values, and way of working behind PT Permata Bangun Indo.' : 'Cerita, nilai, dan cara kerja di balik PT Permata Bangun Indo.',
    alternates: { canonical: `/${locale}/tentang-kami`, languages: { id: '/id/tentang-kami', en: '/en/tentang-kami' } },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale === 'en' ? 'en' : 'id';
  return (
    <>
      <AboutHero locale={loc} />
      <Story locale={loc} />
      <RegistryProfile locale={loc} />
      <AboutVision locale={loc} />
      <ValuesSection locale={loc} />
      <ProcessSection locale={loc} />
      <StatsBand locale={loc} />
      <CtaBand locale={loc} />
    </>
  );
}
