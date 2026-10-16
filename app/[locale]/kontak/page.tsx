import type { Metadata } from 'next';
import { ContactHero, ContactSection } from '../../../components/contact-sections';
import { HomeMarquee } from '../../../components/home-sections';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === 'en';
  return {
    title: en ? 'Contact' : 'Kontak',
    description: en ? 'Discuss your project with the PT Permata Bangun Indo team.' : 'Diskusikan proyek Anda bersama tim PT Permata Bangun Indo.',
    alternates: { canonical: `/${locale}/kontak`, languages: { id: '/id/kontak', en: '/en/kontak' } },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale === 'en' ? 'en' : 'id';
  return (
    <>
      <ContactHero locale={loc} />
      <ContactSection locale={loc} />
      <HomeMarquee locale={loc} />
    </>
  );
}
