"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PaginationButton from "@/components/ui/Pagination/PaginationButton/PaginationButton";
import { paginate } from "@/utils/paginate";
import { leftActive, leftDisabled } from "@/images/icons/arrows/arrows";

const Pagination = ({ documents, setSlicedDocuments }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [documentsPerPage] = useState(10);

  const pageNumbers = [];
  const paginatePage = (pageNumber) => setCurrentPage(pageNumber);
  const maxPage = Math.ceil(documents.length / documentsPerPage);

  for (let i = 1; i <= maxPage; i++) {
    pageNumbers.push(i);
  }

  const handleClickPage = (number) => {
    paginatePage(number);
    setSlicedDocuments(paginate(documents, number, documentsPerPage));
  };

  useEffect(() => {
    setSlicedDocuments(paginate(documents, currentPage, documentsPerPage));
  }, [currentPage]);

  const getPaginateButtons = (currentPage, pageNumbers, maxPage) => {
    const one = 1;
    if (maxPage <= 7) {
      return (
        <>
          {pageNumbers.map((number) => (
            <PaginationButton
              onClick={() => handleClickPage(number)}
              key={number}
              isCurrentPage={currentPage === number}
              disabled={currentPage === number}
            >
              {number}
            </PaginationButton>
          ))}
        </>
      );
    }
    const showingTrimPage = 5;
    if (currentPage <= showingTrimPage - 1) {
      return (
        <>
          {pageNumbers.slice(0, showingTrimPage).map((number) => (
            <PaginationButton
              onClick={() => handleClickPage(number)}
              key={number}
              isCurrentPage={currentPage === number}
              disabled={currentPage === number}
            >
              {number}
            </PaginationButton>
          ))}
          <PaginationButton disabled>...</PaginationButton>
          <PaginationButton
            onClick={() => handleClickPage(maxPage)}
            key={maxPage}
            isCurrentPage={currentPage === maxPage}
            disabled={currentPage === maxPage}
          >
            {maxPage}
          </PaginationButton>
        </>
      );
    }

    if (currentPage >= maxPage - showingTrimPage + 2) {
      return (
        <>
          <PaginationButton
            onClick={() => handleClickPage(one)}
            key={one}
            isCurrentPage={currentPage === one}
            disabled={currentPage === one}
          >
            {one}
          </PaginationButton>
          <PaginationButton disabled>...</PaginationButton>
          {pageNumbers.slice(-showingTrimPage).map((number) => (
            <PaginationButton
              onClick={() => handleClickPage(number)}
              key={number}
              isCurrentPage={currentPage === number}
              disabled={currentPage === number}
            >
              {number}
            </PaginationButton>
          ))}
        </>
      );
    }

    return (
      <>
        <PaginationButton
          onClick={() => handleClickPage(one)}
          key={one}
          isCurrentPage={currentPage === one}
          disabled={currentPage === one}
        >
          {one}
        </PaginationButton>
        <PaginationButton disabled>...</PaginationButton>
        {pageNumbers.slice(currentPage - 2, currentPage + 1).map((number) => (
          <PaginationButton
            onClick={() => handleClickPage(number)}
            key={number}
            isCurrentPage={currentPage === number}
            disabled={currentPage === number}
          >
            {number}
          </PaginationButton>
        ))}
        <PaginationButton disabled>...</PaginationButton>
        <PaginationButton
          onClick={() => handleClickPage(maxPage)}
          key={maxPage}
          isCurrentPage={currentPage === maxPage}
          disabled={currentPage === maxPage}
        >
          {maxPage}
        </PaginationButton>
      </>
    );
  };

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
        {getPaginateButtons(currentPage, pageNumbers, maxPage)}
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
