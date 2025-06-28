function Services() {
  const services = [
    'تركيب مكيفات شباك وسبليت',
    'صيانة الأعطال لجميع أنواع المكيفات',
    'تنظيف وتعقيم الوحدات الداخلية والخارجية',
    'فحص وتسليك صرف المكيف',
    'تعبئة فريون وضبط التبريد'
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-800 border-r-4 border-blue-500 pr-3 mb-4">
        خدماتنا
      </h2>
      <ul className="list-disc pr-6 text-gray-700 space-y-2">
        {services.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
