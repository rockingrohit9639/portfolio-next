import dayjs from 'dayjs';
import type { Metadata } from 'next';
import Link from 'next/link';
import WaveSeparator from '~/components/wave-separator';
import {  SITE_URL, TWITTER_HANDLE } from '~/lib/constants';
import { generateMetadata as fetchMetadata, getBlogPosts } from '~/lib/queries';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await fetchMetadata('blog');

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      type: 'website',
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/blog`,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: TWITTER_HANDLE,
    },
    alternates: {
      canonical: `${SITE_URL}/blog`,
    },
  };
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="md:max-w-xl">
      <h1 className="md:max-w-xl text-muted">stories, tutorials, and musings from my corner of the island.</h1>

      <WaveSeparator />

      <div className="space-y-6 md:space-y-8">
        {posts.length === 0 ? (
          <p className="text-muted">no posts yet... check back soon!</p>
        ) : (
          posts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <time dateTime={post.publishedAt}>{dayjs(post.publishedAt).format('MMM D, YYYY')}</time>
                    {post.tags && post.tags.length > 0 && (
                      <>
                        <span>·</span>
                        <span>{post.tags.map((t) => t.tag).join(', ')}</span>
                      </>
                    )}
                  </div>
                  <h2 className="font-medium group-hover:text-muted transition-colors duration-150">{post.title}</h2>
                  <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
