"use client";
import { useState } from "react";
import Pagination from "../ui/Pagination/Pagination";
import SearchingDocumentList from "./SearchingDocumentList";

const SearchPage = ({ searchValue, documents }) => {
  const [slicedDocuments, setSlicedDocuments] = useState(documents);
  return (
    <div className="w-[88%] mx-auto">
      <p className="text-[20px] mt-[-26px] mb-[20px] lg:mt-[-52px] lg:text-[28px]">
        Результаты поиска по запросу: <i>{searchValue}</i>
      </p>
      {documents.length === 0 && <p>Документов с таким названием не найдено</p>}
      {documents.length > 1 && (
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

export default SearchPage;
