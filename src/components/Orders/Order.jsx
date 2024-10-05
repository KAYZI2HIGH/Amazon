import { useContext } from "react";
import NavBar from "../NavBar";
import OrderCards from "./OrderCards";
import { myContext } from "../../utils/UseContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Order = () => {
  const { orders } = useContext(myContext);
  return (
    <section>
      <NavBar />
      <section className="mt-32 space-y-10 px-5 sm:px-[15%]">
        {orders.length === 0 ? (
          ""
        ) : (
          <h1 className="font-semibold text-3xl tracking-wide">Your Orders</h1>
        )}
        {orders.length === 0 ? (
          <div className="w-full flex items-center justify-center flex-col">
            <img
              src="images\icons\illustration-empty-cart.svg"
              width="300px"
            />
            <h1 className="text-xl font-semibold text-slate-700 tracking-wide">
              You have made no orders yet.
            </h1>
            <Link to="/">
              <Button
                variant="contained"
                className="bg-yellow-500 mt-2"
              >
                make your first order
              </Button>
            </Link>
          </div>
        ) : (
          orders.map((data) => (
            <OrderCards
              data={data}
              key={data.orderId}
            />
          ))
        )}
      </section>
    </section>
  );
};

export default Order;
