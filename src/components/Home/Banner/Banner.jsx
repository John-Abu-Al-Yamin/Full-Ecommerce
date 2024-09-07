import banner from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="p-10 hero-banner h-full md:h-[500px] flex items-center bg-gray-900">
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
        {/* Text content */}
        <div className="flex flex-col items-center text-white md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">SALES</h1>
          <p className="text-sm md:text-base w-full md:w-4/5 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem quas, laboriosam dicta, soluta
          </p>
          <div className="flex gap-4">
            <button className="bg-transparent text-white border border-white px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-gray-900">
              READ MORE
            </button>
            <button className="bg-white text-black px-4 py-2 border-tr rounded transition duration-300 hover:bg-transparent hover:text-white hover:border">
              SHOP NOW
            </button>
          </div>
        </div>
        <img src={banner} alt="banner" className="w-60 md:w-80 h-auto object-cover" />
      </div>
    </div>
  );
};

export default Banner;
