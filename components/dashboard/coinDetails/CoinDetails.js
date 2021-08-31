import { useRouter } from "next/dist/client/router";
import React, { useContext, useEffect } from "react";

import { CoinCointext } from "../../../hooks/CoinContext";
import TopNavbar from "../topNavbar/TopNavbar";

import { CoinIntro } from "./CoinIntro";

import CoinChartBox from "./CoinChartBox";
import CoinStatistics from "./CoinStatistics";

const CoinDetails = ({ datas }) => {
  const results = [datas.d2, datas.d3, datas.d4, datas.d5];

  return (
    <div className="dashboard">
      <TopNavbar />
      <div className="details">
        <CoinIntro data={datas.d1} />

        <CoinChartBox data={datas.d1} results={results} />
        <CoinStatistics data={datas.d1} />
      </div>
    </div>
  );
};

export default CoinDetails;
