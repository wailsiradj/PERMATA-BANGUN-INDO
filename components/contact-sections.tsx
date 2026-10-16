'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import { contact, type Locale } from '../lib/content';
import { Reveal, SplitHeading } from './ui';

type Errors = { name?: string; email?: string; message?: string };

export function ContactHero({ locale }: { locale: Locale }) {
  const c = contact[locale];
  return (
    <section className="page-hero">
      <div className="page-hero-glow" />
      <div className="container">
        <Reveal>
          <div className="eyebrow">{c.eyebrow}</div>
          <SplitHeading lines={c.titleLines} className="display" as="h1" />
          <p>{c.copy}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection({ locale }: { locale: Locale }) {
  const c = contact[locale];
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Errors = {};
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name) next.name = c.form.required;
    if (!email) next.email = c.form.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = c.form.invalidEmail;
    if (!message) next.message = c.form.required;

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus('sending');
    window.setTimeout(() => setStatus('done'), 900);
    form.reset();
  };

  return (
    <section className="section">
      <div className="container contact-layout">
        <div>
          <AnimatePresence mode="wait">
            {status === 'done' ? (
              <motion.div
                key="done"
                className="form-status"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3>{c.form.successTitle}</h3>
                <p>{c.form.success}</p>
                <button
                  className="text-link"
                  style={{ marginTop: 22, background: 'none', border: 0, borderBottom: '1px solid currentColor', padding: '0 0 6px' }}
                  onClick={() => setStatus('idle')}
                >
                  {c.form.another} ↗
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="contact-form"
                onSubmit={onSubmit}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="field">
                  <label htmlFor="name">{c.form.name}</label>
                  <input id="name" name="name" type="text" autoComplete="name" />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="field">
                  <label htmlFor="email">{c.form.email}</label>
                  <input id="email" name="email" type="email" autoComplete="email" />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="field">
                  <label htmlFor="phone">{c.form.phone}</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>
                <div className="field">
                  <label htmlFor="message">{c.form.message}</label>
                  <textarea id="message" name="message" rows={4} />
                  {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <div>
                  <button className="btn" type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? c.form.sending : c.form.submit} <span className="arrow">↗</span>
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <Reveal delay={0.1}>
          <aside className="contact-info">
            <div className="eyebrow">{c.infoLabel}</div>
            <div className="info-item" style={{ marginTop: 24 }}>
              <div className="label">{c.office}</div>
              <div className="value">{c.officeValue}</div>
            </div>
            <div className="info-item">
              <div className="label">{c.hours}</div>
              <div className="value">{c.hoursValue}</div>
            </div>
            <div className="info-item">
              <div className="label">{locale === 'id' ? 'Bidang usaha' : 'Business fields'}</div>
              <div className="value">{locale === 'id' ? 'Konstruksi · Sipil · MEP' : 'Construction · Civil · MEP'}</div>
            </div>
            <p className="info-note">{c.infoNote}</p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
