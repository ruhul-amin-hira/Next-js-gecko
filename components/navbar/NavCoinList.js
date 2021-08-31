import React, { useContext, useEffect } from "react";

import NavSingleCoin from "./NavSingleCoin";
import { CoinCointext } from "../../hooks/CoinContext";

import { fetchCoins } from "../../hooks/base";

const NavCoinList = (props) => {
  const { data } = useContext(CoinCointext);
  // const { data, isLoading, rest } = useFetch(false, currency);
  //  console.log(isLoading, data);
  /// console.log("nav")  //console.log(error);

  // useEffect(() => {
  //   console.log(values2);
  // });
  // console.log(props);
  return (
    <div className="naV__coinlist">
      {data &&
        data.data.map((coin) => {
          return (
            <NavSingleCoin
              coin={coin.name}
              id={coin.id}
              image={coin.image}
              key={coin.id}
            />
          );
        })}
    </div>
  );
};

export default NavCoinList;
