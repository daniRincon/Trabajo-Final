import Head from "next/head";
import { siteConfig } from "../data/content";

export default function SEO({ title, description, path = "" }) {
  const pageTitle = title
    ? `${title} | ${siteConfig.title}`
    : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const canonical = `${siteConfig.url}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Gestión del Conocimiento",
    description: pageDescription,
    url: canonical,
    sameAs: [],
    educationalLevel: "University",
    teaches: siteConfig.keywords,
  };

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description"        content={pageDescription} />
      <meta name="keywords"           content={siteConfig.keywords.join(", ")} />
      <meta name="author"             content={siteConfig.author} />
      <meta name="robots"             content="index, follow" />
      <meta name="viewport"           content="width=device-width, initial-scale=1.0" />
      <link rel="canonical"           href={canonical} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={canonical} />
      <meta property="og:title"       content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:locale"      content="es_CO" />
      <meta property="og:site_name"   content="Gestión del Conocimiento" />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
