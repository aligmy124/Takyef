import { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const { name, phone, service, message } = form;
    const text = `👤 الاسم: ${name}\n📞 الجوال: ${phone}\n🔧 الخدمة: ${service}\n📝 الملاحظات: ${message}`;
    const url = `https://wa.me/966566789423?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="mb-12">
      <form
        className="space-y-4 bg-white p-6 rounded-lg shadow max-w-xl mx-auto mt-10"
        onSubmit={(e) => {
          e.preventDefault();
          sendToWhatsApp();
        }}
      >
        <h3 className="text-xl font-bold text-blue-700 mb-4">نموذج الطلب</h3>

        <input
          type="text"
          name="name"
          placeholder="الاسم"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="رقم الجوال"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="service"
          placeholder="نوع الخدمة المطلوبة"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="ملاحظات إضافية"
          className="w-full p-2 border rounded"
          rows={3}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          إرسال الطلب
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
