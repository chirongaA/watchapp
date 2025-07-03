// src/app/layout.tsx
import type { Metadata } from 'next';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import './globals.css';

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
        <CartProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}