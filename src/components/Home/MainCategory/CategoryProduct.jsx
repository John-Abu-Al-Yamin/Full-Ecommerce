import { useEffect } from "react";
import { Link } from "react-router-dom";

const CategoryProduct = ({ products = [] }) => {
  const baseUrl = process.env.REACT_APP_DEV_URL;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  console.log(products)


  return (
    <>
      <div className="my-6 text-2xl font-bold relative ">
      {products?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title || "Category"}
      <div className="absolute -bottom-1 left-0 w-16 h-[3px] bg-[#8e2de2]"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {products.length > 0 ? (
          products.map((product) => {
            const { id, attributes } = product;
            const { title, price, img } = attributes;

            // Check if the image is available
            const productImage = img?.data?.[0]?.attributes?.url
              ? `${baseUrl}${img.data[0].attributes.url}`
              : "/path/to/placeholder.jpg";

            return (
              <Link to={`/single-product/${id}`} key={id}>
                <div className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={productImage}
                    alt={title}
                    className="w-40 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-base font-semibold text-gray-800 mb-2">
                    {title}
                  </h2>
                  <p className="text-lg text-gray-600 font-medium mb-4">
                    ${price}
                  </p>
                </div>
              </Link>
            );
          })
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </>
  );
};

export default CategoryProduct;
