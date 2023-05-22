"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PaginationButton from "@/components/ui/Pagination/PaginationButton/PaginationButton";
import { paginate } from "@/utils/paginate";
import { DOCUMENTS_PER_PAGE } from "@/utils/variables";

import { arrowActiveSvg, arrowDisabledSvg } from "@/images/icons/arrows";

/**
 * @param {Array<Object>}  documents - принимает массив документов.
 * @param {Function (number) => Array}  setSlicedDocuments - функкция, для изменения состояния КОПИИ документов.
 */

const Pagination = ({ documents, setSlicedDocuments }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];
  const paginatePage = (pageNumber) => setCurrentPage(pageNumber);
  const totalPage = Math.ceil(documents.length / DOCUMENTS_PER_PAGE);

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  const handleClickPage = (number) => {
    paginatePage(number);
    setSlicedDocuments(paginate(documents, number, DOCUMENTS_PER_PAGE));
  };

  useEffect(() => {
    setSlicedDocuments(paginate(documents, currentPage, DOCUMENTS_PER_PAGE));
  }, [currentPage]);

  const renderPaginationButtons = () => {
    let pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);
    if (totalPage > 7) {
      const showingTrimPage = 5;
      if (currentPage <= showingTrimPage - 1) {
        pageNumbers = [
          ...pageNumbers.slice(0, showingTrimPage),
          "...",
          totalPage,
        ];
      } else if (currentPage >= totalPage - showingTrimPage + 2) {
        pageNumbers = [1, "...", ...pageNumbers.slice(-showingTrimPage)];
      } else {
        pageNumbers = [
          1,
          "...",
          ...pageNumbers.slice(currentPage - 2, currentPage + 1),
          "...",
          totalPage,
        ];
      }
    }

    return pageNumbers.map((number, i) =>
      number === "..." ? (
        <PaginationButton disabled key={i}>
          {number}
        </PaginationButton>
      ) : (
        <PaginationButton
          onClick={() => handleClickPage(number)}
          key={i}
          isCurrentPage={currentPage === number}
          disabled={currentPage === number}
        >
          {number}
        </PaginationButton>
      )
    );
  };

  return (
    <nav className="flex items-center justify-center gap-2">
      <ul className="flex flex-row items-center">
        <PaginationButton
          disabled={currentPage === 1}
          onClick={() => paginatePage((prev) => prev - 1)}
        >
          <Image
            className="fill-green-500"
            src={currentPage === 1 ? arrowDisabledSvg : arrowActiveSvg}
            alt="стрелочка назад"
          />
        </PaginationButton>
        {renderPaginationButtons()}
        <PaginationButton
          disabled={currentPage === pageNumbers.length}
          onClick={() => paginatePage((prev) => prev + 1)}
        >
          <Image
            className="scale-x-[-1]"
            src={
              currentPage === pageNumbers.length
                ? arrowDisabledSvg
                : arrowActiveSvg
            }
            alt="стрелочка вперед"
          />
        </PaginationButton>
      </ul>
    </nav>
  );
};

export default Pagination;
