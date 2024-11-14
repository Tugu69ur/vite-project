import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify';
import { useCart } from './CartContext';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching product:', error));
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success('Added to cart');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 shadow-lg rounded-lg bg-white">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 overflow-hidden rounded-lg">
          <img
            src={product.images || "https://via.placeholder.com/300"}
            alt={product.title}
            onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-lg text-gray-500 mt-4 mb-6">{product.description}</p>
          
          <div className="flex items-center justify-between mb-4">
            <p className="text-2xl font-bold text-gray-900">${product.price}</p>
            <span className="text-yellow-400 text-lg font-semibold flex items-center">
              ⭐ {product.rating} / 5
            </span>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-sm text-gray-600"><strong>Brand:</strong> {product.brand}</p>
            <p className="text-sm text-gray-600"><strong>Category:</strong> {product.category}</p>
            <p className="text-sm text-gray-600"><strong>Stock:</strong> {product.stock} available</p>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <button className="px-6 py-3 rounded border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
