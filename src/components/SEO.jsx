// src/components/SeoMeta.jsx
import { Helmet } from "react-helmet";

export default function SeoMeta({
  title = "تكييفي | خدمات التكييف والصيانة بالرياض",
  description = "فني تكييف بالرياض يقدم خدمات تركيب وصيانة وتنظيف مكيفات بأسعار منافسة وسرعة استجابة. اتصل الآن.",
  image = "https://takyefy.com/og-image.jpg",
  url = "https://takyefy.com"
}) {
  return (
    <Helmet>
  
      <html lang="ar" dir="rtl" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="فني تكييف, صيانة مكيفات, تركيب مكيفات, تنظيف مكيفات, فني مكيفات بالرياض, مكيفات سبليت, مكيفات شباك, صيانة دورية, تنظيف وتعقيم وحدات التكييف, فحص وتسليك صرف المكيف, تكييفي"
      />
      <meta name="author" content="حسن عبد الحكيم" />

      
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="تكييفي" />
      <meta property="og:locale" content="ar_SA" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* الروابط المهمة */}
      <link rel="canonical" href={url} />
      <link rel="icon" href="./public/favicon.ico" type="image/x-icon" />
    </Helmet>
  );
}
