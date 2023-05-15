"use client";
import { useState } from "react";
import Main from "@/components/MainPage/Main/Main";
import SearchingDocuments from "@/components/SearchingDocuments";
import { fakedata } from "@/utils/fakedata";

const Usa = () => {
  const [documents, setDocuments] = useState([...fakedata]);
  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main searchingZone="США" searchingZoneTitle="Санкции США" />
      <SearchingDocuments
        searchValue="Поисковое слово.."
        documents={documents.slice(Math.ceil(fakedata.length / 3))}
      />
    </main>
  );
};

export default Usa;
