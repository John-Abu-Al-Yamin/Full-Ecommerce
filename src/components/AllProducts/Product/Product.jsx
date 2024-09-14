import { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../utils/context";

const Product = ({ productsData }) => {
  const baseUrl = process.env.REACT_APP_DEV_URL;

  const { wishList, handleWishList } = useAppContext();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

console.log("wishList",wishList)

  return (
    <>
      {productsData?.data.map((product) => {
        const { title, price, img } = product.attributes;
        const productImage = img?.data[0]?.attributes?.url
          ? `${baseUrl}${img.data[0].attributes.url}`
          : "/path/to/placeholder.jpg"; // Fallback for missing images

        const isInWishList = wishList.some((item) => item.id === product.id);

        return (
          <div
            key={product.id}
            className="relative block overflow-hidden rounded-lg shadow-sm my-6"
          >
            {/* Wishlist Button */}
            <button
              onClick={() => handleWishList(product)}
              className={`absolute top-4 end-4 z-10 rounded-full bg-white p-2 transition focus:outline-none ${
                isInWishList ? "text-red-600" : "text-gray-900 hover:text-gray-700"
              }`}
            >
              <span className="sr-only">
                {isInWishList ? "Remove from Wishlist" : "Add to Wishlist"}
              </span>
              {isInWishList ? <FaHeart /> : <CiHeart />}
            </button>

            <Link
              to={`/single-product/${product.id}`}
              className="group block overflow-hidden rounded-lg"
            >
              <div className="relative bg-gray-200 p-4">
                <img
                  src={productImage}
                  alt={title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72"
                />
              </div>

              <div className="relative bg-white border-t border-gray-100 p-6">
                <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-700">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(price)}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Product;
