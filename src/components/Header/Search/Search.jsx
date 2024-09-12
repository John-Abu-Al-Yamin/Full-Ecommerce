import React, { useState } from "react";
import { useAppContext } from "../../../utils/context";
import imgproduct from "../../../assets/products/earbuds-prod-1.webp";
import { IoClose } from "react-icons/io5";

const Search = () => {
  const { setSerchOpen } = useAppContext(); // Corrected typo
  const [isSearchVisible, setIsSearchVisible] = useState(true); // Renamed for clarity

  const handleSearchClose = () => {
    setIsSearchVisible(false);
    setTimeout(() => setSerchOpen(false), 300);
  };

  const products = [
    { id: 1, title: "Suggested Product 1", description: "This is a short description of the product.", image: imgproduct },
    { id: 2, title: "Suggested Product 2", description: "This is a short description of the product.", image: imgproduct },
    { id: 3, title: "Suggested Product 3", description: "This is a short description of the product.", image: imgproduct },
    { id: 4, title: "Suggested Product 4", description: "This is a short description of the product.", image: imgproduct },
    { id: 5, title: "Suggested Product 5", description: "This is a short description of the product.", image: imgproduct },
    { id: 6, title: "Suggested Product 6", description: "This is a short description of the product.", image: imgproduct },
    // Add more products as needed
  ];

  return (
    <div
      className={`fixed inset-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isSearchVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`relative bg-white w-full max-w-5xl h-auto max-h-[90vh] p-6 rounded-lg shadow-lg flex flex-col transition-transform duration-300 ${
          isSearchVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Search Input */}
        <div className="relative w-full mb-6">
          <input
            type="text"
            className="w-full text-black p-4 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            placeholder="Search for products..."
          />
          <button
            onClick={handleSearchClose}
            className="absolute right-3 top-4 text-red-500 font-bold hover:text-red-700 transition-transform transform hover:scale-110"
            aria-label="Close search"
          > 
            <IoClose size={22}/>

          </button>
        </div>

        {/* Suggested Products */}
        <div className="flex-1 overflow-y-auto w-full">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <li
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer p-4"
              >
                <img src={product.image} alt={product.title} className="w-32 object-cover rounded-t-lg" />
                <div className="p-2">
                  <h3 className="font-bold text-base text-black mb-2">{product.title } </h3>
                  <p className="text-gray-600 text-sm line-clamp-1">{product.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
