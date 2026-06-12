import ServicePageLayout from './ServicePageLayout';
import SEO from '../../components/SEO';

export default function EmergencyRelief() {
  return (
    <>
      <SEO 
        title="Emergency Dental Relief | TanDent Dental Clinic"
        description="Toothache at 2AM? No lecture, no judgment. We reserve daily emergency slots so you get relief today, not next week in Ilagan City."
        image="https://tandent-alibagu.vercel.app/assets/emergency-relief.png"
        url="https://tandent-alibagu.vercel.app/services/emergency-relief"
      />
      <ServicePageLayout
        badge="Urgent Relief"
        title="Emergency Dental Care — Relief Today, Not Next Week"
        tagline="A toothache doesn't wait for a convenient time. Neither do we. We reserve daily emergency slots so you are seen the same day — no lecture, no judgment."
        heroImg="/assets/emergency-relief.png"
        whatTitle="What is Emergency Dental Care?"
        whatBody={[
          "Emergency dental care covers any acute pain, swelling, broken tooth, or lost filling that needs same-day attention. Waiting even 24–48 hours can turn a manageable problem into a costly, complex procedure.",
          "At TanDent, we hold back daily appointment slots specifically for patients in pain. Our team is trained to assess, stabilize, and relieve discomfort quickly — so you leave feeling better, not worse.",
          "Whether it's a cracked molar at midnight or a knocked-out tooth during a weekend game, we are your first call in Ilagan City.",
        ]}
        whatImg="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80"
      processTitle="How Emergency Care Works at TanDent"
      steps={[
        { title: 'Call or Message Us', desc: 'Call 0975 447 7609 or send us a Facebook message. Tell us your pain level and we reserve your slot.' },
        { title: 'Same-Day Slot', desc: 'We hold emergency slots daily. You will usually be seen within the same morning or afternoon.' },
        { title: 'Gentle Assessment', desc: 'We examine the affected area carefully. No cold instruments, no unnecessary poking — just a focused, gentle look at what is happening.' },
        { title: 'Immediate Relief', desc: 'We treat the source of pain right away — whether that means draining an abscess, performing an extraction, or a temporary fix to get you comfortable until a longer procedure.' },
      ]}
      whyCards={[
        { icon: '🕐', title: 'Same-Day Appointments', desc: 'We hold daily slots for emergency patients. You will never be told to "come back next week" when you are in pain.' },
        { icon: '💰', title: 'Transparent Pricing', desc: 'We tell you the cost before any procedure begins. No hidden fees, no surprise bills.' },
        { icon: '🤝', title: 'Zero Judgment', desc: 'No lectures on why you waited. We understand life happens. We are here to help, not to criticize.' },
      ]}
      bottomCtaTitle="In pain? We have a slot for you today."
      bottomCtaDesc="Do not wait for the pain to get worse. Call us now or message us on Facebook and we will get you in as soon as possible."
      />
    </>
  );
}
