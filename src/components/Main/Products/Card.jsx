import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className='w-full pb-10 px-4 sm:px-10 md:px-12 lg:px-20'>
      <h1 className=" pt-18 pb-10 text-3xl font-bold uppercase">Top Product</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-4'>
        
        {product.map((pro) => (
          <Link
            key={pro.id}
            to={`/product/${pro.id}`}
            className='w-full'
          >
            <div
              className='rounded-lg overflow-hidden shadow-md hover:shadow-lg shadow-black/20 hover:scale-105 transform transition duration-300 bg-white cursor-pointer'
              onMouseEnter={() => setHoveredId(pro.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Product Image */}
              <div className='w-full h-96 relative overflow-hidden'>
                <img
                  src={
                    hoveredId === pro.id && pro.imageURLChange
                      ? pro.imageURLChange
                      : pro.imageURL
                  }
                  alt={pro.name}
                  className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                />

                {/* Discount Tag */}
                {pro.discount > 0 && (
                  <button className='absolute top-3 left-3 font-bold bg-red-500 text-white px-3 text-lg rounded-sm'>
                    -{(pro.discount * 100).toFixed(0)}%
                  </button>
                )}
              </div>

              {/* Product Info */}
              <div className='w-full p-4'>
                <div className='flex justify-between items-center'>
                  <p className='text-red-700 font-semibold'>
                    US ${(pro.price * (1 - (pro.discount || 0))).toFixed(2)}
                    {pro.discount > 0 && (
                      <del className='ms-2 text-gray-600'>
                        US ${pro.price.toFixed(2)}
                      </del>
                    )}
                  </p>
                  <FaRegHeart className="text-xl cursor-pointer hover:scale-110 transition-transform duration-300" />
                </div>
                <h2 className='text-xl font-semibold mt-2'>{pro.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
