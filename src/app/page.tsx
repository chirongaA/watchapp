"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden flex items-center justify-center p-4">

      {/* Background Image */}
       { <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/background_1.jpg"
          alt="Luxury watches background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/20 backdrop-blur-md" />
        </div> }

      {/* Content */}
       <div className="w-full max-w-6xl mx-auto flex items-center justify-center lg:justify-between gap-8 relative z-40">
        <div className="mx-auto">
          <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-2xl">
            Di VITTORIO & Elena
          </h1>
          <h2 className="font-cormorant text-3xl md:text-4xl font-medium text-white mb-12 drop-shadow-lg">
            Jewelers
          </h2>
          
          <p className="font-open-sans text-xl md:text-2xl text-white mb-16 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Discover timeless elegance and luxury craftsmanship in our exclusive collection of premium watches and jewelry.
          </p>

          <Link
            href="/shop"
            className="inline-block bg-caribbean-500 hover:bg-caribbean_current-600 text-white font-cormorant text-xl font-semibold px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            GO TO SHOP
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