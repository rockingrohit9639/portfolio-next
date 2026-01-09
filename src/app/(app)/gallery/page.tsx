'use client';

import Image from 'next/image';
import { useState } from 'react';
import WaveSeparator from '~/components/wave-separator';
import { cn } from '~/lib/cn';

type Category = 'all' | 'nature' | 'architecture' | 'portraits' | 'street' | 'abstract';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Exclude<Category, 'all'>;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

const GALLERY_IMAGES: GalleryImage[] = [
  // Nature
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    alt: 'Majestic mountain peaks at sunset',
    category: 'nature',
    aspectRatio: 'landscape',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    alt: 'Misty forest with sunbeams',
    category: 'nature',
    aspectRatio: 'portrait',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80',
    alt: 'Cascading waterfall in lush greenery',
    category: 'nature',
    aspectRatio: 'portrait',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    alt: 'Serene lake reflection at dawn',
    category: 'nature',
    aspectRatio: 'landscape',
  },
  // Architecture
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    alt: 'Modern glass building facade',
    category: 'architecture',
    aspectRatio: 'portrait',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80',
    alt: 'Geometric patterns in concrete',
    category: 'architecture',
    aspectRatio: 'square',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&q=80',
    alt: 'Spiral staircase from below',
    category: 'architecture',
    aspectRatio: 'portrait',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&q=80',
    alt: 'Minimalist architectural lines',
    category: 'architecture',
    aspectRatio: 'landscape',
  },
  // Portraits
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    alt: 'Portrait with natural lighting',
    category: 'portraits',
    aspectRatio: 'portrait',
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    alt: 'Candid street portrait',
    category: 'portraits',
    aspectRatio: 'square',
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    alt: 'Expressive portrait in golden hour',
    category: 'portraits',
    aspectRatio: 'portrait',
  },
  // Street
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1476973422084-e0fa66ff9456?w=800&q=80',
    alt: 'Busy city intersection at night',
    category: 'street',
    aspectRatio: 'landscape',
  },
  {
    id: '13',
    src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    alt: 'Urban alleyway with graffiti',
    category: 'street',
    aspectRatio: 'portrait',
  },
  {
    id: '14',
    src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
    alt: 'City skyline at twilight',
    category: 'street',
    aspectRatio: 'landscape',
  },
  {
    id: '15',
    src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80',
    alt: 'Neon signs reflecting on wet pavement',
    category: 'street',
    aspectRatio: 'square',
  },
  // Abstract
  {
    id: '16',
    src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
    alt: 'Colorful fluid art patterns',
    category: 'abstract',
    aspectRatio: 'square',
  },
  {
    id: '17',
    src: 'https://images.unsplash.com/photo-1507908708918-778587c9e563?w=800&q=80',
    alt: 'Light trails in motion',
    category: 'abstract',
    aspectRatio: 'landscape',
  },
  {
    id: '18',
    src: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80',
    alt: 'Geometric shadows and light',
    category: 'abstract',
    aspectRatio: 'portrait',
  },
];

const CATEGORIES: { value: Category; label: string }[] = [
  { value: 'all', label: 'all' },
  { value: 'nature', label: 'nature' },
  { value: 'architecture', label: 'architecture' },
  { value: 'portraits', label: 'portraits' },
  { value: 'street', label: 'street' },
  { value: 'abstract', label: 'abstract' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <div className="w-full md:max-w-2xl">
      <h1 className="text-muted">a visual journey through moments frozen in time.</h1>

      <WaveSeparator />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setActiveCategory(cat.value)}
            className={cn(
              'px-3 py-1 text-sm transition-all duration-200 border',
              activeCategory === cat.value
                ? 'bg-foreground text-background border-foreground'
                : 'bg-transparent text-muted border-border hover:border-foreground hover:text-foreground',
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelectedImage(image)}
            className="gallery-item relative w-full break-inside-avoid group cursor-pointer overflow-hidden block"
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <div
              className={cn(
                'relative overflow-hidden bg-code-background',
                image.aspectRatio === 'portrait' && 'aspect-[3/4]',
                image.aspectRatio === 'landscape' && 'aspect-[4/3]',
                image.aspectRatio === 'square' && 'aspect-square',
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                  <p className="text-white/70 text-xs mt-1">{image.category}</p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {filteredImages.length === 0 && <p className="text-muted text-center py-12">no images in this category yet...</p>}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => e.key === 'Escape' && setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Close</title>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white text-sm">{selectedImage.alt}</p>
            <p className="text-white/50 text-xs mt-1">{selectedImage.category}</p>
          </div>
        </div>
      )}
    </div>
  );
}
