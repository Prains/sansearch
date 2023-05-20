import { notFound } from "next/navigation";
import SanctionPageStore from "@/components/SanctionsPage/SanctionPageStore";
import { fetchDocuments } from "@/utils/fetchData";

export default async function Russia() {
  const fetchedDocuments = await fetchDocuments("ru");

  if (!fetchedDocuments) {
    notFound();
  }

  return (
    <SanctionPageStore
      documents={fetchedDocuments}
      searchingZone="ru"
      searchingZoneTitle="Санкции РФ"
    />
  );
}
