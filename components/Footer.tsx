'use client';

import Link from 'next/link';
import { footer, navLinks, site, ui, type Locale } from '../lib/content';
import { Counter, Reveal, SplitHeading } from './ui';

export default function Footer({ locale }: { locale: Locale }) {
  const l = ui[locale];
  const f = footer[locale];
  const links = navLinks(locale);

  return (
    <footer className="footer">
      <div className="container">
        <Reveal>
          <div className="logo">
            <span className="logo-mark">{site.mark}</span> PERMATA BANGUN INDO
          </div>
        </Reveal>
        <SplitHeading lines={f.wordmarkLines} className="display footer-wordmark" inView accentLastLine />
      </div>

      <div className="container footer-grid">
        <Reveal>
          <div className="eyebrow">{site.tagline[locale]}</div>
          <p>
            {locale === 'id'
              ? 'Konstruksi, sipil, serta mekanikal dan elektrikal untuk sektor publik dan swasta—dengan perencanaan yang cermat dan eksekusi yang disiplin.'
              : 'Construction, civil, and mechanical-electrical work for public and private sectors—planned with care and executed with discipline.'}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="eyebrow">{f.navLabel}</div>
          <div className="footer-links">
            {links.map((link) => (
              <Link key={link.key} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="eyebrow">{f.contactLabel}</div>
          <p>{f.contactNote}</p>
          <div style={{ marginTop: 26, display: 'flex', gap: 34, flexWrap: 'wrap' }}>
            <div>
              <div className="stat-value" style={{ fontSize: 34 }}>
                <Counter to={13} suffix="+" />
              </div>
              <div className="stat-label">{locale === 'id' ? 'Tahun' : 'Years'}</div>
            </div>
            <div>
              <div className="stat-value" style={{ fontSize: 34 }}>
                <Counter to={4} />
              </div>
              <div className="stat-label">{locale === 'id' ? 'Sektor' : 'Sectors'}</div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}. {locale === 'id' ? 'Hak cipta dilindungi.' : 'All rights reserved.'}
        </span>
        <a className="maker-credit" href="https://ouail-khenfer.netlify.app" target="_blank" rel="noreferrer">
          {locale === 'id' ? 'Dibuat oleh' : 'Made by'} Ouail Siradj-Eddine KHENFER ↗
        </a>
        <Link href={`/${locale}`}>{l.backToTop} ↑</Link>
      </div>
    </footer>
  );
}
