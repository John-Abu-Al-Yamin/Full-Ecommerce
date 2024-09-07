import React from "react";
import AllProducts from "../AllProducts/AllProducts";

const Category = ({handleText}) => {
  return (
    <div>
      <div className="mt-16 px-6">
      <div className="my-4 text-lg font-medium uppercase relative ">
          {handleText }
          <div className="absolute bottom-0 left-0 w-10 h-[2px] bg-[#8e2de2]"></div>
        </div>
        <div className="">
          <AllProducts innerPage={true}/>
        </div>
      </div>
    </div>
  );
};

export default Category;
