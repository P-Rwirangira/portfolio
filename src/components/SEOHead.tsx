import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
  jsonLd?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Patrick Rwirangira - Software Developer & Full-Stack Engineer',
  description = 'Passionate full-stack developer specializing in modern web technologies. Building elegant, efficient, and user-friendly applications with React, Next.js, Node.js, and more.',
  keywords = 'software developer, full-stack engineer, web development, React, Next.js, Node.js, TypeScript, JavaScript, portfolio',
  ogImage = '/media/profile.jpeg',
  ogUrl = 'https://your-portfolio-domain.com',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  jsonLd
}) => {
  const structuredData = jsonLd || {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Patrick Rwirangira',
    jobTitle: 'Software Developer',
    description: description,
    image: ogImage,
    url: ogUrl,
    sameAs: [
      'https://github.com/patrick-rwirangira',
      'https://linkedin.com/in/patrick-rwirangira',
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'Web Development',
      'Full-Stack Development'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    }
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Patrick Rwirangira" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:site_name" content="Patrick Rwirangira Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@patrick_rwirangira" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1d2d43" />
      <meta name="msapplication-TileColor" content="#1d2d43" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Head>
  );
};

export default SEOHead;