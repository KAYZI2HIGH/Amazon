import Typography from "@mui/material/Typography";
import CartNav from "./CartNav";
import CartProducts from "./CartProducts";
import OrderSummary from "./OrderSummary";
import { useContext } from "react";
import { myContext } from "../../utils/UseContext";
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'

const Cart = () => {
  const { cartData } = useContext(myContext);

  return (
    <section className=" max-h-screen flex flex-col">
      <CartNav />
      <main className=" px-[5%] mt-10 sm:mt-32">
        {cartData.length === 0 ? (
          <div className="w-full flex items-center justify-center flex-col">
            <img
              src="images\icons\illustration-empty-cart.svg"
              width="300px"
            />
            <h1 className="text-xl font-semibold text-slate-700 tracking-wide">
              There is no Item in the Cart
            </h1>
            <Link to="/">
              <Button
                variant="contained"
                className="bg-yellow-500 mt-2"
              >
                Go to Shop
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <Typography
              variant="h5"
              color="initial"
              className="font-semibold tracking-wide mb-5"
            >
              Review your order:
            </Typography>
            <div className="flex flex-col space-x-5 flex-1 lg:flex-row">
              <CartProducts />
              <OrderSummary />
            </div>
          </>
        )}
      </main>
    </section>
  );
};

export default Cart;
