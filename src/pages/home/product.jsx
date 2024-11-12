
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
    <div className='ml-[200px] font-bold text-3xl'>Last product</div>
    <div className="grid grid-cols-2 w-[1600px] ml-[200px] mt-10 sm:grid-cols-3 lg:grid-cols-5 gap-10 p-3">
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="border p-4 rounded shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-lg font-bold mt-2">${product.price}</p>
        </Link>
      ))}
    </div>
    </div>

  );
};

export default Products;
