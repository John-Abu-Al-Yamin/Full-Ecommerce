import { createContext, useContext, useState } from "react";

// Create the context
export const Context = createContext();

// AppContext provider component
const AppContext = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);

  return (
    <Context.Provider value={{ openCart, setOpenCart }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);

export default AppContext;
