import {
  AboutTeaser,
  CtaBand,
  Hero,
  HomeMarquee,
  Journey,
  Services,
  Vision,
  Why,
  Works,
} from '../../components/home-sections';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale === 'en' ? 'en' : 'id';
  return (
    <>
      <Hero locale={loc} />
      <HomeMarquee locale={loc} />
      <AboutTeaser locale={loc} />
      <Services locale={loc} />
      <Works locale={loc} />
      <Journey locale={loc} />
      <Vision locale={loc} />
      <Why locale={loc} />
      <CtaBand locale={loc} />
    </>
  );
}
