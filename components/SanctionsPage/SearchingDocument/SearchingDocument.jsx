"use client";

import { useState, useEffect } from "react";
import SearchingDocumentList from "./SearchingDocumentList/SearchingDocumentList";
import Pagination from "../../ui/Pagination/Pagination";
import { useSearchParams } from "next/navigation";
import { filterData } from "@/utils/filterData";
import SearchTitle from "./SearchTitle/SearchTitle";

const SearchingDocument = ({ documents }) => {
  const [slicedDocuments, setSlicedDocuments] = useState(
    documents.slice(0, 10)
  );

  const params = useSearchParams();
  const search = params.get("search");

  useEffect(() => {
    if (search === null) {
      return;
    }

    setSlicedDocuments(filterData(documents, search));
  }, [search]);

  return (
    <div className="w-[88%] mx-auto">
      <SearchTitle search={search} />
      {slicedDocuments.length === 0 ? (
        <p>Документов не найдено</p>
      ) : (
        <>
          <SearchingDocumentList slicedDocuments={slicedDocuments} />
          <Pagination
            documents={documents}
            setSlicedDocuments={setSlicedDocuments}
          />
        </>
      )}
    </div>
  );
};

export default SearchingDocument;
