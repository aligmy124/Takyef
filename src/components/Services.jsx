function Services() {
  const services = [
    {
      title: 'فك وتركيب المكيفات',
      description: 'كما ويحرص فني فك وتركيب المكيفات لدينا على تركيب توصيلات الكهرباء في المكيف وبالتالي اختبار كفاءة تكييف المكيف من حيث جودة التبريد.',
      image: '/images/installation.jpg',
    },
    {
      title: ' تمديد نحاس مع تعبئة فريون',
      description: ' فك وتركيب مكيفات سبليت تمديد نحاس وصيانه وتعبئة : غسيل · تمديد نحاس مكيفات امريكي مولر كوري وتعبئة فيرون ',
      image: '/images/gas-filling.jpg',
    },
    {
      title: 'تنظيف  مكيفات',
      description: 'لنتائج تنظيف مذهلة، استخدم فوهة بخاع قادرة على الوصول المناطق بعيدة، مثل بخاخات الضغط المستخدمة في الحدائق. تأكد من تغطية جميع الشفرات المحلول',
      image: '/images/cleaning.png',
    },
    {
      title: 'صيانة دورية لجميع المكيفات',
      description: 'نتفقد وحدتك دورياً ونقوم بإصلاح الأعطال البسيطة قبل أن تتفاقم.',
      image: '/images/maintenance.png',
    },
    {
      title: 'فحص وتسليك صرف المكيف',
      description: 'نقوم بفحص وصيانة صرف المكيفات لضمان عدم انسدادها وتحسين كفاءة التبريد.',
      image: '/images/drain-cleaning.jpg',
    },
    {
      title: 'خدمة سريعة',
      description: 'نقدم خدمة سريعة وفعالة، حيث نصل إليك في نفس اليوم لتلبية احتياجاتك.',
      image: '/images/fast-service.jpg',
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-800 border-r-4 border-blue-500 pr-3 mb-4">
        خدماتنا
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 flex flex-col">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold text-blue-700 mb-2">{service.title}</h2>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
