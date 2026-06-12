import ServicePageLayout from './ServicePageLayout';
import SEO from '../../components/SEO';

export default function ComfortFirst() {
  return (
    <>
      <SEO 
        title="Comfort First Dental Care | TanDent Dental Clinic"
        description="Dental care designed for people who are scared. We use Pause Anytime protocols and ultrasonic tools so you feel nothing but calm."
        image="https://tandent-alibagu.vercel.app/assets/comfort-first.png"
        url="https://tandent-alibagu.vercel.app/services/comfort-first"
      />
      <ServicePageLayout
        badge="Comfort First"
        title="Dental Care Designed for People Who Are Scared"
        tagline="Our clinic was founded by a former dental-phobe. We use Pause Anytime protocols, ultrasonic tools, and calming techniques so you feel nothing but safe."
        heroImg="/assets/comfort-first.png"
      whatTitle="What is Comfort-First Dental Care?"
      whatBody={[
        "Dental anxiety is one of the most common reasons people avoid necessary dental care — sometimes for years. At TanDent, we have built every part of our workflow around removing that fear.",
        "Our 'Pause Anytime' protocol means you are always in control. You raise your hand, we stop. No exceptions. No rushing. We go at your pace, always.",
        "We also use modern ultrasonic scalers and laser-assisted tools that reduce the need for traditional drilling and numbing injections — making most routine procedures genuinely painless.",
      ]}
      whatImg="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80"
      processTitle="Your Comfort-First Experience, Step by Step"
      steps={[
        { title: 'Free Anxiety Consultation', desc: 'We sit down with you, learn your history, and explain exactly what we plan to do — before anything starts.' },
        { title: '"Pause Anytime" Agreement', desc: 'You raise your hand, we stop. Always. We agree on a signal before any procedure begins so you are always in control.' },
        { title: 'Gentle, Modern Treatment', desc: 'We use ultrasonic tools and gentle numbing techniques to minimize discomfort. Most patients are surprised by how painless it is.' },
        { title: 'Follow-Up & Check-In', desc: 'We call or message you the next day to check in. Your comfort matters beyond just the appointment.' },
      ]}
      whyCards={[
        { icon: '✋', title: '"Pause Anytime" Protocol', desc: 'You are always in control. Raise your hand and we stop immediately — no questions asked, no pressure to continue.' },
        { icon: '⚡', title: 'Modern, Low-Pain Tools', desc: 'We use ultrasonic scalers and laser-assisted techniques that are far gentler than traditional dental drills.' },
        { icon: '💬', title: 'Patient-First Communication', desc: 'We explain everything in plain language before doing it. No medical jargon, no surprises. Just honest, clear communication.' },
      ]}
      bottomCtaTitle="Your comfort is our highest priority."
      bottomCtaDesc="Book a free anxiety consultation and let us walk you through the process at your own pace — completely pressure-free."
    />
    </>
  );
}
