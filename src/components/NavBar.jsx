import { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../utils/UseContext";

const NavBar = () => {
  const { cartQuantity, setSearch } = useContext(myContext);
  return (
    <nav className="w-screen flex justify-between items-center py-[15px] sm:px-7 bg-slate-900 space-x-5 sm:space-x-20 fixed top-0 left-0 right-0 z-20">
      <div className="border border-transparent p-2 hover:border-white">
        <Link to="/">
          <img
            src="/images/amazon-logo-white.png"
            alt="Logo"
            className="w-24 hidden sm:flex"
          />
          <img
            src="/images/amazon-mobile-logo-white.png"
            alt="Logo"
            className="w-10 sm:hidden flex"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-5 sm:flex-1">
        <div className="flex flex-1 rounded-md overflow-hidden">
          <input
            type="text"
            name="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="h-8  w-full flex px-5 focus:outline-none sm:text-lg sm:h-10"
            placeholder="Search"
          />
          <button className="h-10 p-2 hidden sm:flex bg-yellow-500 min-w-16 items-center justify-center ">
            <img
              src="/images\icons\search-icon.png"
              className="h-full"
            />
          </button>
        </div>
        <div className="px-4 border  border-transparent hover:border-white hidden sm:inline-block">
          <Link to="/orders">
            <h3 className="font-semibold text-white">Returns</h3>
            <h1 className="font-semibold text-white">& orders</h1>
          </Link>
        </div>
        <div className="relative border border-transparent hover:border-white px-2 py-1">
          <Link to="/cart">
            <img
              src="/images/icons/cart-icon.png"
              alt=""
              className="w-14"
            />
          </Link>
          <h1 className="absolute top-0 right-1/3 text-amber-600 font-bold text-lg">
            {cartQuantity}
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
