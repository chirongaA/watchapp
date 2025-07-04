'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Watch } from '@/types';

interface WishlistContextType {
  wishlist: Watch[];
  toggleWishlist: (watch: Watch) => void;
  isInWishlist: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Watch[]>([]);

  const toggleWishlist = (watch: Watch) => {
    setWishlist(prev => {
      if (prev.find(item => item.id === watch.id)) {
        return prev.filter(item => item.id !== watch.id);
      } else {
        return [...prev, watch];
      }
    });
  };

  const isInWishlist = (id: string) => {
    return wishlist.some(item => item.id === Number(id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
