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
  const [editQuantity, setEditQuantity] = useState(false);

  useEffect(() => {
    const getLocalStorage = window.localStorage.getItem("cartData");
    setcartData(JSON.parse(getLocalStorage));
  }, []);

  useEffect(() => {
    let quantity = 0;
    let totalAmount = 0;
    let eachAmount = 0;
    let totalShippingFee = 0;

    window.localStorage.setItem("cartData", JSON.stringify(cartData));

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
    setShippingFee(totalShippingFee);
    setTax((totalAmount + totalShippingFee) * (10 / 100));
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

  const handleUpdate = (id) => {
    document.getElementById(`button-${id}`).classList.add("hidden");
    document.getElementById(`edit-${id}`).classList.replace("hidden", "flex");
  };
  const handleUpdateIncrement = (id) => {
    setcartData((currentState) => {
      return currentState.map((eachState) => {
        if (eachState.id === id) {
          return { ...eachState, quantity: eachState.quantity + 1 };
        } else {
          return { ...eachState };
        }
      });
    });
  };
  const handleUpdateDecrement = (id) => {
    setcartData((currentState) => {
      return currentState.map((eachState) => {
        if (eachState.id === id) {
          return { ...eachState, quantity: eachState.quantity - 1 };
        } else {
          return { ...eachState };
        }
      });
    });
  };
  const doneUpdating = (id) => {
    document.getElementById(`edit-${id}`).classList.add("hidden");
    document.getElementById(`button-${id}`).classList.replace("hidden", "flex");
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
        handleUpdate,
        handleUpdateIncrement,
        handleUpdateDecrement,
        doneUpdating,
        totalCartAmount,
        shippingFee,
        tax,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
