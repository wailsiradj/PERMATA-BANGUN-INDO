import type { Metadata } from 'next';
import { ProjectsHero, ProjectsIndex } from '../../../components/projects-sections';
import { CtaBand } from '../../../components/home-sections';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === 'en';
  return {
    title: en ? 'Projects' : 'Proyek',
    description: en ? 'Selected projects across infrastructure, public buildings, education, and residential work.' : 'Proyek pilihan kami: infrastruktur, bangunan publik, pendidikan, hingga hunian.',
    alternates: { canonical: `/${locale}/proyek`, languages: { id: '/id/proyek', en: '/en/proyek' } },
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale === 'en' ? 'en' : 'id';
  return (
    <>
      <ProjectsHero locale={loc} />
      <ProjectsIndex locale={loc} />
      <CtaBand locale={loc} />
    </>
  );
}
