import { Card, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { myContext } from "../../utils/UseContext";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const { cartQuantity, totalCartAmount, shippingFee, tax, handlePlaceOrders } =
    useContext(myContext);
  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      className="flex-grow-[2] h-fit p-4 space-y-5"
    >
      <h1 className="text-lg font-semibold">Order Summary:</h1>
      <div className="p-[1px] border-b">
        <div className="flex justify-between">
          <p>Items ({cartQuantity}):</p>
          <p>${(totalCartAmount / 100).toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping and Handling:</p>
          <p>${(shippingFee / 100).toFixed(2)}</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p>Total before TAX:</p>
          <p>
            $
            {((Number(totalCartAmount) + Number(shippingFee)) / 100).toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between border-b">
          <p>Estimated TAX (10%):</p>
          <p>${(tax / 100).toFixed(2)}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <Typography
          variant="body1"
          color="error"
          className="font-bold"
        >
          Order Total
        </Typography>
        <Typography
          variant="body1"
          color="error"
          className="font-bold tracking-wide"
        >
          $
          {(
            (Number(totalCartAmount) + Number(shippingFee) + Number(tax)) /
            100
          ).toFixed(2)}
        </Typography>
      </div>
      <Button
        variant="contained"
        className="bg-yellow-400 w-full capitalize"
        onClick={() => {
          handlePlaceOrders();
          navigate("/feedback");
        }}
      >
        Place your order
      </Button>
    </Card>
  );
};

export default OrderSummary;
