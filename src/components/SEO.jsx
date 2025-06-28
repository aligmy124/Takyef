// src/components/SeoMeta.jsx
import { Helmet } from "react-helmet";

export default function SeoMeta({ title = "تكييفي | خدمات التكييف بالرياض", description }) {
  return (
    <Helmet>
      <html lang="ar" dir="rtl" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="فني تكييف, صيانة مكيفات, تركيب مكيفات, تنظيف مكيفات, فني مكيفات بالرياض, مكيفات سبليت, مكيفات شباك, صيانة دورية للمكيفات, تنظيف وتعقيم وحدات التكييف, فحص وتسليك صرف المكيف, تكييفي" />
      <meta name="author" content="حسن عبد الحكيم" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://takyefy.com" />
      <meta property="og:image" content="https://takyefy.com/og-image.jpg" />
      <meta property="og:site_name" content="تكييفي" />
      <meta property="og:locale" content="ar_SA" />
      <link rel="canonical" href="https://takyefy.com" />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
}
