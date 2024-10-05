import React, { useEffect } from "react";

const apiRequest = (url, optionObj, errMsg) => {
  useEffect(
    fetch(url, optionObj)
      .then((res) => {
        if (!res.ok) {
          throw Error("please reload the app");
        }
      })
      .catch((err) => {
        errMsg = err.message;
      })
      .finally(() => {
        return errMsg;
      })
  );
};

export default apiRequest;
