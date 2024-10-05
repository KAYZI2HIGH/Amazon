import React, { createContext, useEffect, useState } from "react";
import products from "../data/data.js";
import deliveryOptionData from "../data/deliveryOption.js";
import { uid } from "uid";

export const myContext = createContext();

export const UseContext = ({ children }) => {
  const [productData, setProductData] = useState(products);
  const [cartData, setcartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );
  const [search, setSearch] = useState('');
  const [deliveryOption, setDeliveryOption] = useState(deliveryOptionData);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [quantityChanged, setQuantityChanged] = useState(false);
  const [totalCartAmount, setTotalCartAmount] = useState(0);
  const [shippingFee, setShippingFee] = useState(494);
  const [tax, setTax] = useState(477);
  const [editQuantity, setEditQuantity] = useState(false);

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

  useEffect(() => {
    window.localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addToCart = (item) => {
    let matchData;
    const selectorValue = document.getElementById(`selector-${item.id}`).value;

    cartData.find((data) => {
      if (data.id === item.id) {
        matchData = data;
        setcartData((currentState) => {
          return currentState.map((eachState) => {
            if (eachState.id === data.id) {
              return {
                ...eachState,
                quantity: eachState.quantity + Number(selectorValue),
              };
            } else {
              return { ...eachState };
            }
          });
        });
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
          if (eachState.quantity === 0) {
            handleDelete(id);
          } else {
            return { ...eachState, quantity: eachState.quantity - 1 };
          }
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
  const handleBuyAgain = (item) => {
    let matchData;

   cartData.find((data) => {
     if (data.id === item.id) {
       matchData = data;
       setcartData((currentState) => {
         return currentState.map((eachState) => {
           if (eachState.id === data.id) {
             return {
               ...eachState,
               quantity: eachState.quantity + 1,
             };
           } else {
             return { ...eachState };
           }
         });
       });
     }
   });
    if (!matchData) {
      setcartData([
        {
          id: item.id,
          image: item.image,
          name: item.name,
          priceCents: item.priceCents,
          quantity: 1,
          deliveryOptionId: "1",
        },
        ...cartData,
      ]);
    }
    let quantity = 0;
    cartData.map((data) => {
      quantity += data.quantity;
    });
    setCartQuantity(quantity);
  };

  const handlePlaceOrders = () => {
    setOrders([
      {
        orderId: uid(36),
        total: totalCartAmount + shippingFee + tax,
        orderDate: "August 5",
        products: cartData,
      },
      ...orders,
    ]);
    setTimeout(() => {
      setcartData([]);
    }, 100);
  };

  return (
    <myContext.Provider
      value={{
        productData,
        setProductData,
        cartData,
        setcartData,
        orders,
        search,
        setSearch,
        deliveryOption,
        addToCart,
        cartQuantity,
        handleDelete,
        handleUpdate,
        handleUpdateIncrement,
        handleUpdateDecrement,
        doneUpdating,
        handleBuyAgain,
        handlePlaceOrders,
        totalCartAmount,
        shippingFee,
        tax,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
