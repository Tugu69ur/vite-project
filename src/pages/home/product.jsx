import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { toast } from 'react-toastify';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        const productsData = data.products.slice(0, 30);
        setProducts(productsData);
        setFilteredProducts(productsData);
        // Extract unique categories
        const uniqueCategories = [...new Set(productsData.map(product => product.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  // Apply filters whenever category or price range changes
  useEffect(() => {
    let filtered = [...products];
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Apply price filter
    filtered = filtered.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, products]);

  const handleAddToCart = (e, product) => {
    e.preventDefault(); 
    addToCart(product);
    toast.success('Added to cart');
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-xl">Loading products...</p>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Our Products</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Products Grid - Now on the left side */}
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/products/${product.id}`}>
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src={product.thumbnail} 
                      alt={product.title} 
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/300';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-bold text-blue-600">
                        ${product.price}
                      </p>
                      <span className="text-sm text-gray-500">
                        Rating: {product.rating}⭐
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-4 pt-0">
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No products found matching your criteria.</p>
          )}
        </div>

        {/* Filters Section - Now on the right side */}
        <div className="md:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
            <h3 className="text-xl font-semibold mb-6">Filters</h3>
            
            <div className="space-y-6">
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2 font-medium">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="p-2 border rounded-md bg-white"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 mb-2 font-medium">Price Range</label>
                <div className="space-y-2">
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-600">Min Price ($)</label>
                    <input
                      type="number"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                      className="p-2 border rounded-md w-full"
                      min="0"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-600">Max Price ($)</label>
                    <input
                      type="number"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                      className="p-2 border rounded-md w-full"
                      min="0"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
