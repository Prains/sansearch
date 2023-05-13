"use client";

import Image from "next/image";
import { closeCross } from "@/images/icons";

const BurgerCloseButton = ({ close }) => {
  return (
    <Image
      src={closeCross}
      alt="Черный крестик"
      onClick={() => {
        close();
      }}
    />
  );
};

export default BurgerCloseButton;
