// src/app/layout.tsx

import type { Metadata } from 'next';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import { WishlistProvider } from '@/context/WishlistContext';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { ReduxProvider } from "./ReduxComponent"

export const metadata: Metadata = {
  title: 'Di VITTORIO & Elena Jewelers',
  description: 'Luxury watches and jewelry collection',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#d9d9d9]-900 min-h-screen">
        <Toaster position="bottom-right" />
          <WishlistProvider>
            <CartProvider>
              <Navbar />
              <main className="flex-1">
                <ReduxProvider>
                {children}
                </ReduxProvider>
              </main>
            </CartProvider>
          </WishlistProvider>
        <footer className="bg-[#1a1b1a] text-white py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Di VITTORIO & Elena Jewelers.</p>
        </footer>
      </body>
    </html>
  );
}