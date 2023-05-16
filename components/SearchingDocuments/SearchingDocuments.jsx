"use client";

import { useState, useEffect } from "react";
import Pagination from "../ui/Pagination/Pagination";
import SearchingDocumentList from "./SearchingDocumentList/SearchingDocumentList";

const SearchPage = ({ documents: serverDocuments }) => {
  const [documents, setDocuments] = useState([]);
  const [slicedDocuments, setSlicedDocuments] = useState(documents);

  useEffect(() => {
    async function load() {
      const resp = await fetch("https://jsonplaceholder.typicode.com/todos/");
      const data = await resp.json();
      setDocuments(data);
    }

    if (!serverDocuments) {
      load();
    }
  }, []);

  return (
    <div className="w-[88%] mx-auto">
      <p className="text-[20px] mt-[-26px] mb-[20px] lg:mt-[-52px] lg:text-[28px]">
        Результаты поиска по запросу: <i>Поисковое слово...</i>
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

SearchPage.getInitialProps = async ({ req }) => {
  if (!req) {
    return {
      documents: null,
    };
  }

  const resp = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const documents = await resp.json();

  return {
    documents,
  };
};
