"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import video from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden flex items-center justify-start p-8">

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/vid_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-background/20 backdrop-md"/> 
      </div>

      {/* Content */}
       <div className="relative z-40 max-w-8xl">
        <div className="mx-auto">
          <h1 className="font-cormorant md:text-7xl font-bold text-white mb-0 drop-shadow-2xl">
            Di VITTORIO & Elena
          </h1>
          <p className="font-cormorant text-2xl md:text-1xl font-medium text-white mb-12 drop-shadow-lg text-left w-half">
           Experienced Jewelers
          </p>

          <p className="font-open-sans text-xl md:text-2xl text-white max-w-5xl leading-relaxed drop-shadow-lg">
            Discover timeless elegance and luxury craftsmanship in
          </p>
           <p className="font-open-sans text-xl md:text-2xl text-white mb-16 max-w-5xl leading-relaxed drop-shadow-lg">
            our exclusive collection of premium watches.
          </p>

          <Link
            href="/shop"
            className="inline-block bg-[#c3e3e3] hover:bg-[#0b5633] text-black font-cormorant text-xl font-semibold px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            VISIT OUR COLLECTION
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-1 h-16 bg-white opacity-50 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default HomePage;