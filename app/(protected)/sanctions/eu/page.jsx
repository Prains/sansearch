import { notFound } from "next/navigation";
import Main from "@/components/Main/Main";
import SearchingDocument from "@/components/SanctionsPage/SearchingDocument/SearchingDocument";
import { fetchDocuments } from "@/utils/fetchData";

export default async function Eu() {
  const documents = await fetchDocuments("eu");

  if (!documents) {
    notFound();
  }

  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main searchingZone="eu" searchingZoneTitle="Санкции ЕС" />
      <SearchingDocument documents={documents} />
    </main>
  );
}
