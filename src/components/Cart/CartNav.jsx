import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../../utils/UseContext";

const CartNav = () => {
  const { cartQuantity } = useContext(myContext);
  return (
    <nav className="w-screen flex justify-between items-center py-[15px] px-[5%] bg-slate-900 sm:space-x-20 bg-transparent sm:fixed top-0 left-0 right-0 backdrop-blur-sm">
      <div className="border border-transparent p-2 hover:border-black">
        <Link to="/">
          <img
            src="images\amazon-logo.png"
            alt="Logo"
            className="w-24"
          />
        </Link>
      </div>
      <div>
        <h4 className="font-semibold text-slate-600 text-2xl hidden sm:flex">
          Checkout ({" "}
          <span className="text-blue-400 font-normal cursor-pointer hover:underline text-xl">
            {cartQuantity} Items
          </span>{" "}
          )
        </h4>
      </div>
      <div className="flex items-center justify-center space-x-5">
        <div className="px-4 border hover:border-black">
          <Link to="/orders">
            <h3 className="font-semibold">Returns</h3>
            <h1 className="font-semibold">& orders</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CartNav;
