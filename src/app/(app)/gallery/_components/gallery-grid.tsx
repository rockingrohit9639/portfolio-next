'use client';

import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '~/lib/cn';
import type { Gallery, Media } from '~/payload-types';

type GalleryCategory = Gallery['category'];
type CategoryFilter = 'all' | GalleryCategory;

interface GalleryGridProps {
  images: Gallery[];
}

const GALLERY_CATEGORIES: GalleryCategory[] = ['nature', 'architecture', 'portraits', 'street', 'abstract', 'misc'];

const CATEGORIES: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'all' },
  ...GALLERY_CATEGORIES.map((cat) => ({ value: cat, label: cat })),
];

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedImage, setSelectedImage] = useState<Gallery | null>(null);

  const filteredImages = activeCategory === 'all' ? images : images.filter((img) => img.category === activeCategory);

  const currentIndex = selectedImage ? filteredImages.findIndex((img) => img.id === selectedImage.id) : -1;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const getImageUrl = (image: Gallery): string => {
    const media = image.image as Media;
    return media?.url || '';
  };

  const getImageAlt = (image: Gallery): string => {
    const media = image.image as Media;
    return media?.alt || image.title;
  };

  return (
    <>
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
        {filteredImages.map((image, index) => {
          const imageUrl = getImageUrl(image);
          if (!imageUrl) return null;

          return (
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
                  src={imageUrl}
                  alt={getImageAlt(image)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium lowercase">{image.title}</p>
                    <p className="text-white/70 text-xs mt-1 lowercase">{image.category}</p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {filteredImages.length === 0 && <p className="text-muted text-center py-12">no images in this category yet...</p>}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onKeyDown={(e) => {
            if (e.key === 'Escape') setSelectedImage(null);
            if (e.key === 'ArrowLeft') goToPrevious();
            if (e.key === 'ArrowRight') goToNext();
          }}
        >
          {/* Backdrop close button */}
          <button
            type="button"
            className="absolute inset-0 w-full h-full cursor-default"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          />

          {/* Close icon button */}
          <button
            type="button"
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <XIcon className="size-6" />
          </button>

          {/* Previous button */}
          {currentIndex > 0 && (
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 p-2"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="size-6" />
            </button>
          )}

          {/* Next button */}
          {currentIndex < filteredImages.length - 1 && (
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 p-2"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRightIcon className="size-6" />
            </button>
          )}

          {/* Image container */}
          <div className="relative max-w-5xl max-h-[70vh] w-full h-full z-10 pointer-events-none mb-20">
            <Image
              src={getImageUrl(selectedImage)}
              alt={getImageAlt(selectedImage)}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-8 left-0 right-0 text-center z-10 pointer-events-none px-4">
            <p className="text-white text-base font-medium lowercase">{selectedImage.title}</p>
            {selectedImage.description && (
              <p className="text-white/70 text-sm mt-2 max-w-lg mx-auto leading-relaxed lowercase">
                {selectedImage.description}
              </p>
            )}
            <p className="text-white/40 text-xs mt-3">
              {currentIndex + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
