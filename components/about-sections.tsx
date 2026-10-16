'use client';

import Link from 'next/link';
import { about, img, process, stats, ui, vision, type Locale } from '../lib/content';
import { Counter, Reveal, SplitHeading } from './ui';
import { ValuesGrid } from './home-sections';

export function AboutHero({ locale }: { locale: Locale }) {
  const a = about[locale];
  return (
    <section className="page-hero">
      <div className="page-hero-glow" />
      <div className="container">
        <Reveal>
          <div className="eyebrow">{a.eyebrow}</div>
          <SplitHeading lines={a.titleLines} className="display" as="h1" />
          <p>{a.lead}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Story({ locale }: { locale: Locale }) {
  const a = about[locale];
  return (
    <section className="section">
      <div className="container split">
        <Reveal>
          <div className="image-frame landscape">
            <img src={img.structure} alt={locale === 'id' ? 'Struktur bangunan' : 'Building structure'} />
          </div>
        </Reveal>
        <div>
          <Reveal delay={0.08}>
            <div className="eyebrow">{locale === 'id' ? 'Cerita kami' : 'Our story'}</div>
            <h2 className="display section-title">
              {locale === 'id' ? 'Dibangun dari cara kerja.' : 'Built on how we work.'}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="section-intro" style={{ marginTop: 28 }}>
              {a.paragraphs[0]}
            </p>
            <p className="section-intro" style={{ marginTop: 20 }}>
              {a.paragraphs[1]}
            </p>
            <div className="descriptor">
              <span className="red">●</span>
              {a.chips.join(' · ')}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function AboutVision({ locale }: { locale: Locale }) {
  const v = vision[locale];
  return (
    <section className="section section-dark">
      <div className="container vision-grid">
        <div>
          <Reveal>
            <div className="eyebrow">{v.eyebrow}</div>
            <SplitHeading lines={v.titleLines} className="display section-title" as="h2" inView accentLastLine />
          </Reveal>
        </div>
        <div className="vision-copy">
          <Reveal className="vision-block">
            <span className="eyebrow" style={{ color: 'var(--red-soft)' }}>
              {v.visionLabel}
            </span>
            <p>{v.vision}</p>
          </Reveal>
          <Reveal className="vision-block" delay={0.1}>
            <span className="eyebrow" style={{ color: 'var(--red-soft)' }}>
              {v.missionLabel}
            </span>
            <p>{v.mission}</p>
            <ul className="vision-points">
              {v.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ValuesSection({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="eyebrow">{locale === 'id' ? 'Nilai kami' : 'Our values'}</div>
          <h2 className="display section-title">
            {locale === 'id' ? 'Prinsip yang kami pegang.' : 'Principles we hold.'}
          </h2>
        </Reveal>
        <ValuesGrid locale={locale} />
      </div>
    </section>
  );
}

export function ProcessSection({ locale }: { locale: Locale }) {
  const l = ui[locale];
  return (
    <section className="section section-concrete">
      <div className="container">
        <Reveal>
          <div className="eyebrow">{locale === 'id' ? 'Cara kerja' : 'How we work'}</div>
          <h2 className="display section-title">
            {locale === 'id' ? 'Dari percakapan ke serah terima.' : 'From conversation to handover.'}
          </h2>
        </Reveal>
        <div className="process-grid">
          {process.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.08}>
              <div className="process-step">
                <span className="service-number">{p.no}</span>
                <h3>{p[locale].title}</h3>
                <p>{p[locale].desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div style={{ marginTop: 50 }}>
            <Link className="text-link" href={`/${locale}/kontak`}>
              {l.cta} <span>↗</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function StatsBand({ locale }: { locale: Locale }) {
  return (
    <section className="section section-dark" style={{ paddingTop: 'clamp(60px, 7vw, 100px)' }}>
      <div className="container">
        <Reveal>
          <div className="eyebrow">{locale === 'id' ? 'Dalam angka' : 'In numbers'}</div>
        </Reveal>
        <div className="stats-band" style={{ marginTop: 30 }}>
          {stats.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.07}>
              <div className="stat">
                <Counter to={s.value} suffix={s.suffix} />
                <div className="stat-label">{s[locale]}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
