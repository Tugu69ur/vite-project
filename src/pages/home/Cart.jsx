import React from 'react';
import { useCart } from '../home/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateItemTotal = (item) => {
    return item.price * (item.quantity || 1);
  };

  const total = cart.reduce((sum, item) => sum + calculateItemTotal(item), 0);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
    toast.success('Item removed from cart');
  };

  const handleCheckout = () => {
    toast.info('Checkout functionality coming soon!');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Shopping Cart</h1>
        <p className="text-gray-500 mb-6">Your cart is empty.</p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Shopping Cart ({cart.length} items)</h1>
        </div>

        <div className="divide-y divide-gray-200">
          {cart.map((item) => (
            <div key={item.id} className="p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-32 h-32 flex-shrink-0">
                <img 
                  src={item.image || item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>
                )}
                <div className="mt-2 text-sm text-gray-500">
                  {item.brand && <span className="mr-4">Brand: {item.brand}</span>}
                  {item.category && <span>Category: {item.category}</span>}
                </div>
                
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <div className="flex items-center border rounded-lg">
                    <button 
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-x">{item.quantity || 1}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  
                  <p className="text-xl font-bold text-blue-600">
                    ${calculateItemTotal(item).toFixed(2)}
                  </p>
                  
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg text-gray-600">Subtotal:</span>
            <span className="text-2xl font-bold text-gray-800">${total.toFixed(2)}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/" 
              className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 text-center rounded-lg hover:bg-gray-300 transition-colors duration-300"
            >
              Continue Shopping
            </Link>
            <button 
              onClick={handleCheckout}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
