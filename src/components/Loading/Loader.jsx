import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500">
        <AiOutlineLoading3Quarters className="animate-spin " />
      </div>
    </div>
  );
};

export default Loader;
