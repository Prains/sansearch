"use client";

import Image from "next/image";
import { closeCross } from "@/images/icons";

const BurgerCloseButton = ({ close, className }) => {
  return (
    <Image
      src={closeCross}
      alt="Черный крестик"
      className={className}
      onClick={() => {
        close();
      }}
    />
  );
};

export default BurgerCloseButton;
