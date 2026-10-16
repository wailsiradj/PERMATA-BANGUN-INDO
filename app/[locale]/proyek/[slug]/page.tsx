import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetail } from '../../../../components/projects-sections';
import { getProject, projects } from '../../../../lib/content';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://permata-bangun-indo.netlify.app';

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return projects.flatMap((p) => [
    { locale: 'id', slug: p.slug },
    { locale: 'en', slug: p.slug },
  ]);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = locale === 'en' ? 'en' : 'id';
  const project = getProject(slug);
  if (!project) return { title: 'Not found' };
  const path = `/${locale}/proyek/${project.slug}`;
  return {
    title: project[loc].title,
    description: project[loc].summary,
    alternates: {
      canonical: path,
      languages: {
        id: `/id/proyek/${project.slug}`,
        en: `/en/proyek/${project.slug}`,
      },
    },
    openGraph: { url: `${siteUrl}${path}`, images: [project.image] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  if (locale !== 'id' && locale !== 'en') notFound();
  const loc = locale === 'id' ? 'id' : 'en';
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return <ProjectDetail locale={loc} project={project} prev={prev} next={next} />;
}
