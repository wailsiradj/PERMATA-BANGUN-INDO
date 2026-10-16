'use client';

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks, site, ui, type Locale } from '../lib/content';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [glass, setGlass] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const l = ui[locale];

  useMotionValueEvent(scrollY, 'change', (y) => {
    setGlass(y > 40);
    setHidden(y > 320 && y > (scrollY.getPrevious() ?? y));
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const links = navLinks(locale);
  const isActive = (href: string) => {
    const base = href.split('#')[0];
    if (base === `/${locale}`) return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(base);
  };
  const other = locale === 'id' ? 'en' : 'id';
  const switchHref = pathname.replace(`/${locale}`, `/${other}`) || `/${other}`;

  return (
    <>
      <header className={`site-header${glass ? ' glass' : ''}${hidden && !open ? ' hidden' : ''}`}>
        <div className="container nav">
          <Link className="logo" href={`/${locale}`}>
            <span className="logo-mark">{site.mark}</span> PERMATA BANGUN INDO
          </Link>
          <nav className="nav-links">
            {links.map((link) => (
              <Link key={link.key} href={link.href} className={isActive(link.href) ? 'active' : ''}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link
              href={switchHref}
              className="language-switch"
              hrefLang={other}
              aria-label={locale === 'id' ? 'Translate website to English' : 'Terjemahkan situs ke Bahasa Indonesia'}
              title={locale === 'id' ? 'Translate to English' : 'Terjemahkan ke Bahasa Indonesia'}
            >
              <span className="language-icon" aria-hidden="true">文</span>
              <span className="language-label">{locale === 'id' ? 'TRANSLATE · EN' : 'TERJEMAHKAN · ID'}</span>
            </Link>
            <Link className="btn nav-cta" href={`/${locale}/kontak`}>
              {l.cta} <span className="arrow">↗</span>
            </Link>
            <button
              className={`hamburger${open ? ' open' : ''}`}
              aria-label={open ? l.menuClose : l.menuOpen}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.key}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <Link className="mobile-link" href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="mobile-meta">
              <Link href={switchHref} aria-label={locale === 'id' ? 'Translate website to English' : 'Terjemahkan situs ke Bahasa Indonesia'}>
                {locale === 'id' ? 'TRANSLATE · EN' : 'TERJEMAHKAN · ID'}
              </Link>
              <span>PT Permata Bangun Indo</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
