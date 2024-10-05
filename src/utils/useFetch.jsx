import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [errMsg, setErrMsg] = useState();

  useEffect(
    fetch(url)
      .then((res) => {
        setLoading(true);
        if (!res.ok) throw Errow("invalid endpoint");
        return res.json;
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setErrMsg(err.message);
      })
  );

  return { loading, data, setData, errMsg };
};

export default useFetch;
