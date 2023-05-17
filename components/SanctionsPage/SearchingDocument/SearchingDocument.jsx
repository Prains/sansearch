"use client";

import { useState } from "react";
import SearchingDocumentList from "./SearchingDocumentList/SearchingDocumentList";
import Pagination from "../../ui/Pagination/Pagination";

const SearchingDocument = ({ documents }) => {
  const [slicedDocuments, setSlicedDocuments] = useState(
    documents.slice(0, 10)
  );
  return (
    <>
      <SearchingDocumentList slicedDocuments={slicedDocuments} />
      <Pagination
        documents={documents}
        setSlicedDocuments={setSlicedDocuments}
      />
    </>
  );
};

export default SearchingDocument;
