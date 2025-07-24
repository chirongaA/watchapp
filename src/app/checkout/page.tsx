'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
//import { useRouter } from 'next/navigation';

const CheckoutPage: React.FC = () => {
  const { cartItems, getTotalPrice } = useCart();
  //const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/pesapal/createOrder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer: formData,
        cart: cartItems,
        total: getTotalPrice()
      })
    });

    const data = await response.json();
    if (data.redirectUrl) {
      window.location.href = data.redirectUrl;
    } else {
      alert('Payment initiation failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="p-3 border rounded col-span-full"
          required
        />

        <div className="col-span-full mt-4">
          <h2 className="text-xl font-semibold mb-2">Cart Summary</h2>
          <ul className="mb-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} x{item.quantity}</span>
                <span>KES {item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold">Total: KES {getTotalPrice()}</p>
        </div>

        <button
          type="submit"
          className="col-span-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded shadow"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
