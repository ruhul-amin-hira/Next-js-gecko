import axios from "axios";
import Head from "next/head";
import React, { useContext } from "react";
import CoinDetails from "../components/dashboard/coinDetails/CoinDetails";
import { fetchCoins } from "../hooks/base";
import { fetchCoinDetails } from "../hooks/base";

export const getStaticPaths = async () => {
  const { data } = await fetchCoins.get("coins/markets");
  const paths = data.map((el) => {
    return {
      params: { id: el.id.toString() },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps(context) {
  const id = context.params.id;
  console.log(id);
  let params = {
    ids: id,
    vs_currency: "usd",
    price_change_percentage: "1h,24h,7d,30d,1y",
    sparkline: false,
  };

  const req1 = fetchCoinDetails.get("coins/markets", { params });
  const req2 = fetchCoinDetails.get(`coins/${id}/market_chart`, {
    params: {
      vs_currency: "usd",
      days: 1,
      interval: "hour",
    },
  });

  const req3 = fetchCoinDetails.get(`coins/${id}/market_chart`, {
    params: {
      vs_currency: "usd",
      days: 7,
      interval: "hour",
    },
  });
  const req4 = fetchCoinDetails.get(`coins/${id}/market_chart`, {
    params: {
      vs_currency: "usd",
      days: 30,
      interval: "hour",
    },
  });
  const req5 = fetchCoinDetails.get(`coins/${id}/market_chart`, {
    params: {
      vs_currency: "usd",
      days: 365,
      interval: "monthly",
    },
  });
  const res = await axios.all([req1, req2, req3, req4, req5]);
  const [
    { data: d1 } = data1,
    { data: d2 } = data2,
    { data: d3 } = data3,
    { data: d4 } = data4,
    { data: d5 } = data5,
  ] = res;

  return {
    props: {
      d1,
      d2,
      d3,
      d4,
      d5,
    },
    revalidate: 10,
  };
}

const Details = (props) => {
  return (
    <>
      <Head>
        <title>Gecko Crypto</title>
        <meta name="description" content="Realtime crypto prices and details" />
      </Head>
      <CoinDetails datas={props} />
    </>
  );
};

export default Details;
