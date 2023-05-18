"use client";

import Image from "next/image";
import { closeCross } from "@/images/icons";
import { useRouter } from "next/navigation";

const BurgerCloseButton = ({ className, close }) => {
  const router = useRouter();
  return (
    <Image
      src={closeCross}
      alt="Черный крестик"
      className={className}
      onClick={() => {
        if (close) {
          close();
        } else {
          router.back();
        }
      }}
    />
  );
};

export default BurgerCloseButton;
