'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { notFoundCopy } from '../../lib/content';

export default function LocaleNotFound() {
  const params = useParams<{ locale: string }>();
  const copy = params?.locale === 'en' ? notFoundCopy.en : notFoundCopy.id;
  return (
    <div className="notfound">
      <div>
        <div className="code">{copy.code}</div>
        <h1 className="display">
          {copy.title[0]}
          <br />
          {copy.title[1]}
        </h1>
        <p>{copy.copy}</p>
        <Link className="btn" href={`/${params?.locale === 'en' ? 'en' : 'id'}`}>
          {copy.cta} <span className="arrow">↗</span>
        </Link>
      </div>
    </div>
  );
}
