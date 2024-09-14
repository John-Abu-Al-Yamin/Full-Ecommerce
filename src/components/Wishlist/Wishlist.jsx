import React, { useEffect } from "react";
import { useAppContext } from "../../utils/context";
import { IoHeartDislikeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishList, removeItemFromWishList } = useAppContext();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mt-14 mb-6 text-center">My Wishlist</h1>
      {wishList.length === 0 ? (
        <div className="flex items-center justify-center gap-x-4">
          <IoHeartDislikeSharp size={70} color="red" />
          <p className="text-gray-500 font-semibold text-lg">
            Your wishlist is empty.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {wishList.map((item) => (
            <div key={item.id} className="border rounded-lg shadow-sm p-4 flex flex-col">
              <Link to={`/single-product/${item.id}`} className="flex-grow flex flex-col justify-between">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url}
                    alt={item.attributes.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h2 className="text-lg font-semibold mb-2">{item.attributes.title}</h2>
                  <span className="text-lg font-bold text-gray-800">${item.attributes.price}</span>
                </div>
              </Link>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the event from bubbling up to the Link component
                  removeItemFromWishList(item.id);
                }}
                className="mt-4 bg-gray-100 text-red-600 w-14 py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
              >
                <FaHeart />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
