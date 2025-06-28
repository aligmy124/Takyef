import Section from './Section';
import Testimonial from './Testimonial';

function Feedback() {
  return (
    <Section title="آراء العملاء">
      <Testimonial text="“جاني في نفس اليوم وخدمته ممتازة”" author="عبدالله" />
      <Testimonial text="“نظيف في الشغل وأسعاره مناسبة”" author="محمد" />
    </Section>
  );
}

export default Feedback;
