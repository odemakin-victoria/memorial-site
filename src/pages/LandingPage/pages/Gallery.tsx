import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GalleryFullPage from '../../Album/index'; // adjust path as needed
import Image from "next/image";
import  Photo1 from "../../../../public/assets/images/daddy-wedding.jpg"
import Photo2 from "../../../../public/assets/images/daddy-mummy.jpg"
import  Photo3 from "../../../../public/assets/images/daddy--and-child.jpg"
import  Photo4 from "../../../../public/assets/images/cool-dad.jpg"
import  Photo5 from "../../../../public/assets/images/daddy-bride-2.jpg"
import Photo7 from "../../../../public/assets/images/daddy-sons.jpg"
import Photo6 from "../../../../public/assets/images/daddy-bride-2.jpg"
import Photo8 from "../../../../public/assets/images/daddy-family.jpg"
import Photo9 from "../../../../public/assets/images/daddy-family-2.jpg"
import Photo10 from "../../../../public/assets/images/daddy-family-4.jpg"
import Photo11 from "../../../../public/assets/images/daddy-bride-3.jpg"
import Photo12 from "../../../../public/assets/images/daddy-family-3.jpg"
import Photo13 from "../../../../public/assets/images/daddy-family-5.jpg"
import Photo14 from "../../../../public/assets/images/daddy-grandpa.jpg"
import Photo15 from "../../../../public/assets/images/daddy-family-6.jpg"
import Photo16 from "../../../../public/assets/images/daddy-family-7.jpg"
import  Photo17 from "../../../../public/assets/images/daddy-in-laws.jpg"
import Photo18 from "../../../../public/assets/images/daddy-married.jpg"
import  Photo19 from "../../../../public/assets/images/daddy-mummy-2.jpg"
import  Photo20 from "../../../../public/assets/images/daddy-son-wedding.jpg"
import  Photo21 from "../../../../public/assets/images/daddy-mummy-3.jpg"
import Photo22 from "../../../../public/assets/images/daddy-mummy-son-1.jpg"
import Photo23 from "../../../../public/assets/images/daddy-sons.jpg"
import Photo24 from "../../../../public/assets/images/daddy-wdding-party.jpg"
import Photo25 from "../../../../public/assets/images/daddy-wedding-1.jpg"
import Photo26 from "../../../../public/assets/images/daddy-wedding-3.jpg"
import Photo27 from "../../../../public/assets/images/daddy-wedding-4.jpg"
import Photo28 from "../../../../public/assets/images/Olaseni-Babatunde-Olagbaju-1.jpg"
import Photo29 from "../../../../public/assets/images/daddy-silbings.jpg"

import Photo30 from "../../../../public/assets/images/Olaseni-Babatunde-Olagbaju-4.jpg"
import Photo31 from "../../../../public/assets/images/WhatsApp Image 2025-11-18 at 21.36.48_6dcbae00.jpg"
import Photo32 from "../../../../public/assets/images/daddy-mummy-4.jpg"
import Photo33 from "../../../../public/assets/images/daddy-brother.jpg"

const galleryImages = [
  { id: 1, url: Photo1, alt: 'Family outdoor moment' },
  { id: 2, url: Photo2, alt: 'Family in water' },
  { id: 3, url: Photo3, alt: 'Indoor family time' },
  { id: 4, url: Photo4, alt: 'Sunset family' },
  { id: 5, url: Photo5, alt: 'Happy moments' },
  { id: 6, url: Photo6, alt: 'Beach time' },
  { id: 7, url: Photo7, alt: 'Family outdoor moment' },
  { id: 8, url: Photo8, alt: 'Family in water' },
  { id: 9, url: Photo9, alt: 'Indoor family time' },
  { id: 10, url: Photo10, alt: 'Sunset family' },
  { id: 11, url: Photo11, alt: 'Happy moments' },
  { id: 12, url: Photo12, alt: 'Beach time' },
  { id: 13, url: Photo13, alt: 'Family outdoor moment' },
  { id: 14, url: Photo14, alt: 'Sunset family' },
  { id: 15, url: Photo15, alt: 'Happy moments' },
  { id: 16, url: Photo16, alt: 'Beach time' },
  { id: 17, url: Photo17, alt: 'Family moment' },
  { id: 18, url: Photo18, alt: 'Wedding day' },
  { id: 19, url: Photo19, alt: 'Together' },
  { id: 20, url: Photo20, alt: 'Special day' },
  { id: 21, url: Photo21, alt: 'Family time' },
  { id: 22, url: Photo22, alt: 'With sons' },
  { id: 23, url: Photo23, alt: 'Family gathering' },
  { id: 24, url: Photo24, alt: 'Wedding party' },
  { id: 25, url: Photo25, alt: 'Wedding celebration' },
  { id: 26, url: Photo26, alt: 'Wedding moment' },
  { id: 27, url: Photo27, alt: 'Wedding day' },
  { id: 28, url: Photo28, alt: 'Portrait' },
  { id: 29, url: Photo29, alt: 'Portrait' },
  { id: 30, url: Photo30, alt: 'Portrait' },
  { id: 31, url: Photo31, alt: 'Family photo' },
  { id: 32, url: Photo32, alt: 'Together' },
];

const Section = ({ id, title, children }) => (
  <section id={id} className="py-16 bg-white">
    {children}
  </section>
);

const CarouselSlide = ({ images, currentIndex, onPrev, onNext }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(currentIndex);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setDisplayIndex(currentIndex);
      setIsTransitioning(false);
    }, 50);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Create infinite loop effect by duplicating images
  const extendedImages = [...images, ...images, ...images];
  const startIndex = images.length + displayIndex;

 return (
  <div className="relative w-full mb-8">
    {/* Carousel Container */}
    <div className="relative overflow-hidden">
      <div 
        className={`flex transition-transform duration-700 ease-in-out ${isTransitioning ? '' : 'duration-0'}`}
        style={{ 
          // Mobile: full width slides, Desktop: original 650px
          transform: window.innerWidth < 768 
            ? `translateX(-${displayIndex * 100}%)` 
            : `translateX(calc(-${startIndex * 650}px + 50vw - 325px))`
        }}
      >
        {extendedImages.map((image, idx) => (
          <div
            key={`${image.id}-${idx}`}
            className="flex-shrink-0 w-full md:w-[650px]"
          >
            <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] mx-0 md:mx-2 overflow-hidden rounded-lg">
              <Image
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-contain md:object-cover bg-gray-100"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
      <button
        onClick={onPrev}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      
      <button
        onClick={onNext}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  </div>
);
};

const GalleryPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Gallery
        </button>

        <div className="text-center mb-12">
         <p className="text-sm text-gray-600 mb-2 tracking-wide">Captured Moments</p>
<h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">A Life in Pictures</h2>

          <div className="h-[5px] bg-[#fcbb68] w-12 mx-auto rounded"></div>
        </div>

        <div className="space-y-6">
          {/* Pattern: 1 big left, 2 small right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="lg:col-span-2 h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src={galleryImages[0].url}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="grid grid-rows-2 gap-4 lg:gap-6">
              <div className="h-[150px] md:h-[200px] lg:h-[242px] overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={galleryImages[1].url}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="h-[150px] md:h-[200px] lg:h-[242px] overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={galleryImages[2].url}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Pattern: 2 small left, 1 big right (alternating) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="grid grid-rows-2 gap-4 lg:gap-6 order-2 lg:order-1">
              <div className="h-[150px] md:h-[200px] lg:h-[242px] overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={galleryImages[3].url}
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="h-[150px] md:h-[200px] lg:h-[242px] overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={galleryImages[4].url}
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="lg:col-span-2 h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg group cursor-pointer order-1 lg:order-2">
              <Image
                src={galleryImages[5].url}
                alt={galleryImages[5].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Pattern repeats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="lg:col-span-2 h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src={galleryImages[6].url}
                alt={galleryImages[6].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="grid grid-rows-2 gap-4 lg:gap-6">
              <div className="h-[150px] md:h-[200px] lg:h-[242px] overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={galleryImages[7].url}
                  alt={galleryImages[7].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="h-[150px] md:h-[200px] lg:h-[242px] overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={galleryImages[8].url}
                  alt={galleryImages[8].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGalleryPage, setShowGalleryPage] = useState(false);

  useEffect(() => {
    if (!showGalleryPage) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
      }, 4000); // Auto-slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [showGalleryPage]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

 if (showGalleryPage) {
  return <GalleryFullPage onBack={() => setShowGalleryPage(false)} />;
}
  return (
    <Section id="gallery" title="Gallery">
      <div className="text-center mb-12 animate-fade-in px-4">
  <p className="text-sm text-gray-600 mb-2 tracking-wide">Moments in Time</p>
<h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">A Glimpse Through the Years</h2>

        <div className="h-[5px] bg-[#fcbb68] w-12 mx-auto rounded"></div>
      </div>

      <CarouselSlide
        images={galleryImages}
        currentIndex={currentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* See More Button Below Carousel */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setShowGalleryPage(true)}
          className="bg-[#fcbb68] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e5a851] transition-colors shadow-md"
        >
          See More
        </button>
      </div>

     
    </Section>
  );
};

export default Gallery;