import { notFound } from "next/navigation";
import SanctionPageStore from "@/components/SanctionsPage/SanctionPageStore";
import { fetchDocuments } from "@/utils/fetchData";

export default async function Usa() {
  const fetchedDocuments = await fetchDocuments("usa");

  if (!fetchedDocuments) {
    notFound();
  }

  return (
    <SanctionPageStore
      documents={fetchedDocuments}
      searchingZone="usa"
      searchingZoneTitle="Санкции США"
    />
  );
}
