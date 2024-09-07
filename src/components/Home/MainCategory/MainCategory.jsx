import cat from "../../../assets/category/cat-1.jpg";

const MainCategory = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="rounded-lg overflow-hidden">
          <img
            src={cat}
            alt="category"
            className="w-full h-full object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={cat}
            alt="category"
            className="w-full h-full object-cover rounded-md transition-transform duration-300 transform hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={cat}
            alt="category"
            className="w-full h-full object-cover rounded-md transition-transform duration-300 transform hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={cat}
            alt="category"
            className="w-full h-full object-cover rounded-md transition-transform duration-300 transform hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
