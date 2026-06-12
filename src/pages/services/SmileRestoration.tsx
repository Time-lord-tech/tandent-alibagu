import ServicePageLayout from './ServicePageLayout';
import SEO from '../../components/SEO';

export default function SmileRestoration() {
  return (
    <>
      <SEO 
        title="Smile Restoration & Whitening | TanDent Dental Clinic"
        description="From simple teeth whitening to full composite veneers — we use natural-look materials so your smile looks real and beautiful."
        image="https://tandent-alibagu.vercel.app/assets/smile-restoration.png"
        url="https://tandent-alibagu.vercel.app/services/smile-restoration"
      />
      <ServicePageLayout
        badge="Confidence Restored"
        title="Love Your Smile Again — Whitening, Veneers & Bonding"
        tagline="From simple teeth whitening to full composite veneers — we use natural-look materials so your smile looks real and beautiful, never fake or plastic."
        heroImg="/assets/smile-restoration.png"
      whatTitle="What is Smile Restoration?"
      whatBody={[
        "Smile restoration covers a range of cosmetic dental procedures designed to improve the appearance, shape, color, and symmetry of your teeth. At TanDent, every smile makeover starts with a free consultation.",
        "We offer professional teeth whitening, natural-look composite bonding, and veneer placement. Our focus is on results that look genuinely natural — not the 'ultra-bright Hollywood' look unless that is what you want.",
        "The consult is always free. We will show you a realistic preview of what your smile could look like before any commitment is made.",
      ]}
      whatImg="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
      processTitle="Your Smile Transformation Journey"
      steps={[
        { title: 'Free Smile Consult', desc: 'We assess your teeth, discuss your goals, and show you what is realistically achievable. Zero pressure, zero cost.' },
        { title: 'Photo Assessment', desc: 'We photograph your teeth from multiple angles to plan the ideal proportions and shade for your face and skin tone.' },
        { title: 'Choose Your Plan', desc: 'We present you with a tiered plan — from budget-friendly whitening to premium veneer options — and you choose what fits your needs and budget.' },
        { title: 'Your Transformation', desc: 'We complete the procedure in 1–3 sessions depending on complexity. You leave with a smile you are proud to show off.' },
      ]}
      whyCards={[
        { icon: '🎨', title: 'Natural-Look Results', desc: 'We match shading to your natural teeth and skin tone so results look genuinely beautiful — not artificial.' },
        { icon: '🆓', title: 'Free Initial Consultation', desc: 'Your first smile assessment is always free. See your options and get a clear price before any commitment.' },
        { icon: '💳', title: 'Flexible Pricing', desc: 'We offer tiered options from affordable whitening to premium veneers, with transparent pricing at every step.' },
      ]}
      bottomCtaTitle="Ready to love your smile?"
      bottomCtaDesc="Book your free smile consultation today. No commitment required — just an honest conversation about what is possible for your unique smile."
    />
    </>
  );
}
