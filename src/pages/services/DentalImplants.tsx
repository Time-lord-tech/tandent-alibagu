import ServicePageLayout from './ServicePageLayout';
import SEO from '../../components/SEO';

export default function DentalImplants() {
  return (
    <>
      <SEO 
        title="Dental Implants | TanDent Dental Clinic"
        description="Permanent dental implants that look, feel, and chew like natural teeth. Book an implant assessment in Ilagan City today."
        image="https://tandent-alibagu.vercel.app/assets/dental-implants.png"
        url="https://tandent-alibagu.vercel.app/services/dental-implants"
      />
      <ServicePageLayout
        badge="Permanent Fix"
        title="Dental Implants — Teeth That Feel Like Your Own"
        tagline="Titanium implants that look, feel, and chew like your natural teeth. Eat what you want, smile freely, and never worry about slipping dentures again."
        heroImg="/assets/dental-implants.png"
      whatTitle="What are Dental Implants?"
      whatBody={[
        "A dental implant is a titanium post surgically placed into the jawbone to act as an artificial tooth root. Once the implant fuses with the bone (a process called osseointegration), a natural-looking crown is attached on top.",
        "Unlike dentures, implants are permanent. They do not slip, they do not require adhesive, and they stimulate the jawbone just like a natural tooth — preventing the bone loss that occurs with missing teeth.",
        "At TanDent, we offer a full implant service from initial assessment through to the final crown placement. Payment plans are available to make this permanent solution accessible.",
      ]}
      whatImg="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
      processTitle="Your Implant Journey, Step by Step"
      steps={[
        { title: 'Initial Assessment', desc: 'We take digital X-rays and assess your bone density and gum health to confirm you are a good candidate for implants.' },
        { title: 'Treatment Plan & Pricing', desc: 'We present a complete written treatment plan with transparent costs and a timeline. No hidden fees. Payment plans discussed here.' },
        { title: 'Implant Procedure', desc: 'The titanium post is placed under local anesthetic. Most patients describe it as pressure — not pain. The procedure typically takes 1–2 hours.' },
        { title: 'Healing & Crown Placement', desc: 'Over 3–6 months the implant fuses with your bone. Then we attach your custom-made crown and you leave with a complete, permanent tooth.' },
      ]}
      whyCards={[
        { icon: '🔩', title: 'Titanium Quality', desc: 'We use high-grade titanium implants that are biocompatible and built to last a lifetime with proper care.' },
        { icon: '💳', title: 'Payment Plans Available', desc: 'Implants are an investment. We offer flexible payment plans so the best solution for your teeth is within reach.' },
        { icon: '📋', title: 'Full Transparency', desc: 'Every step — and every cost — is explained in writing before we begin. You decide with full information, never under pressure.' },
      ]}
      bottomCtaTitle="Ready to eat, speak, and smile freely again?"
      bottomCtaDesc="Book an implant assessment today and get a full written treatment plan with transparent pricing — no obligations, no pressure."
    />
    </>
  );
}
