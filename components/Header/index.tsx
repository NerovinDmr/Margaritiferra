import Image from "next/image";
import React from "react";
import style from "./style.module.scss";

export const Header:React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <b>Margaritiferra</b>
      </div>
      <nav>
        <ul className={style.navigation}>
          <li>About us</li>
          <li>Materials</li>
          <li>Care</li>
          <li>Catalog</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <div className={style.cart}>
     <Image height={40} width={40} src="/images/svgs/bag.svg" alt="cart"></Image>
      </div>
    </div>
  );
};
