"use client";
import React from "react";

import Image from "next/image";
import HeroImage from "../../../../public/assets/images/Olaseni-Babatunde-Olagbaju-4.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-lg mb-1 mt-5 font-light animate-fade-in">
          He Will Forever Be Missed
        </p>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl  uppercase font-semibold animate-fade-in-up  inline-block pb-2">
           Olaseni Babatunde<br /> Olagbaju
          </h1>

          <div className="h-[5px] bg-[#fcbb68] w-12 mx-auto rounded"></div>
        </div>

        <div className="flex flex-col mt-5 md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl mx-auto">
          <div className="text-6xl md:text-8xl font-bold animate-fade-in-left">
            1951
          </div>
          <div className="w-64 h-96 md:w-80 md:h-[500px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up relative">
            <Image
              src={HeroImage}
              alt="Olaseni-Babatunde-Olagbaju"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-6xl md:text-8xl font-bold animate-fade-in-right">
            2025
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
