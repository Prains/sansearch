import { notFound } from "next/navigation";
import Main from "@/components/Main/Main";
import SearchingDocument from "@/components/SanctionsPage/SearchingDocument/SearchingDocument";
import { fetchDocuments } from "@/utils/fetchData";

export default async function Russia() {
  const documents = await fetchDocuments("ru");

  if (!documents) {
    notFound();
  }

  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main searchingZone="ru" searchingZoneTitle="Санкции РФ" />
      <SearchingDocument documents={documents} />
    </main>
  );
}
