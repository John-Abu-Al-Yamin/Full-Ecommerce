import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { fetchDataFromApi } from "./api";

// Create the context
export const Context = createContext();

// AppContext provider component
const AppContext = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [serchOpen, setSerchOpen] = useState(false);

  // Get Categories data
  const {
    isLoading: categoriesLoading,
    error: categoriesError,
    data: categoriesData,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchDataFromApi("/api/categories?populate=*"),
  });

  // Get Product data
  const {
    isLoading: productsLoading,
    error: productsError,
    data: productsData,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchDataFromApi("/api/products?populate=*"),
  });

  return (
    <Context.Provider
      value={{
        openCart,
        setOpenCart,
        serchOpen,
        setSerchOpen,
        // Categories
        categoriesLoading,
        categoriesError,
        categoriesData,
        // Products
        productsLoading,
        productsError,
        productsData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);

export default AppContext;
