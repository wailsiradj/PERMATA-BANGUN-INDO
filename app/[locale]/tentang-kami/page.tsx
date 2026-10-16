import type { Metadata } from 'next';
import {
  AboutHero,
  AboutVision,
  ProcessSection,
  StatsBand,
  Story,
  ValuesSection,
} from '../../../components/about-sections';
import { CtaBand } from '../../../components/home-sections';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'en'
    ? { title: 'About Us', description: 'The story, values, and way of working behind PT Permata Bangun Indo.' }
    : { title: 'Tentang Kami', description: 'Cerita, nilai, dan cara kerja di balik PT Permata Bangun Indo.' };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale === 'en' ? 'en' : 'id';
  return (
    <>
      <AboutHero locale={loc} />
      <Story locale={loc} />
      <AboutVision locale={loc} />
      <ValuesSection locale={loc} />
      <ProcessSection locale={loc} />
      <StatsBand locale={loc} />
      <CtaBand locale={loc} />
    </>
  );
}
