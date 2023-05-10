"use client";

import Image from "next/image";
import PaginationButton from "./PaginationButton/PaginationButton";
import { leftActive, leftDisabled } from "@/images/icons/arrows/arrows";

const Pagination = ({
  documentsPerPage,
  totalDocuments,
  paginatePage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDocuments / documentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <article className="flex items-center justify-center gap-2">
      <ul className="flex flex-row items-center">
        <PaginationButton
          disabled={currentPage === 1}
          onClick={() => paginatePage((prev) => prev - 1)}
        >
          <Image
            className="fill-green-500"
            src={currentPage === 1 ? leftDisabled : leftActive}
            alt="стрелочка назад"
          />
        </PaginationButton>
        {pageNumbers.map((number) => (
          <PaginationButton
            onClick={() => paginatePage(number)}
            key={number}
            isCurrentPage={currentPage === number}
          >
            {number}
          </PaginationButton>
        ))}
        <PaginationButton
          disabled={currentPage === pageNumbers.length}
          onClick={() => paginatePage((prev) => prev + 1)}
        >
          <Image
            className="scale-x-[-1]"
            src={currentPage === pageNumbers.length ? leftDisabled : leftActive}
            alt="стрелочка вперед"
          />
        </PaginationButton>
      </ul>
    </article>
  );
};

export default Pagination;
