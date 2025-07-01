// src/types/index.ts
export interface Watch {
  id: number;
  name: string;
  price: number;
  image: string;
  brand: string;
}

export interface CartItem extends Watch {
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (watch: Watch) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  clearCart: () => void;
}

export interface ContactFormData {
  name: string;
  email: string;
  feedback: string;
}