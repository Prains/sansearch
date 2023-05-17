import { Suspense } from "react";
import SearchingDocument from "./SearchingDocument/SearchingDocument";
import Loader from "../ui/Loader";
import { fetchDocuments } from "@/utils/fetchData";

export default async function SanctionsPage() {
  const documents = await fetchDocuments();

  return (
    <div className="w-[88%] mx-auto">
      <p className="text-[20px] mt-[-26px] mb-[20px] lg:mt-[-52px] lg:text-[28px]">
        Результаты поиска по запросу: <i>Поисковое слово...</i>
      </p>
      <Suspense fallback={<Loader className="my-[30px]" />}>
        {documents.length === 0 && (
          <p>Документов с таким названием не найдено</p>
        )}
        {documents.length > 1 && <SearchingDocument documents={documents} />}
      </Suspense>
    </div>
  );
}
