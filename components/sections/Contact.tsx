'use client';

// Centered convergence section — the S-curve resolves here.
// No left/right offset; the content sits centrally as the river mouth.
// Front-end validation only. Connect to Formspree / Netlify Forms etc.

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { SwingChild } from '@/components/SwingSection';

const inputStyle: React.CSSProperties = {
  width:          '100%',
  background:     'transparent',
  border:         'none',
  borderBottom:   '1px solid rgba(196,154,60,0.18)',
  color:          'var(--parchment)',
  fontFamily:     'var(--font-body)',
  fontWeight:     300,
  fontSize:       'var(--text-sm)',
  padding:        '0.7rem 0',
  outline:        'none',
  transition:     'border-color 0.25s, box-shadow 0.25s',
  borderRadius:   0,
};

const labelStyle: React.CSSProperties = {
  display:        'block',
  fontFamily:     'var(--font-body)',
  fontSize:       'var(--text-xs)',
  letterSpacing:  '0.1em',
  textTransform:  'uppercase',
  color:          'rgba(242,232,213,0.45)',
  marginBottom:   '0.35rem',
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]       = useState<Record<string, string>>({});

  function validate(fd: FormData) {
    const errs: Record<string, string> = {};
    if (!fd.get('name'))    errs.name    = 'Please enter your name.';
    if (!fd.get('email'))   errs.email   = 'Please enter your email.';
    else if (!/\S+@\S+\.\S+/.test(fd.get('email') as string))
                            errs.email   = 'Please enter a valid email.';
    if (!fd.get('subject')) errs.subject = 'Please choose a topic.';
    if (!fd.get('message')) errs.message = 'Please enter a message.';
    return errs;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd   = new FormData(e.currentTarget);
    const errs = validate(fd);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
    // <!-- Connect to form backend (Formspree, Netlify Forms, etc.) -->
  }

  function focusStyle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    e.target.style.borderBottomColor = 'var(--gold)';
    e.target.style.boxShadow         = '0 2px 10px rgba(196,154,60,0.1)';
  }
  function blurStyle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    e.target.style.borderBottomColor = 'rgba(196,154,60,0.18)';
    e.target.style.boxShadow         = 'none';
  }

  return (
    <section
      id="contact"
      style={{ background: 'var(--slate)', padding: 'var(--section-pad) 0' }}
      aria-label="Contact and enquiry"
    >
      <div className="max-w-xl mx-auto px-6">

        <SwingChild>
          <h2
            className="section-rule text-center"
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'var(--text-lg)',
              color:         'var(--parchment)',
              letterSpacing: '0.05em',
              lineHeight:    1.15,
              marginBottom:  '0.5rem',
              textAlign:     'center',
            }}
          >
            Say Hello
          </h2>
        </SwingChild>

        <SwingChild delay={0.06}>
          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontStyle:    'italic',
              color:        'var(--gold)',
              fontSize:     'var(--text-md)',
              opacity:      0.7,
              textAlign:    'center',
              marginBottom: '2.4rem',
            }}
          >
            (or Boo)
          </p>
        </SwingChild>

        <SwingChild delay={0.1}>
          <p style={{ color: 'rgba(242,232,213,0.6)', fontSize: 'var(--text-sm)', textAlign: 'center', marginBottom: '2.8rem', lineHeight: 1.7 }}>
            A room query, a function booking, a question about the quiz night —
            or just to say hello. We're a friendly lot.
          </p>
        </SwingChild>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              textAlign:    'center',
              fontFamily:   'var(--font-display)',
              fontStyle:    'italic',
              color:        'var(--gold)',
              fontSize:     'var(--text-md)',
              padding:      '2rem 0',
            }}
          >
            Message received. We'll be in touch soon —<br />the ghost is already reading it.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div style={{ marginBottom: '1.8rem' }}>
              <label htmlFor="f-name" style={labelStyle}>Full Name</label>
              <input id="f-name" name="name" type="text" placeholder="Your name" autoComplete="name"
                style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
              {errors.name && <p role="alert" style={{ color: '#d47070', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.name}</p>}
            </div>

            {/* Email */}
            <div style={{ marginBottom: '1.8rem' }}>
              <label htmlFor="f-email" style={labelStyle}>Email Address</label>
              <input id="f-email" name="email" type="email" placeholder="your@email.com" autoComplete="email"
                style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
              {errors.email && <p role="alert" style={{ color: '#d47070', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.email}</p>}
            </div>

            {/* Phone (optional) */}
            <div style={{ marginBottom: '1.8rem' }}>
              <label htmlFor="f-phone" style={labelStyle}>
                Phone <span style={{ opacity: 0.4, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
              </label>
              <input id="f-phone" name="phone" type="tel" placeholder="07xxx xxxxxx" autoComplete="tel"
                style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
            </div>

            {/* Subject */}
            <div style={{ marginBottom: '1.8rem' }}>
              <label htmlFor="f-subject" style={labelStyle}>What's this about?</label>
              <select
                id="f-subject" name="subject"
                style={{ ...inputStyle, background: 'var(--slate)', WebkitAppearance: 'none', cursor: 'pointer' }}
                onFocus={focusStyle} onBlur={blurStyle}
              >
                <option value="">Select a topic</option>
                <option value="general">General Enquiry</option>
                <option value="room">Book a Room</option>
                <option value="function">Function Room Hire</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && <p role="alert" style={{ color: '#d47070', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.subject}</p>}
            </div>

            {/* Message */}
            <div style={{ marginBottom: '2.4rem' }}>
              <label htmlFor="f-message" style={labelStyle}>Message</label>
              <textarea id="f-message" name="message" rows={4} placeholder="Tell us what you need..."
                style={{ ...inputStyle, resize: 'vertical', minHeight: '96px' }}
                onFocus={focusStyle} onBlur={blurStyle}
              />
              {errors.message && <p role="alert" style={{ color: '#d47070', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.message}</p>}
            </div>

            {/* Submit */}
            <div style={{ textAlign: 'center' }}>
              <motion.button
                type="submit"
                whileHover={{ background: 'var(--parchment)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background:    'var(--gold)',
                  color:         'var(--ink)',
                  fontFamily:    'var(--font-body)',
                  fontWeight:    600,
                  fontSize:      'var(--text-xs)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  border:        'none',
                  borderRadius:  '2px',
                  padding:       '0.8rem 2.4rem',
                  cursor:        'pointer',
                  transition:    'background 0.25s',
                }}
              >
                Send Enquiry
              </motion.button>
            </div>
          </form>
        )}

        {/* Closing ghost quote — bookends the narrative */}
        <p
          style={{
            fontFamily:   'var(--font-display)',
            fontStyle:    'italic',
            color:        'var(--gold)',
            opacity:      0.38,
            fontSize:     'var(--text-sm)',
            textAlign:    'center',
            marginTop:    '3.5rem',
            letterSpacing:'0.03em',
            lineHeight:   1.6,
          }}
        >
          "I'll be here when you arrive…<br />I'm always here."
        </p>

      </div>
    </section>
  );
}
