import React, { useState } from "react";
import { products_girls } from '../../../data';
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Product_Girls = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className=" mx-auto pt-6 sm:pt-0  lg:py-10 px-4 sm:px-10 md:px-12 lg:px-20">
      <div className="w-full  lg:mb-10 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl  font-bold  uppercase">Girls' Products</h1>
         <Link 
            to={'/product/girls'} 
            className="bg-pink-400 text-white py-2 px-5 md:py-3 md:px-8 inline-flex items-center gap-2 rounded-md hover:bg-pink-500 transition"
          >
            View More 
            <FaArrowRight />
          </Link>
      </div>

      <div className="flex overflow-x-scroll overflow-hidden py-10 md:pb-10 gap-6">
        {products_girls.map((product) => (
          <Link key={product.id} to={`/product/girls/${product.id}`}>
            <div
              className="bg-white w-[360px] lg:w-[300px]  rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative w-full h-96">
                <img
                  src={hoveredId === product.id && product.imageURLChange ? product.imageURLChange : product.imageURL}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />
                {product.discount > 0 && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm font-bold rounded">
                    -{(product.discount * 100).toFixed(0)}%
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <p className="text-red-700 font-semibold">
                    ${(product.price * (1 - (product.discount || 0))).toFixed(2)}
                    {product.discount > 0 && (
                      <del className="text-gray-500 ml-2">${product.price.toFixed(2)}</del>
                    )}
                  </p>
                  <FaRegHeart className="text-xl cursor-pointer hover:scale-110 transition-transform duration-300" />
                </div>
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product_Girls;
