import { Card } from "@mui/material";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { myContext } from "../../utils/UseContext";

const OrderCards = ({ data }) => {
  const { search } = useContext(myContext);

  return (
    <Card
      variant="outlined"
      className=" pb-10"
    >
      <Card
        variant="outlined"
        className="w-full h-fit lg:flex justify-between px-8 py-2 border-t-0 border-l-0 border-r-0 rounded-none bg-gray-100 space-y-3 items-center mb-8"
      >
        <div className="flex w-full sm:w-fit justify-between sm:space-x-10">
          <div>
            <h3 className=" text-lg text-nowrap">
              Order Placed: <br />
              {data.orderDate}
            </h3>
          </div>
          <div>
            <h3 className=" text-lg">
              Total: <br />
              ${(data.total / 100).toFixed(2)}
            </h3>
          </div>
        </div>
        <div className="flex-shrink">
          <h3 className=" text-lg">
            Order ID: <br /> {data.orderId}
          </h3>
        </div>
      </Card>
      <section className="space-y-7">
        {data.products.filter((product) => {
          return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search);
        }).map((product) => (
          <ProductCard
            dataId={data.orderId}
            product={product}
            key={product.id}
          />
        ))}
      </section>
    </Card>
  );
};

export default OrderCards;
