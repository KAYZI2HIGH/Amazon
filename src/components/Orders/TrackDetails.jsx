import React from "react";
import { Link } from "react-router-dom";

const TrackDetails = ({ data }) => {
  return (
    <section className="space-y-4">
      <Link
        to={"/orders"}
        className="text-blue-500 underline"
      >
        Veiw all Orders
      </Link>
      <div>
        <h1 className="text-body font-semibold text-text-blue">
          Arriving on {data.deliveryDate}
        </h1>
        <h2 className="text-lg font-semibold">{data.name}</h2>
        <h2 className="text-lg">Quantity: {data.quantity}</h2>
        <img
          src={data.image}
          className="size-44 object-contain mt-5"
        />
      </div>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <h1 className="sm:font-semibold sm:text-lg">Prepairing</h1>
          <h1 className="sm:font-semibold sm:text-lg">Shipped</h1>
          <h1 className="sm:font-semibold sm:text-lg">Delivered</h1>
        </div>
        <div className="w-full h-8 border-2 rounded-2xl mt-2">
          <div className="w-1/2 h-full bg-green-600 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default TrackDetails;
