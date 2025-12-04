import { RichText } from '@payloadcms/richtext-lexical/react';
import dayjs from 'dayjs';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import WaveSeparator from '~/components/wave-separator';
import { getBlogPostBySlug, getBlogPosts } from '~/lib/queries';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="md:max-w-xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted mb-6 hover:text-foreground transition-colors duration-150"
      >
        ← back to blog
      </Link>

      <article>
        <header className="mb-6">
          <h1 className="text-xl md:text-2xl font-medium mb-2">{post.title}</h1>
          <div className="flex items-center gap-2 text-sm text-muted">
            <time dateTime={post.publishedAt}>{dayjs(post.publishedAt).format('MMMM D, YYYY')}</time>
            {post.tags && post.tags.length > 0 && (
              <>
                <span>·</span>
                <span>{post.tags.map((t) => t.tag).join(', ')}</span>
              </>
            )}
          </div>
        </header>

        <WaveSeparator />

        <div className="blog-content">
          <RichText data={post.content} />
        </div>
      </article>
    </div>
  );
}
