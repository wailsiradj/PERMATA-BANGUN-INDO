import type { Metadata } from 'next';
import { ProjectsHero, ProjectsIndex } from '../../../components/projects-sections';
import { CtaBand } from '../../../components/home-sections';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'en'
    ? { title: 'Projects', description: 'Selected projects across infrastructure, public buildings, education, and residential work.' }
    : { title: 'Proyek', description: 'Proyek pilihan kami: infrastruktur, bangunan publik, pendidikan, hingga hunian.' };
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
