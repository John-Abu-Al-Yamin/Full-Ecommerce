import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import MainCategory from "./MainCategory/MainCategory";
import AllProducts from "../AllProducts/AllProducts";
import Loader from "../Loading/Loader";
import { useAppContext } from "../../utils/context";

const Home = () => {
  const {categoriesLoading, categoriesError, categoriesData } = useAppContext();

  if (categoriesLoading)
    return (
      <div className="flex items-center justify-center">
        <Loader /> 
      </div>
    );
  if (categoriesError) return <div>Error: {categoriesError.message}</div>;

  // console.log(data);

  return (
    <div className="pt-14 ">
      <Banner />
      <div className="mt-6 px-8">
        <MainCategory categoriesData={categoriesData} />
        <AllProducts handleText="Popular Product" />
      </div>
    </div>
  );
};

export default Home;
