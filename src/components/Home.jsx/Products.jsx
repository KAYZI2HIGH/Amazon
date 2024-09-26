import { Button, Rating } from "@mui/material";

const Products = ({ product }) => {
  return (
    <div className="w-full p-5 border flex flex-col justify-between">
      <div className="mx-auto">
        <img
          src={product.image}
          alt=""
          className="h-52 object-contain mb-4"
        />
      </div>
      <h5 className="font-semibold mb-2 mt-5">{product.name}</h5>
      <div className="flex space-x-2">
        <Rating
          value={product.rating.stars}
          precision={0.5}
          readOnly
        />
        <p className="text-blue-600">{product.rating.counts}</p>
      </div>
      <h2 className="font-bold mt-1 mb-2 text-text-blue tracking-wider">
        ${product.priceCents / 100}
      </h2>
      <select
        name="selection"
        className=" max-w-14 border border-gray-400 bg-gray-100 rounded-sm focus:outline-amber-600 focus:border-amber-600"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <Button className="capitalize text-sm w-full py-2 bg-yellow-400 rounded-3xl mt-10 hover:bg-yellow-500 text-black">
        add to cart
      </Button>
    </div>
  );
};

export default Products;
