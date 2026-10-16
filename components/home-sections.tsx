'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import {
  about,
  hero,
  img,
  journey,
  marquee,
  projects,
  services,
  stats,
  ui,
  values,
  vision,
  why,
  categoryLabel,
  type Locale,
} from '../lib/content';
import { Counter, Marquee, Reveal, SplitHeading } from './ui';

export function Hero({ locale }: { locale: Locale }) {
  const h = hero[locale];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="home" className="hero" ref={ref}>
      <motion.div className="hero-bg" style={{ y: bgY }}>
        <img src={img.hero} alt="" />
      </motion.div>
      <div className="hero-veil" />
      <motion.div className="container hero-content" style={{ opacity: fade }}>
        <motion.div
          className="eyebrow hero-meta"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {h.eyebrow}
        </motion.div>

        <SplitHeading lines={h.titleLines} className="display" as="h1" />
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="display" style={{ fontSize: 'inherit', lineHeight: 'inherit' }}>
            <span className="accent">{h.titleAccent}</span>
          </h1>
          <p className="hero-copy">{h.copy}</p>
          <div className="hero-actions">
            <Link className="btn" href={`/${locale}/proyek`}>
              {h.ctaPrimary} <span className="arrow">↗</span>
            </Link>
            <Link className="btn btn-ghost light" href={`/${locale}/tentang-kami`}>
              {h.ctaSecondary}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map((s) => (
            <div className="stat" key={s.id}>
              <Counter to={s.value} suffix={s.suffix} />
              <div className="stat-label">{s[locale]}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <div className="scroll-cue">{ui[locale].scrollCue}</div>
    </section>
  );
}

export function HomeMarquee({ locale }: { locale: Locale }) {
  return <Marquee items={marquee[locale]} />;
}

export function AboutTeaser({ locale }: { locale: Locale }) {
  const a = about[locale];
  return (
    <section id="about" className="section">
      <div className="container split">
        <div>
          <Reveal>
            <div className="eyebrow">01 / {a.eyebrow}</div>
            <SplitHeading lines={a.titleLines} className="display section-title" as="h2" inView />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-intro" style={{ marginTop: 30 }}>
              {a.lead}
            </p>
            <p className="section-intro" style={{ marginTop: 20 }}>
              {a.paragraphs[1]}
            </p>
            <div className="descriptor">
              <span className="red">●</span>
              {a.chips.join(' · ')}
            </div>
            <div style={{ marginTop: 36 }}>
              <Link className="text-link" href={`/${locale}/tentang-kami`}>
                {a.cta} <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="image-frame portrait">
            <img src={img.team} alt={locale === 'id' ? 'Tim di lokasi proyek' : 'Team on the project site'} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Services({ locale }: { locale: Locale }) {
  return (
    <section id="services" className="section section-dark">
      <div className="container">
        <Reveal>
          <div className="eyebrow">02 / {ui[locale].nav.services}</div>
          <h2 className="display section-title">
            {locale === 'id' ? 'Keahlian kami.' : 'Our expertise.'}
          </h2>
        </Reveal>
        <div className="service-list">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <div className="service-row">
                <div className="service-number">{s.no}</div>
                <div>
                  <h3 className="display">{s[locale].title}</h3>
                  <p>{s[locale].desc}</p>
                  <div className="service-points">
                    {s[locale].points.map((p) => (
                      <span key={p}>{p}</span>
                    ))}
                  </div>
                </div>
                <div className="service-image">
                  <img src={s.image} alt={s[locale].title} loading="lazy" />
                </div>
                <span className="service-arrow">↗</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Works({ locale }: { locale: Locale }) {
  const l = ui[locale];
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="eyebrow">03 / {l.nav.projects}</div>
              <h2 className="display section-title">
                {locale === 'id' ? 'Proyek pilihan kami.' : 'Selected works.'}
              </h2>
            </div>
            <div>
              <p className="section-intro">
                {locale === 'id'
                  ? 'Contoh tipe proyek dari profil perusahaan—dari infrastruktur publik hingga hunian.'
                  : 'Project types from the company profile—from public infrastructure to residential.'}
              </p>
              <div style={{ marginTop: 24 }}>
                <Link className="text-link" href={`/${locale}/proyek`}>
                  {l.viewAll} <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.1} className="project-card">
              <Link href={`/${locale}/proyek/${p.slug}`} style={{ display: 'block', color: 'inherit' }}>
                <div className="project-media">
                  <span className="project-index">0{i + 1}</span>
                  <img src={p.image} alt={p[locale].title} loading="lazy" />
                  <span className="project-view">
                    {l.viewDetail} <span>↗</span>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="display">{p[locale].title}</h3>
                  <span className="project-meta">
                    {categoryLabel[p.category][locale]} · {p.year}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Journey({ locale }: { locale: Locale }) {
  return (
    <section id="experience" className="section section-concrete">
      <div className="container split" style={{ alignItems: 'start' }}>
        <div>
          <Reveal>
            <div className="eyebrow">04 / {ui[locale].nav.about}</div>
            <h2 className="display section-title">{locale === 'id' ? 'Perjalanan kami.' : 'Our journey.'}</h2>
            <p className="section-intro" style={{ marginTop: 28 }}>
              {locale === 'id'
                ? 'Pengalaman kami tumbuh lintas sektor sejak 2010—setiap proyek menambah cara kerja yang lebih matang.'
                : 'Our experience has grown across sectors since 2010—each project adds a more mature way of working.'}
            </p>
          </Reveal>
        </div>
        <div className="timeline">
          {journey.map((j, i) => (
            <Reveal key={j.year} delay={i * 0.06}>
              <div className="timeline-item">
                <div className="timeline-year">{j.year}</div>
                <h3>{j[locale].title}</h3>
                <p>{j[locale].desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Vision({ locale }: { locale: Locale }) {
  const v = vision[locale];
  return (
    <section id="vision" className="section section-dark">
      <div className="container vision-grid">
        <div>
          <Reveal>
            <div className="eyebrow">05 / {v.eyebrow}</div>
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

export function Why({ locale }: { locale: Locale }) {
  return (
    <section id="why" className="section">
      <div className="container">
        <Reveal>
          <div className="eyebrow">06 / {locale === 'id' ? 'Mengapa kami' : 'Why us'}</div>
          <h2 className="display section-title">
            {locale === 'id' ? 'Mengapa memilih kami?' : 'Why work with us?'}
          </h2>
        </Reveal>
        <div className="why-grid">
          {why.map((w, i) => (
            <Reveal key={w.no} delay={i * 0.07}>
              <div className="why-item">
                <span className="service-number">{w.no}</span>
                <h3>{w[locale].title}</h3>
                <p>{w[locale].desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ locale }: { locale: Locale }) {
  return (
    <section className="cta-band">
      <div className="container">
        <Reveal>
          <div className="eyebrow" style={{ color: 'rgba(244,241,234,.55)' }}>
            {ui[locale].nav.contact}
          </div>
          <h2 className="display" style={{ marginTop: 20 }}>
            {locale === 'id' ? 'Punya proyek? Mari diskusikan.' : 'Have a project? Let’s talk.'}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link className="btn" href={`/${locale}/kontak`}>
            {ui[locale].cta} <span className="arrow">↗</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function ValuesGrid({ locale }: { locale: Locale }) {
  return (
    <div className="values-grid">
      {values.map((v, i) => (
        <Reveal key={v.no} delay={i * 0.07}>
          <div className="value-card">
            <span className="service-number">{v.no}</span>
            <h3>{v[locale].title}</h3>
            <p>{v[locale].desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
