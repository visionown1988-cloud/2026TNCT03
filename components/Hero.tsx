import React from 'react';
import { HERO_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="w-full flex flex-col shadow-lg">
      {/* Image Section - Original Image without overlay */}
      <div className="w-full bg-black">
        <img
          src={HERO_IMAGE_URL}
          alt="2026大桃園盃全國象棋團體錦標賽 Banner"
          className="w-full h-auto object-contain md:object-cover"
        />
      </div>
      
      {/* Title/Text Section - Moved below image */}
      <div className="bg-xiangqi-black text-white py-12 px-4 text-center border-t border-xiangqi-gold border-b-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 tracking-widest">
            棋逢敵手，將帥爭鋒
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 font-medium tracking-wide mb-6">
            2026 大桃園盃全國象棋團體錦標賽
          </p>
          
          <div className="flex items-center justify-center gap-4 opacity-80">
            <div className="h-px w-8 md:w-16 bg-xiangqi-gold"></div>
            <p className="text-xiangqi-gold font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Taoyuan City • 2026
            </p>
            <div className="h-px w-8 md:w-16 bg-xiangqi-gold"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;