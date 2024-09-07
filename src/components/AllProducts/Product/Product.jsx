import React, { useState } from "react";
import product from "../../../assets/products/earbuds-prod-1.webp";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Product = () => {
  const [wishlist, setWishlist] = useState(false);

  const handleWishlist = () => {
    setWishlist((prev) => !prev);
  };

  return (
    <div className="relative block overflow-hidden rounded-lg shadow-sm my-6">
      <button
        onClick={handleWishlist}
        className="absolute top-4 end-4 z-10 rounded-full bg-white p-2 text-gray-900 transition hover:text-gray-700 focus:outline-none"
      >
        <span className="sr-only">Add to Wishlist</span>
        {wishlist ? <FaHeart className="text-red-500" /> : <CiHeart />}
      </button>

      <a href="#" className="group block overflow-hidden rounded-lg">
        <div className="relative bg-gray-200 p-4">
          <img
            src={product}
            alt="Product"
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72"
          />
        </div>

        <div className="relative bg-white border-t border-gray-100 p-6">
          <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
            Robot Toy
          </h3>
          <p className="mt-1.5 text-sm text-gray-700">$14.99</p>
        </div>
      </a>
    </div>
  );
};

export default Product;
