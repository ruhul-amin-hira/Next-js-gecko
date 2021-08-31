import React from "react";
import Link from "next/link";
import NavCoinList from "./NavCoinList";

const Navbar = () => {
  return (
    <div className="naV">
      <div className="naV__logobox">
        <Link href="/ ">
          <a className="naV__logo">Gecko</a>
        </Link>
      </div>

      <div className="naV__items">
        <NavCoinList />
      </div>
    </div>
  );
};

export default Navbar;
