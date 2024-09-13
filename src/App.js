import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Payment from "./components/Payment/Payment";

const App = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <ToastContainer position="top-center" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/category/:id"
          element={<Category handleText="Category" />}
        />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
          



          

      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
