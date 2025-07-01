// src/app/cart/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, X } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-platinum-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-cormorant text-4xl font-bold text-jet-500 mb-8">
              Your Cart
            </h1>
            <div className="bg-white rounded-lg shadow-lg p-12">
              <div className="text-center">
                <div className="w-24 h-24 bg-platinum-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🛒</span>
                </div>
                <h2 className="font-cormorant text-2xl font-semibold text-jet-500 mb-4">
                  Your cart is empty
                </h2>
                <p className="font-open-sans text-jet-600 mb-8">
                  Looks like you haven&apos;t added any items to your cart yet.
                </p>
                <a
                  href="/shop"
                  className="inline-block bg-caribbean_current-500 hover:bg-caribbean_current-600 text-white font-cormorant text-lg font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                >
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-platinum-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-cormorant text-4xl font-bold text-jet-500">
            Your Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 font-open-sans font-medium transition-colors duration-200"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {cartItems.map((item) => (
                <div key={item.id} className="p-6 border-b border-platinum-300 last:border-b-0">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-cormorant text-xl font-semibold text-jet-500">
                        {item.name}
                      </h3>
                      <p className="text-caribbean_current-600 font-medium">
                        {item.brand}
                      </p>
                      <p className="font-cormorant text-lg font-bold text-indigo_dye-500 mt-1">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full bg-platinum-300 hover:bg-platinum-400 transition-colors duration-200"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full bg-platinum-300 hover:bg-platinum-400 transition-colors duration-200"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <h2 className="font-cormorant text-2xl font-bold text-jet-500 mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-open-sans text-sm text-jet-600">
                        {item.name} × {item.quantity}
                      </p>
                    </div>
                    <p className="font-open-sans font-semibold text-jet-500">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-platinum-300 pt-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-cormorant text-xl font-bold text-jet-500">
                    Total
                  </span>
                  <span className="font-cormorant text-2xl font-bold text-indigo_dye-500">
                    ${getTotalPrice().toLocaleString()}
                  </span>
                </div>

                <button className="w-full bg-caribbean_current-500 hover:bg-caribbean_current-600 text-white font-cormorant text-lg font-semibold py-3 rounded-lg transition-colors duration-200 mb-3">
                  Proceed to Checkout
                </button>
                
                <a
                  href="/shop"
                  className="block w-full text-center border border-caribbean_current-500 text-caribbean_current-500 hover:bg-caribbean_current-50 font-cormorant text-lg font-semibold py-3 rounded-lg transition-colors duration-200"
                >
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;