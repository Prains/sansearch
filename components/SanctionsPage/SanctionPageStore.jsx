"use client";
import { useEffect } from "react";
import Main from "@/components/Main/Main";
import SanctionsPage from "@/components/SanctionsPage/SanctionsPage";
import { setDocuments } from "@/services/reducers/ui/uiReducer";
import { useDispatch, useSelector } from "react-redux";

const SanctionPageStore = ({
  documents,
  searchingZone,
  searchingZoneTitle,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDocuments(documents));
  }, [documents]);

  const storeDocuments = useSelector((state) => state.ui.documents);

  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main
        searchingZone={searchingZone || ""}
        searchingZoneTitle={searchingZoneTitle || "Поиск документов"}
      />
      <SanctionsPage documents={storeDocuments} />
    </main>
  );
};

export default SanctionPageStore;
