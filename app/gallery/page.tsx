'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Sample gallery data - replace with your actual images
const galleryItems = [
  {
    id: 1,
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070',
    title: 'Elegant Garden Wedding',
    description: 'A romantic garden ceremony with vintage touches',
  },
  {
    id: 2,
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
    title: 'Annual Corporate Gala',
    description: 'Sophisticated corporate event with modern aesthetics',
  },
  {
    id: 3,
    category: 'birthdays',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070',
    title: 'Luxury Birthday Celebration',
    description: 'An extravagant birthday party with custom decor',
  },
  {
    id: 4,
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070',
    title: 'Beachfront Wedding',
    description: 'A dreamy beach ceremony with ocean views',
  },
  {
    id: 5,
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070',
    title: 'Product Launch Event',
    description: 'Innovative product launch with interactive displays',
  },
  {
    id: 6,
    category: 'birthdays',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070',
    title: 'Themed Birthday Party',
    description: 'Creative themed celebration with custom props',
  },
  {
    id: 7,
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069',
    title: 'Vintage Wedding',
    description: 'Classic vintage wedding with timeless elegance',
  },
  {
    id: 8,
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
    title: 'Conference Setup',
    description: 'Professional conference with state-of-the-art facilities',
  },
  {
    id: 9,
    category: 'birthdays',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070',
    title: 'Kids Birthday Party',
    description: 'Fun-filled celebration with entertainment',
  },
];

const categories = [
  { id: 'all', label: 'All Events' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'birthdays', label: 'Birthdays' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const selectedImageIndex = filteredItems.findIndex((item) => item.id === selectedImageId);

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal from closing
    if (selectedImageIndex === null || selectedImageIndex === filteredItems.length - 1) {
      setSelectedImageId(filteredItems[0].id); // Wrap to first
    } else {
      setSelectedImageId(filteredItems[selectedImageIndex + 1].id);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal from closing
    if (selectedImageIndex === null || selectedImageIndex === 0) {
      setSelectedImageId(filteredItems[filteredItems.length - 1].id); // Wrap to last
    } else {
      setSelectedImageId(filteredItems[selectedImageIndex - 1].id);
    }
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

          {/* Gallery Grid */}
          <motion.div layout className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='group relative overflow-hidden rounded-lg cursor-pointer'
                onClick={() => setSelectedImageId(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='absolute bottom-0 left-0 right-0 p-6'>
                    <h3 className='text-xl font-semibold text-white mb-2'>{item.title}</h3>
                    <p className='text-white/80'>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImageId && (
        <div
          className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
          onClick={() => setSelectedImageId(null)} // Close modal on background click
        >
          {/* Previous Button */}
          <button
            className='absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors'
            onClick={handlePrevImage}
          >
            <ChevronLeft className='h-6 w-6' />
          </button>

          {/* Image Container */}
          <motion.div
            className='relative max-w-4xl w-full max-h-[90vh]'
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking image
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <img
              src={filteredItems.find((item) => item.id === selectedImageId)?.image}
              alt={
                filteredItems.find((item) => item.id === selectedImageId)?.title ||
                'Selected gallery item'
              }
              className='w-full h-auto max-h-[90vh] object-contain rounded-lg'
            />
            {/* Close Button */}
            <button
              className='absolute top-2 right-2 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors'
              onClick={() => setSelectedImageId(null)}
            >
              <X className='h-5 w-5' />
            </button>
          </motion.div>

          {/* Next Button */}
          <button
            className='absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors'
            onClick={handleNextImage}
          >
            <ChevronRight className='h-6 w-6' />
          </button>
        </div>
      )}
    </div>
  );
}
