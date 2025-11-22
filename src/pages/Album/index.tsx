import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Image from "next/image";
import Photo1 from "../../../public/assets/images/daddy-wedding.jpg"
import Photo2 from "../../../public/assets/images/daddy-mummy.jpg"
import Photo3 from "../../../public/assets/images/daddy--and-child.jpg"
import Photo4 from "../../../public/assets/images/cool-dad.jpg"
import Photo5 from "../../../public/assets/images/daddy-bride-2.jpg"
import Photo7 from "../../../public/assets/images/daddy-sons.jpg"
import Photo6 from "../../../public/assets/images/daddy-bride-2.jpg"
import Photo8 from "../../../public/assets/images/daddy-family.jpg"
import Photo9 from "../../../public/assets/images/daddy-family-2.jpg"
import Photo10 from "../../../public/assets/images/daddy-family-4.jpg"
import Photo11 from "../../../public/assets/images/daddy-bride-3.jpg"
import Photo12 from "../../../public/assets/images/daddy-family-3.jpg"
import Photo13 from "../../../public/assets/images/daddy-family-5.jpg"
import Photo14 from "../../../public/assets/images/daddy-grandpa.jpg"
import Photo15 from "../../../public/assets/images/daddy-family-6.jpg"
import Photo16 from "../../../public/assets/images/daddy-family-7.jpg"
import Photo17 from "../../../public/assets/images/daddy-in-laws.jpg"
import Photo18 from "../../../public/assets/images/daddy-married.jpg"
import Photo19 from "../../../public/assets/images/daddy-mummy-2.jpg"
import Photo20 from "../../../public/assets/images/daddy-son-wedding.jpg"
import Photo21 from "../../../public/assets/images/daddy-mummy-3.jpg"
import Photo22 from "../../../public/assets/images/daddy-mummy-son-1.jpg"
import Photo23 from "../../../public/assets/images/daddy-sons.jpg"
import Photo24 from "../../../public/assets/images/daddy-wdding-party.jpg"
import Photo25 from "../../../public/assets/images/daddy-wedding-1.jpg"
import Photo26 from "../../../public/assets/images/daddy-wedding-3.jpg"
import Photo27 from "../../../public/assets/images/daddy-wedding-4.jpg"
import Photo28 from "../../../public/assets/images/Olaseni-Babatunde-Olagbaju-1.jpg"

import Photo29 from "../../../public/assets/images/daddy-silbings.jpg"

import Photo30 from "../../../public/assets/images/Olaseni-Babatunde-Olagbaju-4.jpg"
import Photo31 from "../../../public/assets/images/WhatsApp Image 2025-11-18 at 21.36.48_6dcbae00.jpg"
import Photo32 from "../../../public/assets/images/daddy-mummy-4.jpg"
import Photo33 from "../../../public/assets/images/daddy-brother.jpg"
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
	  { id: 33, url: Photo33, alt: 'Together' },

];


const GalleryFullPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-6 md:mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Gallery
        </button>

        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm text-gray-600 mb-2 tracking-wide">Captured Moments</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">A Life in Pictures</h2>
          <div className="h-[5px] bg-[#fcbb68] w-12 mx-auto rounded"></div>
        </div>

        {/* Responsive Masonry-style Grid Gallery */}
        <div className="grid  md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryFullPage;

