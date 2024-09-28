
import CartCard from "./CartCard";
import React, { useContext } from "react";
import { myContext } from "../../utils/UseContext";

const CartProducts = () => {
  const { cartData } = useContext(myContext);

  return (
    <section className="flex-grow-[2]">
      <section>
        {cartData.map((data) => (
          <CartCard
            data={data}
            key={data.id}
          />
        ))}
      </section>
    </section>
  );
};

export default CartProducts;
