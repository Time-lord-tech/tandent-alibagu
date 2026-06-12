import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Phone, MessageCircle, Calendar, Home, ArrowLeft, Stethoscope, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export const CTA_BOOK = 'https://dental.m.mymedsph.app/dental/qpEhpCl8?fbclid=IwY2xjawSWfNhleHRuA2FlbQIxMABicmlkETFIOENFQlg4ZzhqT09IWTBac3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuplwbG43qtZqJ-8ydwm5YE34Jj7eYaZttMv5mbfaEN8MWWrgg_vUIVowdbg_aem_B4e99LJO2tR4bQck1l7M4w';
export const CTA_CALL = 'tel:09754477609';
export const CTA_FB = 'https://www.facebook.com/profile.php?id=61550862719130&mibextid=LQQJ4d';
export const CTA_MAP = 'https://www.google.com/maps/search/?api=1&query=TanDent+Dental+Clinic+Marana+Ilagan+City';

export function CtaBlock() {
  return (
    <div className="service-detail-cta-block">
      <a href={CTA_BOOK} target="_blank" rel="noreferrer" className="cta-btn-primary">
        <Calendar size={16} /> Book Appointment
      </a>
      <a href={CTA_CALL} className="cta-btn-call">
        <Phone size={16} /> Call: 0975 447 7609
      </a>
      <a href={CTA_FB} target="_blank" rel="noreferrer" className="cta-btn-fb">
        <MessageCircle size={16} /> Chat on Facebook
      </a>
    </div>
  );
}

function ServiceNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className={`nav-inner ${scrolled ? 'glass-dark' : ''}`}>
        <button className="nav-logo" onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <div className="nav-logo-icon"><Stethoscope size={18} /></div>
          <div className="nav-logo-text">
            <span style={{ color: '#ffffff' }}>TanDent</span>
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>Dental Clinic</span>
          </div>
        </button>
        <div className="nav-actions">
          <a href={CTA_MAP} target="_blank" rel="noreferrer" className="nav-map-btn">
            <MapPin size={14} /> View Map
          </a>
          <a href={CTA_BOOK} target="_blank" rel="noreferrer" className="nav-cta">
            <Phone size={14} /> Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}

interface ServicePageProps {
  badge: string;
  title: string;
  tagline: string;
  heroImg: string;
  whatTitle: string;
  whatBody: string[];
  whatImg: string;
  processTitle: string;
  steps: { title: string; desc: string }[];
  whyCards: { icon: string; title: string; desc: string }[];
  bottomCtaTitle: string;
  bottomCtaDesc: string;
}

function GhostSideButtons() {
  const navigate = useNavigate();
  return (
    <>
      {/* ── LEFT SIDE: Home + Call ─── */}
      <div className="ghost-side ghost-side--left">
        <button className="ghost-pill" onClick={() => navigate('/')} aria-label="Back to Home">
          <Home size={20} />
          <span>Home</span>
        </button>
        <a href={CTA_CALL} className="ghost-pill" aria-label="Call Us">
          <Phone size={20} />
          <span>Call</span>
        </a>
      </div>

      {/* ── RIGHT SIDE: Book + Facebook ─── */}
      <div className="ghost-side ghost-side--right">
        <a href={CTA_BOOK} target="_blank" rel="noreferrer" className="ghost-pill" aria-label="Book Appointment">
          <Calendar size={20} />
          <span>Book</span>
        </a>
        <a href={CTA_FB} target="_blank" rel="noreferrer" className="ghost-pill" aria-label="Facebook">
          <MessageCircle size={20} />
          <span>FB</span>
        </a>
      </div>
    </>
  );
}

export default function ServicePageLayout({
  badge, title, tagline, heroImg,
  whatTitle, whatBody, whatImg,
  processTitle, steps,
  whyCards,
  bottomCtaTitle, bottomCtaDesc,
}: ServicePageProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="service-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <GhostSideButtons />
      <ServiceNavbar />

      {/* ── HERO BAND ─── */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-bg">
          <img src={heroImg} alt={title} />
          <div className="service-detail-hero-overlay" />
        </div>
        <div className="service-detail-hero-content">
          <button className="service-back-btn" onClick={() => navigate('/')}>
            <ArrowLeft size={16} /> Back
          </button>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="service-badge">{badge}</span>
            <h1>{title}</h1>
            <p>{tagline}</p>
            <CtaBlock />
          </motion.div>
        </div>
      </section>

      {/* ── BODY ─── */}
      <div className="service-body">

        {/* What Is It */}
        <motion.div className="service-what-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <img src={whatImg} alt={whatTitle} />
          <div className="service-what-text">
            <h2>{whatTitle}</h2>
            {whatBody.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div className="service-process-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2>{processTitle}</h2>
          <div className="service-process-grid">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="service-process-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="service-process-num">{i + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Us */}
        <motion.div className="service-why-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2>Why patients choose TanDent</h2>
          <div className="service-why-grid">
            {whyCards.map((card, i) => (
              <motion.div
                key={i}
                className="service-why-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="service-why-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div className="service-bottom-cta" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2>{bottomCtaTitle}</h2>
          <p>{bottomCtaDesc}</p>
          <CtaBlock />
        </motion.div>

      </div>
    </motion.div>
  );
}
