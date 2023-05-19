"use client";

import Image from "next/image";
import { closeCross } from "@/images/icons";
import { useRouter } from "next/navigation";

const BurgerCloseButton = ({ className }) => {
  const router = useRouter();
  return (
    <Image
      src={closeCross}
      alt="Черный крестик"
      className={className}
      onClick={() => {
        router.back();
      }}
    />
  );
};

export default BurgerCloseButton;
