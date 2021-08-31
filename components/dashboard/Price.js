import React from "react";
import Link from "next/link";
import Image from "next/image";

const Price = ({ coin, currencySign }) => {
  const percentColor =
    coin.price_change_percentage_24h > 0 ? "colorG" : "colorR";
  // console.log(coin);

  return (
    <div className="price2">
      <p className="price__rank price__header2">{coin.market_cap_rank}</p>

      <span className="price__name price__header">
        <Image src={coin.image} alt={coin.name} width={25} height={25} />
        <Link href={`/${coin.id}`}>
          <a className="price2__link">{coin.name}</a>
        </Link>
      </span>
      <p className="price__symbol price__header2">
        {coin.symbol.toUpperCase()}
      </p>
      <p className="price__price price__header">
        {currencySign}
        {coin.current_price.toLocaleString("en", {
          maximumFractionDigits: 6,
          minimumFractionDigits: 2,
        })}
      </p>
      <p className={`price__hour price__header2 ${percentColor}`}>
        {coin.price_change_percentage_24h.toFixed(2) + "%"}
      </p>
    </div>
  );
};

export default Price;
