import React from "react";
import PriceHeader from "./PriceHeader";
import PriceList from "./PriceList";
import Search from "./Search";
import TopNavbar from "./topNavbar/TopNavbar";

const DashCoinLists = ({ data }) => {
  return (
    <>
      <TopNavbar />
      <div className="dashboard">
        <div className="dashboard__lists">
          <Search />
          <PriceHeader />
          <div className="dashboard__pricelist">
            <PriceList data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCoinLists;
