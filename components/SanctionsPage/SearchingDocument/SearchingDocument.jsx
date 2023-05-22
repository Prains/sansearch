"use client";

import { useState, useEffect } from "react";
import SearchingDocumentList from "./SearchingDocumentList/SearchingDocumentList";
import Pagination from "../../ui/Pagination/Pagination";
import { useSearchParams } from "next/navigation";
import { filterData } from "@/utils/filterData";
import SearchTitle from "./SearchTitle/SearchTitle";
import { DOCUMENTS_PER_PAGE } from "@/utils/variables";

const SearchingDocument = ({ documents }) => {
  const [updatedDocuments, setUpdatedDocuments] = useState(documents);
  const [slicedDocuments, setSlicedDocuments] = useState(
    updatedDocuments.slice(0, DOCUMENTS_PER_PAGE)
  );

  const params = useSearchParams();
  const search = params.get("search");

  useEffect(() => {
    if (search === null) {
      return;
    }

    const updatedDocumentsAfterSearch = filterData(documents, search);

    setSlicedDocuments(
      updatedDocumentsAfterSearch.slice(0, DOCUMENTS_PER_PAGE)
    );
    setUpdatedDocuments(updatedDocumentsAfterSearch);
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
            documents={updatedDocuments}
            setSlicedDocuments={setSlicedDocuments}
          />
        </>
      )}
    </div>
  );
};

export default SearchingDocument;
