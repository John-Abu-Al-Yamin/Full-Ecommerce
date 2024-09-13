import React, { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "./api";
import { toast } from "react-toastify";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);

  const { isLoading: categoriesLoading, data: categoriesData } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchDataFromApi("/api/categories?populate=*"),
  });

  const { isLoading: productsLoading, data: productsData } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchDataFromApi("/api/products?populate=*"),
  });

  useEffect(() => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.attributes.price * item.quantity,
      0
    );
    setCartSubtotal(subtotal);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      let items = [...prevItems];
      let index = items.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        items[index].quantity += quantity;
        toast.info(`Updated quantity of ${product.attributes.title} in cart.`);
      } else {
        items.push({ ...product, quantity });
        toast.success(`${product.attributes.title} added to cart!`);
      }

      setCartCount((prevCount) => prevCount + quantity);
      return items;
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) => {
      let items = prevItems.filter((item) => item.id !== product.id);
      let removedItem = prevItems.find((item) => item.id === product.id);

      if (removedItem) {
        setCartCount((prevCount) => prevCount - removedItem.quantity);
        toast.error(`${removedItem.attributes.title} removed from cart.`);
      }

      return items;
    });
  };

  const handleQuantityCart = (productId, newQuantity) => {
    setCartItems((prevItems) => {
      let items = prevItems.map((item) => {
        if (item.id === productId) {
          if (item.quantity < newQuantity) {
            toast.info(`Increased quantity of ${item.attributes.title} to ${newQuantity}.`);
          } else if (item.quantity > newQuantity) {
            toast.info(`Decreased quantity of ${item.attributes.title} to ${newQuantity}.`);
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      setCartCount(items.reduce((total, item) => total + item.quantity, 0));
      return items;
    });
  };

  return (
    <Context.Provider
      value={{
        openCart,
        setOpenCart,
        searchOpen,
        setSearchOpen,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubtotal,
        setCartSubtotal,
        categoriesLoading,
        categoriesData,
        productsLoading,
        productsData,
        handleRemoveFromCart,
        handleAddToCart,
        handleQuantityCart
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);

export default AppContext;
