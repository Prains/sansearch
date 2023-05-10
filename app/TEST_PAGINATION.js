"use client";

import { useState } from "react";
import Pagination from "@/components/ui/Pagination/Pagination";
import { paginate } from "@/utils/paginate";

export default function TEST_PAGINATION() {
  const documents = [];

  for (let i = 1; i <= 120; i++) {
    documents.push(`Документ ${i}`);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const documentsPerPage = 8; // можно хранить в RTK, чтобы значение было одно и тоже на всех страницах с документами, а так же, это значение нужно и в этом компоненте и мы его так же пробрасываем в пропсы в компонент Pagination

  const currentDocuments = paginate(documents, currentPage, documentsPerPage);

  const paginatePage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ul>
        {currentDocuments.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <Pagination
        totalDocuments={documents.length}
        documentsPerPage={documentsPerPage}
        paginatePage={paginatePage}
        currentPage={currentPage}
      />
    </>
  );
}
