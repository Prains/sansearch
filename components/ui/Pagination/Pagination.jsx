"use client";

import {
  leftActive,
  leftDisabled,
  rightActive,
  rightDisabled,
} from "@/images/icons/arrows/arrows";
import Image from "next/image";
import { useState } from "react";
import PaginationButton from "./PaginationButton/PaginationButton";

const Pagination = () => {
  const [leftArrowActive, setLeftArrowActive] = useState(false);
  const [rightArrowActive, setRightArrowActive] = useState(true);

  return (
    <article className="flex items-center justify-center gap-2">
      <PaginationButton>
        <Image
          src={leftArrowActive ? leftActive : leftDisabled}
          alt="черная стрелочка налево"
        />
      </PaginationButton>
      <PaginationButton>1</PaginationButton>
      <PaginationButton>1</PaginationButton>
      <PaginationButton>
        <Image
          src={rightArrowActive ? rightActive : rightDisabled}
          alt="черная стрелочка направо"
        />
      </PaginationButton>
    </article>
  );
};

export default Pagination;
