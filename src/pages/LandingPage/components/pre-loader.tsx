import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Loader Component
const Loader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold uppercase  animate-pulse">
          Olaseni Babatunde Olagbaju
        </h1>
				          <div className="h-[5px] bg-[#fcbb68] w-12 mx-auto rounded"></div>

      </div>
    </div>
  );
};
export default Loader;
