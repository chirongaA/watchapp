// src/app/shop/page.tsx
import React from 'react';
import WatchCard from '@/components/WatchCard';
import { watches } from '@/data/watches';

const ShopPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b472b] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-cormorant text-5xl font-bold text-white mb-4">
            Our Collection
          </h1>
          <p className="font-open-sans text-xl text-white max-w-2xl mx-auto">
            Explore our curated selection of luxury timepieces, each piece representing the pinnacle of craftsmanship and design.
          </p>
        </div>
      
        {/* Watch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-[#d0f0de] rounded-lg shadow-lg hover:shadow-gray-950 p-8 max-w-4xl mx-auto">
            <h2 className="font-cormorant text-3xl font-bold text-jet-500 mb-4">
              Why Choose Di VITTORIO & Elena?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              <div className="text-center">
                <div className="w-4 h-4 bg-caribbean_current-500 rounded-full flex items-center justify-center mx-auto">
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-jet-500 mb-2">
                  Premium Quality
                </h3>
                <p className="font-open-sans text-jet-600">
                  Each timepiece is crafted with the finest materials and attention to detail.
                </p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-caribbean_current-500 rounded-full flex items-center justify-center mx-auto">
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-jet-500 mb-2">
                  Expert Curation
                </h3>
                <p className="font-open-sans text-jet-600">
                  Our collection is carefully selected by jewelry experts with decades of experience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-caribbean_current-500 rounded-full flex items-center justify-center mx-auto">
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-jet-500 mb-2">
                  Timeless Elegance
                </h3>
                <p className="font-open-sans text-jet-600">
                  Classic designs that transcend trends and remain beautiful for generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;