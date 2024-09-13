import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { fetchDataFromApi } from "../../utils/api";
import { useAppContext } from "../../utils/context";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { handleRemoveFromCart, handleAddToCart, handleQuantityCart, cartItems } = useAppContext();

  const baseUrl = process.env.REACT_APP_DEV_URL;

  useEffect(() => {
    if (!id) {
      console.error("Product ID is undefined.");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchProduct = async () => {
      try {
        const response = await fetchDataFromApi(`/api/products/${id}?populate=*`);
        const productData = response.data;
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, desc: description, price, img } = product.attributes;

  const productImage = img?.data?.[0]?.attributes?.url
    ? `${baseUrl}${img.data[0].attributes.url}`
    : "/path/to/placeholder.jpg";

  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleQuantityChange = (action) => {
    setQuantity((prev) => {
      const newQuantity = action === "increase" ? prev + 1 : Math.max(prev - 1, 1);
      handleQuantityCart(product.id, newQuantity); // Update quantity in the context
      return newQuantity;
    });
  };


  console.log("CartItems",cartItems)
  return (
    <div className="mt-14 px-6">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6 rounded-lg bg-white">
        <div className="grid gap-4 md:gap-10 items-start">
          <img
            src={productImage}
            alt={title}
            width={280}
            className="object-cover rounded-lg overflow-hidden hover:scale-105 transition duration-300"
          />
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl text-gray-800">{title}</h1>
            <p className="text-gray-600">{description}</p>
            <div className="flex items-center gap-x-6 mb-8">
              <div className="text-4xl font-bold text-gray-900">${price}</div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg shadow-sm">
                <button
                  className="px-3 py-1 hover:bg-gray-200 rounded-l-lg transition-colors"
                  onClick={() => handleQuantityChange("decrease")}
                >
                  -
                </button>
                <span className="text-xl font-medium px-4">{quantity}</span>
                <button
                  className="px-3 py-1 hover:bg-gray-200 rounded-r-lg transition-colors"
                  onClick={() => handleQuantityChange("increase")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex gap-x-6 items-center">
              {!isInCart ? (
                <button
                  onClick={() => handleAddToCart(product, quantity)}
                  className="px-8 py-2 bg-black text-white rounded-lg hover:bg-gray-800 shadow-xl transition-all"
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  onClick={() => handleRemoveFromCart(product)}
                  className="px-8 py-2 bg-red-600 text-white rounded-lg hover:bg-red-800 shadow-xl transition-all"
                >
                  Remove from Cart
                </button>
              )}
              <Link to="/checkout" className="px-8 py-2 bg-teal-400 text-black rounded-lg shadow-xl hover:bg-teal-500 transition-all">
                Check Out
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
