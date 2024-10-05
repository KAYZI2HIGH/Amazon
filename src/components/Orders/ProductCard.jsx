import React, { useContext } from "react";
import { Button } from "@mui/material";
import { myContext } from "../../utils/UseContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, dataId }) => {
  const { handleBuyAgain } = useContext(myContext);
  const navigate = useNavigate();
  
  return (
    <section className="lg:flex justify-between space-y-3 px-8">
      <div className="flex flex-col sm:flex-row space-y-5 sm:space-x-10">
        <img
          src={product.image}
          alt="product image"
          className="w-52 sm:w-32 object-contain mx-auto sm:mx-0"
        />
        <div>
          <h1 className="font-bold ">{product.name}</h1>
          <h2>Arriving on: {product.deliveryDate}</h2>
          <h2>Quantity: {product.quantity}</h2>
          <Button
            variant="contained"
            className="bg-yellow-400 hover:bg-yellow-500 text-black mt-2 rounded-lg capitalize mb-5"
            onClick={() => {
              handleBuyAgain(product);
            }}
            disableElevation
          >
            <img
              src="images\icons\buy-again.png"
              className="size-5 mr-2"
            />
            Buy it again
          </Button>
        </div>
      </div>
      <Button
        variant="outlined"
        className="flex mx-auto lg:mx-0 w-full lg:w-fit h-fit bg-transparent text-black border-slate-400 shadow-md"
        onClick={() => {
          navigate(`/orders/${dataId}/${product.id}`);
        }}
      >
        track package
      </Button>
    </section>
  );
};

export default ProductCard;
