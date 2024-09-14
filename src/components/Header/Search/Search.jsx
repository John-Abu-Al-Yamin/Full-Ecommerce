import React, { useState, useEffect } from "react";
import { useAppContext } from "../../../utils/context";
import { IoClose } from "react-icons/io5";
import { fetchDataFromApi } from "../../../utils/api";
import { Link } from "react-router-dom";

const Search = () => {
  const { setSerchOpen } = useAppContext(); // Corrected typo
  const [isSearchVisible, setIsSearchVisible] = useState(true); // Renamed for clarity
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleSearchClose = () => {
    setIsSearchVisible(false);
    setTimeout(() => setSerchOpen(false), 300);
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const fetchData = async () => {
    if (query.length) {
      try {
        const res = await fetchDataFromApi(
          `/api/products?populate=*&filters[title][$containsi]=${query}`
        );
        console.log("API Response:", res); // تحقق من استجابة الـ API
        setData(res.data || []); // Ensure data is always an array
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Reset data in case of error
      }
    } else {
      setData([]); // Reset data if query is empty
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  console.log(data);

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
            onChange={onChange}
            value={query}
          />
          <button
            onClick={handleSearchClose}
            className="absolute right-3 top-4 text-red-500 font-bold hover:text-red-700 transition-transform transform hover:scale-110"
            aria-label="Close search"
          >
            <IoClose size={22} />
          </button>
        </div>

        {/* Suggested Products */}
        <div className="flex-1 overflow-y-auto w-full">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(data) &&
              data.map((product) => (
                <Link to={`/single-product/${product.id}`} key={product.id} onClick={handleSearchClose}>
                <li
                  className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer p-4"
                >
                  <img
                    src={
                      process.env.REACT_APP_DEV_URL +
                      product.attributes.img.data[0].attributes.url
                    }
                    alt={product.attributes.title}
                    className="w-32 object-cover rounded-t-lg"
                  />
                  <div className="p-2">
                    <h3 className="font-bold text-base text-black mb-2">
                      {product.attributes.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-1">
                      {product.attributes.desc}
                    </p>
                  </div>
                </li>
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
