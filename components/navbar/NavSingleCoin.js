import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavSingleCoin = ({ coin, id, image }) => {
  // console.log(id);
  const link = useRouter().query?.id;

  return (
    <>
      <Link href={`${id}`}>
        <div
          className={`naV__link ${
            link && link == id ? "naV__link-active" : ""
          }`}
        >
          <span className="naV__coin-image">
            <Image src={image} alt={coin} width={20} height={20} />
          </span>
          {coin}
        </div>
      </Link>
    </>
  );
};

export default NavSingleCoin;
