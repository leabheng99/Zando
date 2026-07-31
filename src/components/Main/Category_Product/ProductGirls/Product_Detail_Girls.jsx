import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products_girls } from '../../../data';
import { FaRegHeart } from "react-icons/fa";
import { CartContext } from "../../../Context/CartContext"; // ✅ Import Context

const Product_Detail_Girls = () => {
  const [hoverId,setHoverId] = useState(null);
  const { id } = useParams();
  const product = products_girls.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext); // ✅ useContext

  if (!product) {
    return <h2 className="text-center text-2xl mt-10">Product not found</h2>;
  }

  return (
    <div className="container mx-auto py-6 lg:py-10 px-6 md:px-24">
      <div className="flex flex-col md:flex-row gap-3 lg:gap-10">
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
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center gap-4 mb-4">
            <p className="text-2xl text-red-700 font-semibold">
              ${(product.price * (1 - (product.discount || 0))).toFixed(2)}
            </p>
            {product.discount > 0 && (
              <del className="text-gray-500 text-lg">${product.price.toFixed(2)}</del>
            )}
          </div>
          <p className="mb-6 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => addToCart(product)} // ✅ Add to Cart Action
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

export default Product_Detail_Girls;
