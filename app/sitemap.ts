import type { MetadataRoute } from 'next';
import { projects } from '../lib/content';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://permata-bangun-indo.netlify.app';
const locales = ['id', 'en'] as const;
const sections = ['', 'tentang-kami', 'proyek', 'kontak'];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = locales.flatMap((locale) =>
    sections.map((section) => {
      const path = `/${locale}${section ? `/${section}` : ''}`;
      const alternateLocale = locale === 'id' ? 'en' : 'id';
      const alternatePath = `/${alternateLocale}${section ? `/${section}` : ''}`;
      return {
        url: `${siteUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: section === '' ? 1 : 0.8,
        alternates: { languages: { id: `${siteUrl}${locale === 'id' ? path : alternatePath}`, en: `${siteUrl}${locale === 'en' ? path : alternatePath}` } },
      };
    }),
  );

  const projectPages = locales.flatMap((locale) =>
    projects.map((project) => {
      const path = `/${locale}/proyek/${project.slug}`;
      const alternateLocale = locale === 'id' ? 'en' : 'id';
      return {
        url: `${siteUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.6,
        alternates: {
          languages: {
            id: `${siteUrl}/${locale === 'id' ? 'id' : alternateLocale}/proyek/${project.slug}`,
            en: `${siteUrl}/${locale === 'en' ? 'en' : alternateLocale}/proyek/${project.slug}`,
          },
        },
      };
    }),
  );

  return [...pages, ...projectPages];
}
