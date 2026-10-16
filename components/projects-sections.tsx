'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
  categoryLabel,
  projects,
  ui,
  type Locale,
  type ProjectCategory,
} from '../lib/content';
import { Reveal, SplitHeading } from './ui';

type Project = (typeof projects)[number];

export function ProjectsHero({ locale }: { locale: Locale }) {
  const count = projects.length;
  return (
    <section className="page-hero">
      <div className="page-hero-glow" />
      <div className="container">
        <Reveal>
          <div className="eyebrow">{ui[locale].nav.projects}</div>
          <SplitHeading
            lines={locale === 'id' ? ['Proyek', 'pilihan kami.'] : ['Selected', 'works.']}
            className="display"
            as="h1"
          />
          <p>
            {locale === 'id'
              ? `${count} proyek dari profil perusahaan—dari infrastruktur publik hingga hunian dan komersial.`
              : `${count} projects from the company profile—from public infrastructure to residential and commercial.`}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function ProjectsIndex({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<'all' | ProjectCategory>('all');
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const visible = active === 'all' ? projects : projects.filter((p) => p.category === active);
  const l = ui[locale];

  return (
    <section className="section">
      <div className="container">
        <div className="filter-row">
          <button className={`filter-chip${active === 'all' ? ' active' : ''}`} onClick={() => setActive('all')}>
            {active === 'all' && <motion.span layoutId="chip-fill" className="chip-fill" transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} />}
            {l.all}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-chip${active === c ? ' active' : ''}`}
              onClick={() => setActive(c)}
            >
              {active === c && <motion.span layoutId="chip-fill" className="chip-fill" transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} />}
              {categoryLabel[c][locale]}
            </button>
          ))}
        </div>

        <div className="project-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.slug}
                className="project-card"
                layout
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/${locale}/proyek/${p.slug}`}>
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export function ProjectDetail({
  locale,
  project,
  prev,
  next,
}: {
  locale: Locale;
  project: Project;
  prev: Project;
  next: Project;
}) {
  const l = ui[locale];
  const copy = project[locale];

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 'clamp(40px, 6vw, 70px)' }}>
        <div className="page-hero-glow" />
        <div className="container">
          <Reveal>
            <Link className="breadcrumb" href={`/${locale}/proyek`}>
              ← {l.backToProjects}
            </Link>
            <SplitHeading lines={[copy.title]} className="display" as="h1" />
            <p>{copy.summary}</p>
          </Reveal>
        </div>
      </section>

      <div className="container">
        <Reveal>
          <div className="project-hero-media image-frame" style={{ marginTop: -1 }}>
            <img src={project.image} alt={copy.title} />
          </div>
        </Reveal>
      </div>

      <section className="section" style={{ paddingBottom: 'clamp(60px, 7vw, 100px)' }}>
        <div className="container">
          <Reveal>
            <div className="spec-grid">
              <div className="spec-item">
                <div className="label">{l.year}</div>
                <div className="value">{project.year}</div>
              </div>
              <div className="spec-item">
                <div className="label">{l.client}</div>
                <div className="value">{copy.client}</div>
              </div>
              <div className="spec-item">
                <div className="label">{l.location}</div>
                <div className="value">{project.location}</div>
              </div>
              <div className="spec-item">
                <div className="label">{l.scope}</div>
                <div className="value">{copy.scope}</div>
              </div>
            </div>
          </Reveal>

          <div className="detail-cols">
            <Reveal>
              <div className="detail-block">
                <div className="eyebrow">{l.category}</div>
                <h3 style={{ marginTop: 14 }}>{categoryLabel[project.category][locale]}</h3>
                <p>{copy.summary}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="detail-block" style={{ marginBottom: 40 }}>
                <h3>{l.challenge}</h3>
                <p>{copy.challenge}</p>
              </div>
              <div className="detail-block">
                <h3>{l.solution}</h3>
                <p>{copy.solution}</p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="eyebrow" style={{ marginTop: 70 }}>
              {l.gallery}
            </div>
          </Reveal>
          <div className="gallery-grid">
            {project.gallery.map((g, i) => (
              <Reveal key={g} delay={i * 0.08}>
                <div className="image-frame">
                  <img src={g} alt={`${copy.title} — ${i + 1}`} loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="project-nav">
            <Reveal>
              <Link href={`/${locale}/proyek/${prev.slug}`}>
                <div className="dir">← {l.prev}</div>
                <h4>{prev[locale].title}</h4>
              </Link>
            </Reveal>
            <Reveal delay={0.08}>
              <Link className="next" href={`/${locale}/proyek/${next.slug}`}>
                <div className="dir">{l.next} →</div>
                <h4>{next[locale].title}</h4>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
