import Link from "next/link";
import React from "react";
import DropDown from "./DropDown";
import SwitchBtn from "./SwitchBtn";

const TopNavbar = () => {
  return (
    <div>
      <div className="topNav">
        <div className="topNav__option">
          <Link href="/about">
            <a className="topNav__about">About</a>
          </Link>
        </div>
        <div className="topNav__option">
          <DropDown />
        </div>
        <div className="topNav__option">
          <SwitchBtn />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
