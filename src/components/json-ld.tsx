import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from '~/lib/constants';
import type { Blog } from '~/payload-types';

type JsonLdProps = {
  type: 'website' | 'person' | 'article';
  data?: Blog;
};

export function JsonLd({ type, data }: JsonLdProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE_NAME,
          url: SITE_URL,
          description: 'Personal portfolio and blog',
          author: {
            '@type': 'Person',
            name: SITE_NAME,
            url: SITE_URL,
          },
        };

      case 'person':
        return {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: SITE_NAME,
          url: SITE_URL,
          sameAs: [
            `https://twitter.com/${TWITTER_HANDLE.replace('@', '')}`,
          ],
          jobTitle: 'Founding Engineer - Full Stack Developer',
          company: 'acemate.ai'
        };

      case 'article':
        if (!data) return null;

        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.title,
          description: data.excerpt,
          datePublished: data.publishedAt,
          dateModified: data.updatedAt,
          url: `${SITE_URL}/blog/${data.slug}`,
          author: {
            '@type': 'Person',
            name: SITE_NAME,
            url: SITE_URL,
          },
          publisher: {
            '@type': 'Person',
            name: SITE_NAME,
            url: SITE_URL,
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/blog/${data.slug}`,
          },
          keywords: data.tags?.map((t) => t.tag).join(', '),
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
