"use client";

import Image from "next/image";
import { burgerMenuIcon } from "@/images/icons";
import HeaderBurger from "../HeaderBurger/HeaderBurger";
import { useState } from "react";

const HeaderOpenBurgerButton = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  function closeBurgerMenu() {
    setIsOpen(false);
  }
  return (
    <>
      <Image
        src={burgerMenuIcon}
        alt="Бургер меню - три короткие черные черточки"
        className="lg:hidden"
        onClick={() => {
          setIsOpen(true);
        }}
      />
      {isOpen && <HeaderBurger list={list} close={closeBurgerMenu} />}
    </>
  );
};

export default HeaderOpenBurgerButton;
