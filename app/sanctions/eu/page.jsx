"use client";
import { useState } from "react";
import Main from "@/components/MainPage/Main/Main";
import SearchingDocuments from "@/components/SearchingDocuments";

const Eu = () => {
  const [documents, setDocuments] = useState([]);
  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main searchingZone="Евросоюз" searchingZoneTitle="Санкции Евросоюза" />
      <SearchingDocuments
        searchValue="Поисковое слово.."
        documents={documents}
      />
    </main>
  );
};

export default Eu;
