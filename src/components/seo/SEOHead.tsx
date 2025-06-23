
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image = '/lovable-uploads/7ab0dfaa-fb22-4f69-a53a-fdd690b23878.png',
  url = 'https://internationalowl.com',
  type = 'website',
  structuredData 
}: SEOHeadProps) => {
  const fullTitle = title.includes('OWL International') ? title : `${title} | OWL International`;
  const fullUrl = url.startsWith('http') ? url : `https://internationalowl.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://internationalowl.com${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="OWL International" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@OWLInternational" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="OWL International" />
      <meta name="theme-color" content="#f59e0b" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
