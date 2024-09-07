import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useAppContext } from "../../utils/context";
import productimg from "../../assets/products/earbuds-prod-1.webp";
import { IoBagHandleSharp, IoCloseSharp } from "react-icons/io5";

export default function Cart() {
  const [cart, setCart] = useState([
    // Example cart items
    // {
    //   id: 1,
    //   name: "Cozy Blanket",
    //   price: 29.99,
    //   quantity: 1,
    //   image: productimg,
    // },
    // {
    //   id: 2,
    //   name: "Autumn Mug",
    //   price: 12.99,
    //   quantity: 2,
    //   image: productimg,
    // },
    // {
    //   id: 3,
    //   name: "Fall Fragrance Candle",
    //   price: 16.99,
    //   quantity: 1,
    //   image: productimg,
    // },
  ]);
  const { openCart, setOpenCart } = useAppContext();

  const handleIncrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white text-gray-900 shadow-lg p-6 flex flex-col gap-6 transform transition-transform duration-700 ease-out ${
          openCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
          <button
            className="bg-red-500 text-white px-1 py-1 z-50 rounded-full hover:bg-red-600 transition-colors"
            onClick={() => setOpenCart(false)}
          >
            <IoCloseSharp size={24} />
          </button>
        </div>

        {/* Empty cart notification */}
        {cart.length === 0 && (
          
          <div className="fixed inset-0 flex items-center justify-center ">
            <div className=" px-4 py-2 rounded-full flex flex-col  items-center  gap-2">
              <IoBagHandleSharp size={100} className="w-28 " />

              <span className="text-lg font-semibold">No Cart</span>
            </div>
          </div>
        )}

        {/* Cart items */}
        <div className="flex-1 overflow-auto">
          <ul className="grid gap-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="grid grid-cols-[80px_1fr_auto] items-center gap-2 bg-gray-50 p-2 rounded-lg shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-medium text-gray-700">
                    {item.name}
                  </h3>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-gray-100 p-1 rounded hover:bg-gray-200 transition-colors"
                    aria-label="Decrease quantity"
                    onClick={() => handleDecrement(item.id)}
                  >
                    <FaMinus className="text-gray-800 w-3 h-3" />
                  </button>
                  <span className="text-lg font-medium text-gray-700">
                    {item.quantity}
                  </span>
                  <button
                    className="bg-gray-100 p-1 rounded hover:bg-gray-200 transition-colors"
                    aria-label="Increase quantity"
                    onClick={() => handleIncrement(item.id)}
                  >
                    <FaPlus className="text-gray-800 w-3 h-3" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart total and checkout */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-medium text-gray-700">Total:</p>
            <p className="text-2xl font-bold text-gray-800">
              ${total.toFixed(2)}
            </p>
          </div>
          <button className="bg-black text-white py-2 px-10 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
