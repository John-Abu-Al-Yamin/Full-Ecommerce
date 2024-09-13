import { Link } from "react-router-dom";

const MainCategory = ({ categoriesData }) => {
  const getStrapiMediaUrl = (url) => {
    return `${
      process.env.REACT_APP_BACKEND_URL || "http://localhost:1337"
    }${url}`;
  };


  return (
    <div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
        {categoriesData.data.map((category) => {
          const imageUrl = getStrapiMediaUrl(
            category.attributes.img.data.attributes.formats.medium.url
          );
          return (

            <Link to={`/category/${category.id}`}>
            <div
              key={category.id}
              className="rounded-lg overflow-hidden"
            >
              <img
                src={imageUrl}
                alt={category.attributes.title}
                className="w-full h-full object-cover rounded-md transition-transform duration-300 transform hover:scale-110 cursor-pointer"
              />
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainCategory;
