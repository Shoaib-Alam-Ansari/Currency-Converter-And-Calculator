import React, { useEffect, useState } from "react";

const useCurrency = (currency) => {
  const [data, setData] = useState(0);
  useEffect(() => {
  
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
  }, [currency]);

  return data
};

export default useCurrency;