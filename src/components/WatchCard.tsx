// src/components/WatchCard.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, ShoppingCart } from 'lucide-react';
import { Watch } from '@/types';
import { useCart } from '@/context/CartContext';

interface WatchCardProps {
  watch: Watch;
}

const WatchCard: React.FC<WatchCardProps> = ({ watch }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCart = () => {
    addToCart(watch);
  };

  return (
    <div className="bg-[#ffffff] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <Image
          src={watch.image}
          alt={watch.name}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md transition-colors duration-200"
        >
          <Heart
            className={`h-5 w-5 ${
              isLiked ? 'text-red-500 fill-current' : 'text-gray-400'
            }`}
          />
        </button>
      </div>
      
      <div className="p-4">
        <div className="mb-3">
          <h3 className="font-cormorant text-xl font-semibold text-jet-500 mb-1">
            {watch.name}
          </h3>
          <p className="text-sm text-caribbean_current-600 font-medium">
            {watch.brand}
          </p>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-cormorant text-2xl font-bold text-indigo_dye-500">
            ${watch.price.toLocaleString()}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="bg-[#3c6e71] hover:bg-black text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="font-medium">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchCard;