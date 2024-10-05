import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { Backdrop, CircularProgress } from "@mui/material";

const FeedBack = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      <Backdrop open={loading}>
        <CircularProgress className="text-white" />
      </Backdrop>
      {!loading ? (
        <>
          <NavBar />
          <div className="mx-auto mt-40 w-fit">
            <h1 className="text-body">
              Your Order has been Placed Successfully.
            </h1>
            <Link
              to="/orders"
              className="w-fit mx-auto text-blue-600 underline"
            >
              Proceed to View Orders
            </Link>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default FeedBack;
