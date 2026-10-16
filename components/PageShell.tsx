'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import type { Locale } from '../lib/content';

export default function PageShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <Header locale={locale} />
      <main key={pathname} className="page-enter">
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
