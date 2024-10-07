import { Card, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { myContext } from "../../utils/UseContext";
import dayjs from "dayjs";

const CartCard = ({ data }) => {
  const {
    handleDelete,
    deliveryOption,
    setcartData,
    handleUpdate,
    handleUpdateIncrement,
    handleUpdateDecrement,
    doneUpdating,
  } = useContext(myContext);

  return (
    <Card
      variant="outlined"
      className="p-5 mb-5 max-w-[300px] sm:max-w-full mx-auto"
    >
      <div>
        <Typography
          variant="h5"
          color="success"
          className="font-semibold mb-3 text-lg"
        >
          {deliveryOption.map((option) => {
            if (option.id === data.deliveryOptionId) {
              return `Delivery Date: ${dayjs().add(option.date, 'days').format('dddd, DD MMMM')}`;
            }
          })}
        </Typography>
        <div className="flex flex-col justify-between items-center sm:flex-row">
          <div className="flex flex-col sm:space-x-8 sm:flex-row">
            <img
              src={data.image}
              className="w-40 mx-auto sm:mx-0 sm:size-20"
            />
            <div className="space-y-1">
              <Typography
                variant="body2"
                color="initial"
                className="text-lg sm:max-w-52 font-semibold mt-4 sm:mt-0"
              >
                {data.name}
              </Typography>
              <Typography
                variant="body2"
                color="error"
                className="font-semibold text-lg tracking-wide"
              >
                ${(data.priceCents / 100).toFixed(2)}
              </Typography>
              <div className="flex justify-center items-center sm:space-x-1">
                <Typography
                  variant="p"
                  color="initial"
                >
                  Quantity: {data.quantity}
                </Typography>
                <div id={`button-${data.id}`}>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => {
                      handleUpdate(data.id);
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => {
                      handleDelete(data.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
                <div
                  className="hidden space-x-2 pl-4"
                  id={`edit-${data.id}`}
                >
                  <button className="font-semibold text-lg text-white bg-green-800 px-3 rounded-lg text-center h-8 hover:bg-green-900"
                    onClick={() => {
                    handleUpdateDecrement(data.id)
                  }}
                  >
                    -
                  </button>
                  <button
                    className="font-semibold text-lg text-white bg-green-800 px-3 rounded-lg text-center h-8 hover:bg-green-900"
                    onClick={() => {
                      handleUpdateIncrement(data.id);
                    }}
                  >
                    +
                  </button>
                  <Button onClick={() => {
                    doneUpdating(data.id)
                  }}>DONE</Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Typography
              variant="body1"
              className="font-semibold"
            >
              Choose your delivery option:
            </Typography>
            {deliveryOption.map((option) => (
              <label
              key={option.id}
                className="flex items-center justify-center w-fit"
                onClick={() => {
                  setcartData((currentState) => {
                    return currentState.map((eachState) => {
                      if (eachState.id === data.id) {
                        return { ...eachState, deliveryOptionId: option.id };
                      } else {
                        return { ...eachState };
                      }
                    });
                  });
                }}
              >
                <input
                  type="radio"
                  name={data.id}
                  className="size-5 mr-2"
                  defaultChecked={data.deliveryOptionId === option.id}
                />
                <div className="flex flex-col">
                  <Typography
                    variant="subtitle"
                    color="success"
                    className="font-semibold tracking-wide"
                  >
                    {dayjs().add(option.date, 'days').format('dddd, DD MMMM')}
                  </Typography>
                  <Typography
                    variant="p"
                    color="initial"
                  >
                    $
                    {option.priceCents === 0
                      ? "FREE"
                      : (option.priceCents / 100).toFixed(2)}
                    - Shipping
                  </Typography>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartCard;
