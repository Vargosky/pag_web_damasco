'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  { src: '/img/img1.png', alt: 'Torta tres leches' },
  { src: '/img/panquequeNaranja.heic', alt: 'Brazo de reina' },
  { src: '/img/platano.heic', alt: 'Kuchen de frambuesa' },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            style={{ objectFit: 'contain' }}
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-6 text-2xl font-semibold">
            {img.alt}
          </div>
        </div>
      ))}
    </div>
  );
}
