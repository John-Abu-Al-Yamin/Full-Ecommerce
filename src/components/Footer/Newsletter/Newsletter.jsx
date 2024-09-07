import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import newsletter from "../../../assets/newsletter-bg.jpeg";

const Newsletter = () => {
  return (
    <section className="relative w-full h-[300px] overflow-hidden mt-8 text-black">
      <img
        src={newsletter}
        alt="Newsletter background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0  z-10" />
      <div className="relative z-20 container h-full flex flex-col items-center justify-center px-4 md:px-6 text-center text-black">
        <h2 className="text-3xl font-bold mb-3"> Newsletter</h2>
        <p className="text-lg  font-medium mb-4">
          Sign up for Latest Updates and Offers
        </p>

        <form className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-l-md bg-white text-black placeholder-gray-500 border border-r-0 border-gray-300"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md border border-blue-600 hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs  mt-2 mb-4">
          Will be used in accordance with our Privacy Policy
        </p>

        <div className="flex gap-x-4 items-center">
          <FaFacebookF className="w-8 h-8 bg-gray-800 text-white p-2 rounded-full cursor-pointer  " />
          <FaInstagram className="w-8 h-8 bg-gray-800 text-white p-2 rounded-full cursor-pointer  " />
          <FaLinkedinIn className="w-8 h-8 bg-gray-800 text-white p-2 rounded-full cursor-pointer   " />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
