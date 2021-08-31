import React, { useContext, useEffect } from "react";
import Price from "./Price";
import { CoinCointext } from "../../hooks/CoinContext";

const PriceList = ({ data }) => {
  const { search } = useContext(CoinCointext);
  // console.log(search)
  // const coinData = data;

  // const cacheData = queryClient.getQueryData("coinsList");
  const currencySign = "$";
  /*   useEffect(() => {
    rest.refetch();
  }, [currency]); */

  //console.log(mode);

  // console.log(currency, isFetching);

  // console.log(data);
  let find = false;
  const render =
    data &&
    data.data.map((coin) => {
      if (coin.name.match(search) || coin.id.match(search)) {
        find = true;
        return <Price key={coin.id} coin={coin} currencySign={currencySign} />;
      }
    });

  if (!find) {
    return <p className="no-result">No Result found !</p>;
  }

  return <div className="price__pricelist">{render}</div>;
};

export default PriceList;
