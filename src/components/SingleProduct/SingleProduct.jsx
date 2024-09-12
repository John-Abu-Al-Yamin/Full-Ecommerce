import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { fetchDataFromApi } from "../../utils/api";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const baseUrl = "http://localhost:1337";

  useEffect(() => {
    if (!id) {
      console.error("Product ID is undefined.");
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await fetchDataFromApi(
          `/api/products/${id}?populate=*`
        );
        const productData = response.data;
        setProduct(productData);
        console.log(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }, []);


  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, desc: description, price, img } = product.attributes;

  const productImage = img?.data?.[0]?.attributes?.url
    ? `${baseUrl}${img.data[0].attributes.url}`
    : "/path/to/placeholder.jpg";

  return (
    <div className="mt-14 px-6">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6  rounded-lg bg-white">
        <div className="grid gap-4 md:gap-10 items-start">
          <img
            src={productImage}
            alt={title}
            width={240}
            className="object-cover w-full rounded-lg overflow-hidden hover:scale-105 transition duration-300"
          />
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl text-gray-800">
              {title}
            </h1>
            <p className="text-gray-600">{description}</p>
            <div className="flex items-center gap-x-6 mb-8">
              <div className="text-4xl font-bold text-gray-900">${price}</div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg shadow-sm">
                <button className="px-3 py-1 hover:bg-gray-200 rounded-l-lg transition-colors">
                  -
                </button>
                <span className="text-xl font-medium px-4">1</span>
                <button className="px-3 py-1 hover:bg-gray-200 rounded-r-lg transition-colors">
                  +
                </button>
              </div>
            </div>
            <div className="flex gap-x-6 items-center">
              <button className="px-8 py-2 bg-black text-white rounded-lg hover:bg-gray-800 shadow-xl transition-all">
                Add to Cart
              </button>
              <button className="px-8 py-2 bg-teal-400 text-black rounded-lg shadow-xl hover:bg-teal-500 transition-all">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
