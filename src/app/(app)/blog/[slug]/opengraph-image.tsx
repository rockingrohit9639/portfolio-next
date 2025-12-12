import { ImageResponse } from 'next/og';
import { getBlogPostBySlug, getBlogPosts } from '~/lib/queries';

export const alt = 'Blog Post';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return new ImageResponse(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#171611',
          color: '#f0eee7',
        }}
      >
        <h1 style={{ fontSize: 48 }}>Post Not Found</h1>
      </div>,
      { ...size },
    );
  }

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#171611',
        color: '#f0eee7',
        padding: '60px 80px',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        <span style={{ fontSize: 24, color: '#a29f91' }}>rohit kumar saini</span>
        <span style={{ fontSize: 24, color: '#a29f91' }}>•</span>
        <span style={{ fontSize: 24, color: '#a29f91' }}>blog</span>
      </div>

      <h1
        style={{
          fontSize: 56,
          fontWeight: 700,
          lineHeight: 1.2,
          marginBottom: '24px',
          maxWidth: '90%',
        }}
      >
        {post.title}
      </h1>

      <p
        style={{
          fontSize: 24,
          fontWeight: 400,
          color: '#a29f91',
          lineHeight: 1.5,
          maxWidth: '85%',
        }}
      >
        {post.excerpt.length > 150 ? `${post.excerpt.slice(0, 150)}...` : post.excerpt}
      </p>

      {post.tags && post.tags.length > 0 && (
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: 'auto',
          }}
        >
          {post.tags.slice(0, 4).map((t) => (
            <span
              key={t.id}
              style={{
                fontSize: 18,
                color: '#a29f91',
                border: '1px solid #a29f91',
                padding: '8px 16px',
                borderRadius: '4px',
              }}
            >
              {t.tag}
            </span>
          ))}
        </div>
      )}
    </div>,
    { ...size },
  );
}
