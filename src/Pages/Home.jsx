// src/pages/Home.jsx
import SeoMeta from '../components/SEO';
import Services from '../components/Services';
import Feedback from '../components/Feedback';
import WhyUs from '../components/WhyUs';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import '../assets/style.css';
export default function Home() {
  return (
    <>

      <SeoMeta
        title="فني تكييف بالرياض | تكييفي"
        description="خدمة تركيب وصيانة وتنظيف مكيفات بالرياض. أطلب فني تكييف الآن واستفد من أفضل الأسعار والخدمة السريعة."
      />
      <Services />
      <Feedback />
      <WhyUs />
      <Contact />
      <ContactForm />
    </>
  );
}
