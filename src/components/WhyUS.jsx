function WhyUS() {
  const reasons = [
    'فنيون محترفون وذو خبرة',
    'استجابة سريعة في نفس اليوم',
    'أسعار مناسبة وخدمة مضمونة',
    'متاحون طوال الأسبوع',
    'ضمان على جميع الخدمات'
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-800 border-r-4 border-blue-500 pr-3 mb-4">
        لماذا نحن؟
      </h2>
      <ul className="list-disc pr-6 text-gray-700 space-y-2">
        {reasons.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default WhyUS;
