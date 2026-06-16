import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Phone, MapPin, Clock, ChevronDown, ArrowRight,
  Star, Sparkles, Menu, X, MessageCircle, Calendar
} from 'lucide-react';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';

// ── DATA ──────────────────────────────────────────────────────────────────────

const services = [
  {
    slug: 'emergency-relief',
    title: "I'm tooth is hurting",
    subtitle: 'URGENT RELIEF',
    desc: 'Toothache at 2AM? No lecture, no judgment. We reserve daily emergency slots so you get relief today, not next week.',
    price: 'Immediate Openings',
    img: '/assets/emergency-relief.png',
  },
  {
    slug: 'comfort-first',
    title: "I'm scared of dentists",
    subtitle: 'COMFORT FIRST',
    desc: 'Found by a former dental-phobe. We use "Pause Anytime" protocols and ultrasonic tools so you feel nothing but calm.',
    price: 'From ₱800',
    img: '/assets/comfort-first.png',
  },
  {
    slug: 'smile-restoration',
    title: "I hate my smile",
    subtitle: 'CONFIDENCE RESTORED',
    desc: 'From whitening to veneers. We use natural-look composite bonding so your smile looks real, not plastic.',
    price: 'Consult is Free',
    img: '/assets/smile-restoration.png',
  },
  {
    slug: 'dental-implants',
    title: "I'm missing teeth",
    subtitle: 'PERMANENT FIX',
    desc: 'Titanium implants that feel and chew like real teeth. Eat what you want again without worrying about dentures slipping.',
    price: 'Payment Plans Available',
    img: '/assets/dental-implants.png',
  },
];

const timelineSteps = [
  { num: 1, title: 'Warm Welcome', desc: 'No rush. We greet you, offer water, and let you settle in our calm waiting area.' },
  { num: 2, title: 'Just a Look', desc: 'Consultation only. No drills, no needles — we just assess your teeth and talk.' },
  { num: 3, title: 'Clear Plan', desc: 'We explain everything in plain language with transparent pricing. No surprises.' },
  { num: 4, title: 'You Decide', desc: "Take the plan home. Think it over. Schedule treatment only when you're ready." },
];

const reviews = [
  { name: 'Maria Santos', badge: 'Overcame Dental Anxiety', rating: 5, text: "I hadn't been to a dentist in 8 years because of fear. They let me stop anytime I felt uncomfortable. Now I go every 6 months." },
  { name: 'Jun Reyes', badge: 'Family Patient', rating: 5, text: "Brought my 3 kids here. The staff explained everything to them like they were talking to friends, not patients. No tears, no drama." },
  { name: 'Arlene Cruz', badge: 'Price Transparency', rating: 5, text: "First clinic that told me the price BEFORE starting. No surprise bills. The cleaning was painless and done in under 30 minutes." },
];

const marqueeWords = ['Gentle Care', 'No Judgment', 'Transparent Pricing', 'Comfort First', 'Modern Equipment', 'Family Friendly', 'Walk-ins Welcome', 'Alibagu', 'Marana'];

const team = [
  { name: 'Dr. Faye-Ann Tan-Barrientos', role: 'Lead Dentist (Alibagu & Marana)', bio: 'Alibagu: Mon, Tue, Sat (By Appt), Sun. Marana: By Appointment Only.', img: '/assets/doc1.jpg' },
  { name: 'Dr. Jasmeen Ballesteros', role: 'Dentist (Alibagu)', bio: 'Alibagu: Wednesday, Thursday, Friday.', img: '/assets/doc2.jpg' },
  { name: 'Dr. Ryan Christopher Domingo', role: 'Dentist (Alibagu & Marana)', bio: 'Alibagu: Saturday. Marana: Tuesday, Wednesday, Thursday, Friday.', img: '/assets/doc3.jpg' },
  { name: 'Dr. Alvie Axl Barrientos', role: 'Dentist (Alibagu & Marana)', bio: 'Alibagu: Tuesday. Marana: Monday, Saturday, Sunday.', img: '/assets/doc4.jpg' },
];

// ── SHARED CTA STYLES ─────────────────────────────────────────────────────────
export const CTA_BOOK = 'https://dental.m.mymedsph.app/dental/qpEhpCl8?fbclid=IwY2xjawSWfNhleHRuA2FlbQIxMABicmlkETFIOENFQlg4ZzhqT09IWTBac3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuplwbG43qtZqJ-8ydwm5YE34Jj7eYaZttMv5mbfaEN8MWWrgg_vUIVowdbg_aem_B4e99LJO2tR4bQck1l7M4w';
export const CTA_CALL = 'tel:09754477609';
export const CTA_FB = 'https://www.facebook.com/profile.php?id=61550862719130&mibextid=LQQJ4d';
export const CTA_MAP = 'https://www.google.com/maps/search/?api=1&query=TanDent+Dental+Clinic+Marana+Ilagan+City';

// ── COMPONENTS ────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const lightSections = document.querySelectorAll('#about, #timeline, #testimonials, #contact');
    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting);
        setIsLight(anyVisible);
      },
      { rootMargin: '-64px 0px -60% 0px', threshold: 0 }
    );
    lightSections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'First Visit', href: '#timeline' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const textColor = scrolled && isLight ? 'rgba(45,41,38,0.75)' : 'rgba(255,255,255,0.85)';
  const logoColor = scrolled && isLight ? '#2D2926' : '#ffffff';
  const glassClass = scrolled ? (isLight ? 'glass-light' : 'glass-dark') : '';

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className={`nav-inner ${glassClass}`}>
          <a href="/" className="nav-logo">
            <div className="nav-logo-icon" style={{ overflow: 'hidden', background: 'none' }}>
              <img src="/assets/logo-tandent.jpg" alt="TanDent Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="nav-logo-text">
              <span style={{ color: logoColor }}>TanDent</span>
              <span style={{ color: textColor }}>Dental Clinic</span>
            </div>
          </a>
          <nav className="nav-links">
            {links.map((l) => (
              <motion.a
                key={l.href}
                href={l.href}
                style={{ color: textColor }}
                whileHover={{ scale: 1.18, color: '#C9A96E', textShadow: '0 0 12px rgba(201,169,110,0.9)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                {l.label}
              </motion.a>
            ))}
          </nav>
          <div className="nav-actions">
            <a href={CTA_MAP} target="_blank" rel="noreferrer" className="nav-map-btn">
              <MapPin size={14} /> View Map
            </a>
            <a href={CTA_BOOK} target="_blank" rel="noreferrer" className="nav-cta">
              <Phone size={14} /> Book Appointment
            </a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu" style={{ color: logoColor }}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="mobile-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={28} /></button>
            {links.map((l) => (<a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>))}
            <a href={CTA_BOOK} target="_blank" rel="noreferrer" className="nav-cta" onClick={() => setMobileOpen(false)}>
              <Phone size={14} /> Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <section ref={ref} className="hero">
        <motion.div className="hero-bg" style={{ y }}>
          <img src="/assets/recep.jpg" alt="TanDent Dental Clinic — warm, modern clinic interior" />
          <div className="hero-bg-overlay" />
          <div className="hero-bg-tint" />
        </motion.div>

        <motion.div className="hero-content" style={{ opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="hero-label">
              <span className="hero-label-line" />
              A5, Triton Mall, Alibagu & Marana Talipapa
            </span>
            <h1>
              Scared of the<br />
              dentist?<br />
              <em className="text-shimmer">So were they.</em>
            </h1>
            <p className="hero-subtitle">
              We built our practice around one idea: dental care should never feel scary. Transparent pricing, gentle hands, and zero judgment — always.
            </p>
            <div className="hero-actions">
              <a href={CTA_BOOK} target="_blank" rel="noreferrer" className="btn-primary">
                Schedule a Visit <ArrowRight size={16} />
              </a>
              <a href="#timeline" className="btn-ghost">
                See What to Expect <ChevronDown size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="scroll-cue" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="scroll-cue-line" />
        </motion.div>
      </section>

      {/* ── DIRECT CONTACT CTA STRIP ─────────────────────────────────────── */}
      <motion.div
        className="hero-cta-strip"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      >
        <span className="hero-cta-strip-label">Contact us directly:</span>
        <a href={CTA_BOOK} target="_blank" rel="noreferrer" className="hero-cta-pill hero-cta-pill--call" style={{ background: 'var(--sage)', color: 'white', borderColor: 'var(--sage)' }}>
          <Calendar size={15} /> Book Online
        </a>
        <a href={CTA_CALL} className="hero-cta-pill hero-cta-pill--call">
          <Phone size={15} /> Call Now: 0975 447 7609
        </a>
        <a href={CTA_FB} target="_blank" rel="noreferrer" className="hero-cta-pill hero-cta-pill--fb">
          <MessageCircle size={15} /> Chat on Facebook
        </a>
        <a href={CTA_MAP} target="_blank" rel="noreferrer" className="hero-cta-pill hero-cta-pill--map">
          <MapPin size={15} /> View Map
        </a>
      </motion.div>
    </>
  );
}

function Stats() {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '5,000+', label: 'Smiles Restored' },
    { value: '4.9★', label: 'Patient Rating' },
    { value: '₱800', label: 'Starting Price' },
  ];
  return (
    <section className="stats">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <motion.div key={i} className="stat-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <motion.div className="about-images" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}>
          <img src="/assets/chair.jpg" alt="Modern dental treatment room" />
          <img src="/assets/cabinets.jpg" alt="Welcoming clinic reception" />
          <div className="about-badge"><span>Since 2018</span><span>Ilagan City, Isabela</span></div>
        </motion.div>
        <motion.div className="about-text" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}>
          <span className="section-label" style={{ color: 'var(--sage)' }}>
            <span className="section-label-line" style={{ background: 'var(--sage)' }} />
            Our Philosophy
          </span>
          <h2 className="section-title" style={{ color: 'var(--charcoal)' }}>A gentle practice built on trust, not fear.</h2>
          <p>TanDent Dental Clinic was founded to bring top-tier dental care to the heart of Ilagan. With branches in Alibagu and Marana, we've built a modern, welcoming space for Isabela families.</p>
          <p>We believe dental care shouldn't feel clinical or cold. Our team takes extra time to explain, to listen, and to make sure you feel safe and informed before any procedure begins.</p>
          <div className="about-features">
            {[
              { icon: <MapPin size={18} />, label: 'Locations', value: 'Alibagu & Marana, Ilagan City' },
              { icon: <Phone size={18} />, label: 'Phone / SMS', value: '0975 447 7609' },
              { icon: <Sparkles size={18} />, label: 'Modern Equipment' },
            ].map((item, i) => (
              <div key={i} className="about-feature">
                <div className="about-feature-icon">{item.icon}</div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StickyServices() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      const idx = Math.min(services.length - 1, Math.floor(v * services.length));
      setActiveIndex(idx);
    });
    return unsub;
  }, [scrollYProgress]);

  return (
    <section id="services" className="services-sticky">
      <div className="services-header">
        <span className="section-label" style={{ color: 'var(--gold)' }}>
          <span className="section-label-line" style={{ background: 'var(--gold)' }} />
          Our Services
        </span>
        <h2 className="section-title" style={{ color: 'var(--white)', maxWidth: '550px' }}>
          Every reason to take care of your smile.
        </h2>
      </div>

      <div ref={containerRef} className="services-container" style={{ height: `${services.length * 100}vh` }}>
        <div className="services-stick">
          <div className="services-text-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              >
                <span className="service-subtitle">{services[activeIndex].subtitle}</span>
                <h3 className="service-title">{services[activeIndex].title}</h3>
                <p className="service-desc">{services[activeIndex].desc}</p>
                <div className="service-price-tag">
                  <span className="service-price-dot" />
                  {services[activeIndex].price}
                </div>

                {/* Learn More Button */}
                <motion.button
                  className="service-learn-more-btn"
                  onClick={() => navigate(`/services/${services[activeIndex].slug}`)}
                  whileHover={{ scale: 1.04, x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  Learn More <ArrowRight size={16} />
                </motion.button>

                <div className="services-progress">
                  {services.map((_, i) => (
                    <div key={i} className={`services-progress-dot ${i === activeIndex ? 'active' : 'inactive'}`} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="services-image-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <img src={services[activeIndex].img} alt={services[activeIndex].title} />
                <div className="services-image-gradient" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const doubled = [...marqueeWords, ...marqueeWords];
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((word, i) => (
          <span key={i} className="marquee-item">
            <Star size={12} fill="white" />
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

function Timeline() {
  const [beamWidth, setBeamWidth] = useState(0);
  const [litCount, setLitCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep >= timelineSteps.length) { clearInterval(interval); return; }
      currentStep++;
      setLitCount(currentStep);
      setBeamWidth((currentStep / timelineSteps.length) * 100);
    }, 800);
    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <section id="timeline" className="timeline">
      <motion.div className="timeline-inner" onViewportEnter={() => setHasStarted(true)} viewport={{ once: true, amount: 0.3 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-label" style={{ color: 'var(--sage)' }}>
            <span className="section-label-line" style={{ background: 'var(--sage)' }} />
            Your First Visit
          </span>
          <h2 className="section-title" style={{ color: 'var(--charcoal)' }}>What to expect — no surprises.</h2>
          <p style={{ color: 'var(--charcoal-soft)', opacity: 0.6, maxWidth: 500, lineHeight: 1.8, marginBottom: 'var(--space-xl)', fontSize: '1.0625rem' }}>
            We designed our first visit around your comfort. Here's exactly what happens — step by step.
          </p>
        </motion.div>
        <div className="timeline-steps">
          <div className="timeline-beam" style={{ width: `calc(${beamWidth}% - 8rem)` }} />
          {timelineSteps.map((step, i) => (
            <motion.div key={step.num} className="timeline-step" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <div className={`timeline-step-num ${i < litCount ? 'lit' : ''}`}>{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-inner">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          <span className="section-label" style={{ color: 'var(--sage)', justifyContent: 'center' }}>
            <span className="section-label-line" style={{ background: 'var(--sage)' }} />
            Patient Stories
            <span className="section-label-line" style={{ background: 'var(--sage)' }} />
          </span>
          <h2 className="section-title" style={{ color: 'var(--charcoal)', margin: '0 auto', textAlign: 'center' }}>Patients who were scared, tell it best.</h2>
        </motion.div>
        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <motion.div key={i} className="testimonial-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
              <span className="testimonial-badge">{r.badge}</span>
              <div className="testimonial-stars">{Array.from({ length: r.rating }).map((_, j) => <Star key={j} size={14} fill="#C9A96E" />)}</div>
              <p className="testimonial-text">"{r.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{r.name.charAt(0)}</div>
                <div className="testimonial-author-info"><h5>{r.name}</h5><span>Verified Patient</span></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-label" style={{ color: 'var(--sage)' }}>
            <span className="section-label-line" style={{ background: 'var(--sage)' }} />
            Get In Touch
          </span>
          <h2 className="section-title" style={{ color: 'var(--charcoal)' }}>Ready for a judgment-free visit?</h2>
          <div className="contact-info-list">
            {[
              { icon: <MapPin size={18} />, label: 'Locations', value: 'Alibagu & Marana', link: CTA_MAP },
              { icon: <Phone size={18} />, label: 'Phone / SMS', value: '0975 447 7609', link: CTA_CALL },
              { icon: <MessageCircle size={18} />, label: 'Facebook', value: 'TanDent Dental Clinic', link: CTA_FB },
              { icon: <Clock size={18} />, label: 'Hours', value: 'Mon–Sat: 9AM–6PM, Sun: 1PM–6PM' },
            ].map((item, i) => (
              <div key={i} className="contact-info-item">
                <div className="contact-info-icon">{item.icon}</div>
                <div>
                  <label>{item.label}</label>
                  {item.link ? (
                    <a href={item.link} target={item.link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="contact-info-link">{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <img src="/assets/about-2.png" alt="Clinic reception" className="contact-image" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <div className="contact-form-card">
            <h3>Send an Inquiry</h3>
            {status === 'success' ? (
              <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(201,169,110,0.1)', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>Request Received!</h4>
                <p style={{ color: 'var(--charcoal-soft)' }}>Check your email. We will call you in the next 5 minutes to confirm.</p>
                <button onClick={() => setStatus('idle')} style={{ marginTop: '1.5rem', background: 'var(--charcoal, #2D2926)', color: '#fff', padding: '0.6rem 1.5rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group"><label>Full Name</label><input required type="text" className="form-input" placeholder="Your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} /></div>
                <div className="form-group"><label>Email Address</label><input required type="email" className="form-input" placeholder="Where should we send confirmation?" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} /></div>
                <div className="form-group"><label>Phone / FB Messenger</label><input required type="text" className="form-input" placeholder="How can we reach you?" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} /></div>
                <div className="form-group"><label>Message</label><textarea className="form-input" placeholder="Questions, concerns, or just say hello..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} /></div>
                <button type="submit" disabled={status === 'loading'} className="form-submit">{status === 'loading' ? 'Sending...' : 'Send Message'}</button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <div style={{ padding: '0 2rem 6rem', maxWidth: '1248px', margin: '0 auto' }}>
      <motion.div className="cta-banner" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2>Your smile deserves gentle care</h2>
        <p>Walk in with fear, walk out with a plan. No pressure, no judgment — just honest, affordable dentistry.</p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <a href={CTA_BOOK} target="_blank" rel="noreferrer" className="btn-primary">Book Online Now <ArrowRight size={16} /></a>
          <a href="#contact" className="btn-ghost" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '1rem 2rem', borderRadius: 'var(--radius-xl)' }}>Send an Inquiry</a>
        </div>
      </motion.div>
    </div>
  );
}

function Team() {
  return (
    <section id="team" className="team">
      <div className="team-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          <span className="section-label" style={{ color: 'var(--sage)', justifyContent: 'center' }}>
            <span className="section-label-line" style={{ background: 'var(--sage)' }} />
            Meet the Experts
            <span className="section-label-line" style={{ background: 'var(--sage)' }} />
          </span>
          <h2 className="section-title" style={{ margin: '0 auto' }}>Trusted Hands, Gentle Hearts</h2>
        </motion.div>
        <div className="team-grid">
          {team.map((member, i) => (
            <motion.div key={i} className="team-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
              <div className="team-image"><img src={member.img} alt={member.name} /></div>
              <div className="team-info"><h4>{member.name}</h4><span className="team-role">{member.role}</span><p className="team-bio">{member.bio}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>TanDent Dental Clinic</h3>
            <p>Premium, judgment-free dental care in the heart of Ilagan City. With branches in Alibagu and Marana, serving Isabela families.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#timeline">First Visit Guide</a></li>
              <li><a href="#testimonials">Patient Stories</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Find Us</h4>
            <ul>
              <li><a href={CTA_BOOK} target="_blank" rel="noreferrer" style={{ color: 'var(--sage)', fontWeight: 700 }}>📅 Book Appointment Online</a></li>
              <li><a href={CTA_MAP} target="_blank" rel="noreferrer" style={{ color: 'var(--gold)', fontWeight: 700 }}>📍 Open in Google Maps</a></li>
              <li><a href={CTA_CALL}>📞 0975 447 7609 (Call/SMS)</a></li>
              <li><span>🕒 Mon–Sat: 9AM–6PM, Sun: 1PM–6PM</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TanDent Dental Clinic. All rights reserved.</span>
          <span>Ilagan City, Isabela, Philippines</span>
        </div>
      </div>
    </footer>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <SEO />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <StickyServices />
      <Marquee />
      <Timeline />
      <Testimonials />
      <Team />
      <FAQ />
      <CtaBanner />
      <Contact />
      <Footer />
    </motion.div>
  );
}
