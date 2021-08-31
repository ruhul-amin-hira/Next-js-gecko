import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { fetchCoins } from "../hooks/base";
import { CoinCointext } from "../hooks/CoinContext";

import DashCoinLists from "../components/dashboard/DashCoinLists";

export default function Home(props) {
  const { setData } = useContext(CoinCointext);
  // setData(props);
  useEffect(() => {
    setData(props);
  });
  return (
    <>
      <Head>
        <title>Gecko Crypto</title>
        <meta name="description" content="Realtime crypto prices and details" />
      </Head>
      <DashCoinLists data={props} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await fetchCoins.get("coins/markets");
  // const data = await res.json();
  // console.log(JSON.stringify(res));
  return {
    props: {
      data: data,
    },
    revalidate: 10,
  };
}
