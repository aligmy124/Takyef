import Section from '../components/Section';
import FixedCallButton from '../components/FixedCallButton';
import FixedWhatsAppButton from '../components/FixedWhatsAppButton';

function Contact() {
  return (
<Section title="تواصل الآن">
    <h2 className="text-xl font-bold text-gray-800 mb-4 underline">966566789423</h2>
    <div className="flex flex-wrap gap-3 mt-5">
      <FixedCallButton />
      <FixedWhatsAppButton />
    </div>
  </Section>
  );
}

export default Contact;
