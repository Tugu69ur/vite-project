// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../home/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <p className="text-center mt-10 text-gray-500">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 shadow-lg rounded-lg bg-white">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b py-4">
          <div>
            <p className="font-semibold text-lg">{item.title}</p>
            <p className="text-gray-500">${item.price}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 text-right">
        <Link
          to="/checkout"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
