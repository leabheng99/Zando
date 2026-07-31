import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data';
import { FaRegHeart } from "react-icons/fa";
import { CartContext } from '../../Context/CartContext'; // ✅ Import CartContext

const ProductDetail = () => {
  const [hoverId, setHoverId] = useState(null);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); // ✅ Get addToCart function

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-10 text-xl font-semibold">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 }); // ✅ Add product with quantity 1
  };

  return (
    <div className="container mx-auto py-6 lg:py-10 px-6 md:px-24">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2 h-[300px] lg:h-[550px] lg:px-20 relative">
          <img
            onMouseEnter={() => setHoverId(product.id)}
            onMouseLeave={() => setHoverId(null)}
            src={hoverId === product.id && product.imageURLChange ? product.imageURLChange : product.imageURL}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          {product.discount > 0 && (
            <span className="absolute top-4 left-[15%] bg-red-500 text-white px-3 py-1 font-bold rounded">
              -{(product.discount * 100).toFixed(0)}%
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          {product.discount > 0 ? (
            <p className="text-red-700 text-2xl font-semibold mb-4">
              ${(product.price * (1 - product.discount)).toFixed(2)}
              <del className="text-gray-500 ml-3">${product.price.toFixed(2)}</del>
            </p>
          ) : (
            <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          )}

          <p className="text-gray-700 mb-6">
            This is a high-quality product. Perfect for daily wear or special occasions.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={handleAddToCart} // ✅ Add to cart
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300"
            >
              Add to Cart
            </button>
            <FaRegHeart className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-300 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
