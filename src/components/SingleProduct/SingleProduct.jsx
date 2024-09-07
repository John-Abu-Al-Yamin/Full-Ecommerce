import React, { useState } from "react";
import productimg from "../../assets/products/earbuds-prod-1.webp";
import RelatedProducts from "./RelatedProducts/RelatedProducts"

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  return (
    <div className="mt-14 px-6">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6  rounded-lg bg-white">
        <div className="grid gap-4 md:gap-10 items-start">
          <img
            src={productimg}
            alt="Product Image"
            width={240}
            className="object-cover  w-full rounded-lg overflow-hidden  hover:scale-105 transition duration-300"
          />
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl text-gray-800">
              Acme Prism T-Shirt
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In id
              mollitia ex provident maiores! Similique nesciunt tenetur velit
              ratione, laboriosam reprehenderit delectus quae repudiandae iure
              nemo, aliquam aut earum sint?
            </p>
            <div className="flex items-center gap-x-6 mb-8">
              <div className="text-4xl font-bold text-gray-900">$99</div>
              <div className="flex items-center gap-2   bg-gray-100 rounded-lg shadow-sm">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 py-1  hover:bg-gray-200 rounded-l-lg transition-colors"
                >
                  -
                </button>
                <span className="text-xl font-medium px-4">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="px-3 py-1  hover:bg-gray-200 rounded-r-lg transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex gap-x-6 items-center">
              <button className="px-8 py-2 bg-black text-white rounded-lg  hover:bg-gray-800 shadow-xl transition-all">
                Add to Cart
              </button>
              <button className="px-8 py-2 bg-teal-400 text-black rounded-lg shadow-xl hover:bg-teal-500  transition-all">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <RelatedProducts  />
      </div>
    </div>
  );
};

export default SingleProduct;
