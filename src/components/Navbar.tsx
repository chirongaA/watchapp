// src/components/Navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="bg-[#0b5633] shadow-lg h-24 w-auto ">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/images/Di Vittorio & Elena (1).png"
              alt="Di VITTORIO & Elena Logo"
              width={800}
              height={350}
              className="h-26 w-auto object-contain left-0 top-0"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex alignment-right items-top space-x-12">
            <Link
              href="/"
              className="font-cormorant text-lg h-2 font-bold text-white hover:text-black transition-colors duration-500"
            >
              HOME
            </Link>
            <Link
              href="/shop"
              className="font-cormorant text-lg font-bold text-white hover:text-black transition-colors duration-500"
            >
              COLLECTION
            </Link>
            <Link
              href="/contact"
              className="font-cormorant text-lg font-bold text-white hover:text-black transition-colors duration-500"
            >
              CONTACT
            </Link>
            
            {/* Cart Icon */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-jet-500 hover:text-white transition-colors duration-200" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;