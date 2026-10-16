import type { Metadata } from 'next';
import { ContactHero, ContactSection } from '../../../components/contact-sections';
import { HomeMarquee } from '../../../components/home-sections';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'en'
    ? { title: 'Contact', description: 'Discuss your project with the PT Permata Bangun Indo team.' }
    : { title: 'Kontak', description: 'Diskusikan proyek Anda bersama tim PT Permata Bangun Indo.' };
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
