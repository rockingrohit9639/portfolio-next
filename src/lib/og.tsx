import { ImageResponse } from 'next/og';
import type { Meta } from '~/payload-types';
import { generateMetadata } from './queries';

// Image metadata
export const alt = 'rohit kumar saini';
export const size = {
  width: 1200,
  height: 630,
};

export default async function generateOgImage(type: keyof Meta) {
  const meta = await generateMetadata(type);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#171611',
        color: '#f0eee7',
        padding: '0px 100px',
        flexDirection: 'column',
      }}
    >
      {type === 'home' ? null : <h1 style={{ fontSize: 32, color: '#a29f91' }}>rohit kumar saini</h1>}
      <h2 style={{ fontSize: 48, fontWeight: 600 }}>{meta.title}</h2>
      <p style={{ fontSize: 24, fontWeight: 400, color: '#a29f91' }}>{meta.description}</p>
    </div>,
    { ...size },
  );
}
