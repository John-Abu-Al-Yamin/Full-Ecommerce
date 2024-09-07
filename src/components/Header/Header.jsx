import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Cart from "../Cart/Cart";
import { useAppContext } from "../../utils/context";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { openCart, setOpenCart } = useAppContext();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full px-6 md:px-12 bg-slate-900 text-white z-50">
      <div className="flex justify-between items-center h-14 mx-auto">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl hover:text-gray-400"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close Menu" : "Open Menu"}
        >
          <FiMenu />
        </button>

        {/* Left (Desktop) */}
        <ul className="hidden md:flex gap-4 items-center font-medium text-xs uppercase cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>

        {/* Mobile Menu (Visible on small screens) */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-slate-900 text-white flex flex-col items-center justify-center gap-4 duration-500 ease-out ${
            open ? "translate-y-0 opacity-100 z-50" : "translate-y-full opacity-0"
          } md:hidden`}
          style={{
            transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
          }}
        >
          <button
            className="absolute top-4 right-4 text-3xl text-white hover:text-red-600"
            onClick={handleClose}
            aria-label="Close Menu"
          >
            <IoCloseCircle />
          </button>
          <ul className="flex flex-col gap-4 font-medium text-xs uppercase cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
        </div>

        {/* Center */}
        <div className="text-base md:text-xl md:font-bold cursor-pointer">
          Ecommerce.
        </div>

        {/* Right */}
        <div className="flex gap-4 items-center">
          <IoSearchOutline
            className="w-6 h-6 cursor-pointer"
            aria-label="Search"
          />
          <CiHeart className="w-6 h-6 cursor-pointer" aria-label="Favorites" />
          
          <div className="relative">
            <MdOutlineShoppingBag
              className="w-6 h-6 cursor-pointer"
              aria-label="Shopping Bag"
              onClick={() => setOpenCart(!openCart)}
            />
            <p className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex justify-center items-center">
              0
            </p>
            <div
              className={`fixed top-0 right-0 w-[85%] md:w-[50%] lg:w-[30%] h-full bg-white text-gray-900 shadow-lg p-6 transform transition-transform duration-700 ease-out ${
                openCart ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
