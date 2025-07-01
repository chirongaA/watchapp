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
    <nav className="bg-caribbean-current shadow-lg border-b border-platinum-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/images/logo.png"
              alt="Di VITTORIO & Elena Logo"
              width={100}
              height={50}
              className="h-22 w-22 object-contain"
            />
            <h1 className="font-cormorant text-2xl font-bold text-white">
              Di VITTORIO & Elena Jewelers
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="font-cormorant text-lg font-medium text-jet-500 hover:text-caribbean-current-500 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="font-cormorant text-lg font-medium text-jet-500 hover:text-caribbean-current-500 transition-colors duration-200"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="font-cormorant text-lg font-medium text-jet-500 hover:text-caribbean-current-500 transition-colors duration-200"
            >
              Contact
            </Link>
            
            {/* Cart Icon */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-jet-500 hover:text-caribbean-current-500 transition-colors duration-200" />
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