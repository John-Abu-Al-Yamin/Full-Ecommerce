import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useAppContext } from "../../utils/context";
import { IoBagHandleSharp, IoCloseSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, openCart, setOpenCart, handleRemoveFromCart } =
    useAppContext();
  const [cart, setCart] = useState(cartItems);

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  // Calculate cart total
  const total = cart.reduce(
    (sum, item) => sum + item.attributes.price * item.quantity,
    0
  );

  // Function to update quantity
  const handleQuantityChange = (item, action) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity:
            action === "increase"
              ? cartItem.quantity + 1
              : Math.max(cartItem.quantity - 1, 1),
        };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

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
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="px-4 py-2 rounded-full flex flex-col items-center gap-2">
              <IoBagHandleSharp size={100} className="w-28" />
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
                  src={
                    process.env.REACT_APP_DEV_URL +
                    item?.attributes?.img?.data?.[0]?.attributes?.url
                  }
                  alt={item?.attributes?.title || "Product image"}
                  className="w-16 h-16 object-cover rounded-lg"
                />

                <div className="grid gap-1">
                  <h3 className="text-sm font-medium text-gray-700">
                    {item.attributes.title}
                  </h3>
                  <p className="text-gray-500">${item?.attributes?.price}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">
                       quantity : {item?.quantity || 1}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="text-gray-500 hover:text-gray-600"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    <MdDelete size={22} className="text-red-700" />
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
            <p className="text-gray-500">${total.toFixed(2)}</p>
          </div>
          <Link to="/payment" className="bg-black text-white py-2 px-10 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
