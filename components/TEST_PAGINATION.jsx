"use client";

import { useState } from "react";
import Pagination from "@/components/ui/Pagination/Pagination";

export const TEST_PAGINATION = () => {
  const documents = [];

  for (let i = 1; i <= 110; i++) {
    documents.push(`Документ ${i}`);
  }

  const [slicedDocuments, setSlicedDocuments] = useState(
    documents.slice(0, 10)
  );

  return (
    <>
      <ul>
        {slicedDocuments.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <Pagination
        documents={documents}
        setSlicedDocuments={setSlicedDocuments}
      />
    </>
  );
};
