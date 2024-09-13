import React, { useEffect, useState } from "react";
import AllProducts from "../AllProducts/AllProducts";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import CategoryProduct from "../Home/MainCategory/CategoryProduct";

const Category = ({ handleText }) => {
  const { id } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]); // State to store products data
  const [categoryTitle, setCategoryTitle] = useState(""); // State to store category title

  const fetchCategoryProducts = async () => {
    try {
      const response = await fetchDataFromApi(`/api/products?populate=*&filters[categories][id]=${id}`);
      setCategoryProducts(response.data); // Update state with fetched data

      // Assuming the category title is inside the first product's category data
      const categoryData = response.data?.[0]?.attributes?.categories?.data?.[0]?.attributes;
      if (categoryData) {
        setCategoryTitle(categoryData.name); // Set the category title (assuming it's called 'name')
      }
    } catch (error) {
      console.error("Error fetching category products:", error);
    }
  };

  useEffect(() => {
    fetchCategoryProducts(); // Call the function to fetch data when component mounts or id changes
  }, [id]); // Re-run when the id changes

  return (
    <div>
      <div className="mt-16 px-6">
        
        <div className="">
          <CategoryProduct products={categoryProducts} /> 
        </div>
      </div>
    </div>
  );
};

export default Category;
