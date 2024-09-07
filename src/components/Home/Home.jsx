import React from "react";
import Banner from "./Banner/Banner";
import MainCategory from "./MainCategory/MainCategory";
import AllProducts from "../AllProducts/AllProducts";

const Home = () => {
  return (
    <div className="pt-14 ">
      <Banner />
      <div className="mt-6 px-8">
        <MainCategory />
        <AllProducts handleText="Popular Product"/>
      </div>
    </div>
  );
};

export default Home;
