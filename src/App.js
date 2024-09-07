import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category handleText="Category" />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
      </Routes>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
