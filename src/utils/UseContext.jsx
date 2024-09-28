import React, { createContext, useEffect, useState } from "react";
import products from "../data/data.js";
import cart from "../data/cart.js";
import deliveryOptionData from "../data/deliveryOption.js";

export const myContext = createContext();

export const UseContext = ({ children }) => {
  const [productData, setProductData] = useState(products);
  const [cartData, setcartData] = useState(cart);
  const [deliveryOption, setDeliveryOption] = useState(deliveryOptionData);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [quantityChanged, setQuantityChanged] = useState(false);
  const [totalCartAmount, setTotalCartAmount] = useState(0);
  const [shippingFee, setShippingFee] = useState(494);
  const [tax, setTax] = useState(477);

  useEffect(() => {
    let quantity = 0;
    let totalAmount = 0;
    let eachAmount = 0;
    let totalShippingFee = 0;

    cartData.map((data) => {
      quantity += data.quantity;
      eachAmount = data.quantity * data.priceCents;
      totalAmount += eachAmount;

      deliveryOption.map((option) => {
        if (data.deliveryOptionId === option.id) {
          totalShippingFee += option.priceCents;
        }
      });
    });
    setShippingFee(totalShippingFee)
    setCartQuantity(quantity);
    setTotalCartAmount(totalAmount);
  }, [cartData, quantityChanged]);

  const addToCart = (item) => {
    let matchData;
    const selectorValue = document.getElementById(`selector-${item.id}`).value;

    cartData.find((data) => {
      if (data.id === item.id) {
        matchData = data;
        data.quantity += Number(selectorValue);
        setQuantityChanged(true);
      }
    });
    if (!matchData) {
      setcartData([
        {
          id: item.id,
          image: item.image,
          name: item.name,
          priceCents: item.priceCents,
          quantity: Number(selectorValue),
          deliveryOptionId: "1",
        },
        ...cartData,
      ]);
    }

    document.getElementById(item.id).innerHTML = `<img
            src="images/icons/checkmark.png"
            width='20px'
          />
          Added`;
    setTimeout(() => {
      document.getElementById(item.id).innerHTML = "";
    }, [1000]);

    let quantity = 0;
    cartData.map((data) => {
      quantity += data.quantity;
    });
    setCartQuantity(quantity);
  };

  const handleDelete = (id) => {
    setcartData(cartData.filter((deleteCart) => deleteCart.id !== id));
  };

  return (
    <myContext.Provider
      value={{
        productData,
        setProductData,
        cartData,
        setcartData,
        deliveryOption,
        addToCart,
        cartQuantity,
        handleDelete,
        totalCartAmount,
        shippingFee,
        tax,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
