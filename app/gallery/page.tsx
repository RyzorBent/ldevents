'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, X, Loader2 } from 'lucide-react';

interface GalleryImage {
  id: number | string; // Use number for now, could be string if using public_id
  category: string;
  image: string;
  title: string;
  description: string;
  width?: number; // Optional: Add width if needed for layout
  height?: number; // Optional: Add height if needed for layout
}

// Define categories - could potentially be derived from fetched data too
const categories = [
  { id: 'all', label: 'All Events' },
  // { id: 'weddings', label: 'Weddings' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'birthdays', label: 'Birthdays' },
];

export default function GalleryPage() {
  const [allGalleryItems, setAllGalleryItems] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageId, setSelectedImageId] = useState<number | string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/gallery-images');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: GalleryImage[] = await response.json();
        setAllGalleryItems(data);
      } catch (e) {
        console.error('Failed to fetch gallery images:', e);
        setError('Failed to load gallery images. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filteredItems =
    activeCategory === 'all'
      ? allGalleryItems
      : allGalleryItems.filter((item) => item.category === activeCategory);

  const selectedImageIndex = filteredItems.findIndex((item) => item.id === selectedImageId);

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null || filteredItems.length === 0) return;
    const nextIndex = (selectedImageIndex + 1) % filteredItems.length;
    setSelectedImageId(filteredItems[nextIndex].id);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null || filteredItems.length === 0) return;
    const prevIndex = (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImageId(filteredItems[prevIndex].id);
  };

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-[50vh] flex items-center justify-center'>
        <img
          src='https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069'
          alt='Gallery'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/60' />
        <div className='relative z-10 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Our Gallery</h1>
          <p className='text-xl text-white/90 max-w-2xl mx-auto px-4'>
            Explore our portfolio of unforgettable events and celebrations
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='py-16 md:py-24'>
        <div className='container'>
          {/* Category Filter */}
          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className='min-w-[120px]'
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid / Loading / Error State */}
          {isLoading ? (
            <div className='flex justify-center items-center h-64'>
              <Loader2 className='h-12 w-12 animate-spin text-primary' />
            </div>
          ) : error ? (
            <div className='text-center text-destructive py-12'>
              <p>{error}</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className='text-center text-muted-foreground py-12'>
              <p>No images found for this category.</p>
            </div>
          ) : (
            <motion.div layout className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='group relative overflow-hidden rounded-lg cursor-pointer aspect-square' // Use aspect-square for consistency
                  onClick={() => setSelectedImageId(item.id)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='absolute bottom-0 left-0 right-0 p-4'>
                      {' '}
                      {/* Adjusted padding */}
                      <h3 className='text-lg font-semibold text-white mb-1'>{item.title}</h3>{' '}
                      {/* Adjusted text size */}
                      <p className='text-sm text-white/80'>{item.description}</p>{' '}
                      {/* Adjusted text size */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImageId !== null && (
        <div
          className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
          onClick={() => setSelectedImageId(null)} // Close modal on background click
        >
          {/* Previous Button (only show if multiple images) */}
          {filteredItems.length > 1 && (
            <button
              className='absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[51] p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors'
              onClick={handlePrevImage}
            >
              <ChevronLeft className='h-6 w-6' />
            </button>
          )}

          {/* Image Container */}
          <motion.div
            key={selectedImageId} // Add key to force re-render on image change
            className='relative max-w-4xl w-full max-h-[90vh] z-50'
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking image
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close Button */}
            <button
              className='absolute top-2 right-2 z-[52] p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors'
              onClick={() => setSelectedImageId(null)}
            >
              <X className='h-5 w-5' />
            </button>
            <img
              src={filteredItems.find((item) => item.id === selectedImageId)?.image}
              alt={
                filteredItems.find((item) => item.id === selectedImageId)?.title ||
                'Selected gallery item'
              }
              className='w-full h-auto max-h-[90vh] object-contain rounded-lg'
            />
          </motion.div>

          {/* Next Button (only show if multiple images) */}
          {filteredItems.length > 1 && (
            <button
              className='absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[51] p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors'
              onClick={handleNextImage}
            >
              <ChevronRight className='h-6 w-6' />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
