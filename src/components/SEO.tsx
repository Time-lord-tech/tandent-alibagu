import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = 'TanDent Dental Clinic — Gentle Care, Lasting Smiles',
  description = 'Premium, judgment-free dental care in the heart of Ilagan City. Alibagu and Marana branches. Transparent pricing, gentle hands, and zero judgment.',
  image = 'https://tandent-alibagu.vercel.app/assets/recep.jpg',
  url = 'https://tandent-alibagu.vercel.app',
  type = 'website',
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="PH-ISA" />
      <meta name="geo.placename" content="Ilagan City" />
      <meta name="geo.position" content="17.1438;121.8906" />
      <meta name="ICBM" content="17.1438, 121.8906" />
    </Helmet>
  );
}
