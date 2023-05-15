"use client";
import { useState } from "react";
import Main from "@/components/MainPage/Main/Main";
import SearchingDocuments from "@/components/SearchingDocuments";
import { fakedata } from "@/utils/fakedata";

const Russia = () => {
  const [documents, setDocuments] = useState([...fakedata]);

  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main searchingZone="Russia" searchingZoneTitle="Санкции РФ" />
      <SearchingDocuments searchValue="Россия" documents={documents} />
    </main>
  );
};

export default Russia;
