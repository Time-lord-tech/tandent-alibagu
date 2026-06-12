import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Where is TanDent Dental Clinic located in Ilagan City?",
    a: "We have two convenient branches in Ilagan City, Isabela! You can find us at A5, Triton Mall in Alibagu, and we also serve patients in Marana Talipapa. If you are searching for a 'trusted dentist near me' in Isabela, our clinic is highly accessible with ample parking."
  },
  {
    q: "Do you handle dental emergencies or severe toothaches?",
    a: "Yes, absolutely. We are a top choice for emergency dental care in Ilagan City. If you have a severe toothache, a broken tooth, or swelling, contact us immediately. We purposely reserve daily appointment slots for urgent tooth extractions and rapid pain relief so you don't have to wait."
  },
  {
    q: "I am terrified of the dentist. Will the treatment hurt?",
    a: "We specialize in comfort-first, anxiety-free dentistry. We use a strict 'Pause Anytime' protocol — if you raise your hand, we stop immediately. Combined with our gentle ultrasonic tools and modern numbing techniques, most of our patients are surprised by how painless their visit is."
  },
  {
    q: "How much do braces or orthodontic treatments cost?",
    a: "We believe in 100% transparent pricing with zero hidden fees. The exact cost of braces depends on your specific alignment needs, but we offer flexible, affordable installment plans for families in Ilagan City. Book a free consultation and we will give you a clear quote before you commit to anything."
  },
  {
    q: "Do you offer professional teeth whitening and veneers?",
    a: "Yes! Our smile restoration services are designed to look natural, not fake. We offer professional teeth whitening, cosmetic bonding, and premium composite veneers. We tailor the shade to your natural teeth and skin tone for a beautiful, authentic smile."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner">
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label" style={{ color: 'var(--sage)', justifyContent: 'center' }}>
            <span className="section-label-line" style={{ background: 'var(--sage)' }} />
            Common Questions
            <span className="section-label-line" style={{ background: 'var(--sage)' }} />
          </span>
          <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto' }}>Everything you need to know.</h2>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <button className="faq-question" onClick={() => toggleFAQ(i)} aria-expanded={isOpen}>
                  <h3>{faq.q}</h3>
                  <div className="faq-icon">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
