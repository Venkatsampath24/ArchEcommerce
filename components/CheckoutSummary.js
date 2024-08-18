'use client';

import React from 'react';
import Image from 'next/image';

const CheckoutSummary = ({ cart, calculateSubtotal }) => {
  const subtotal = calculateSubtotal();
  const shipping = 50; // Example shipping cost
  const total = subtotal + shipping;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex items-center p-4 border-b border-gray-200">
              <Image
                src={item.image} // Assuming item.image contains the URL
                alt={item.title}
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">Price: ₹{item.price.toFixed(2)}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal:</span>
          <span className="text-gray-800 font-semibold">₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Shipping:</span>
          <span className="text-gray-800 font-semibold">₹{shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-800 font-bold">Total:</span>
          <span className="text-gray-800 font-bold">₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
