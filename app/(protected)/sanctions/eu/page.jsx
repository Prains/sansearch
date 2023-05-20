import { notFound } from "next/navigation";
import SanctionPageStore from "@/components/SanctionsPage/SanctionPageStore";
import { fetchDocuments } from "@/utils/fetchData";

export default async function Eu() {
  const fetchedDocuments = await fetchDocuments("eu");

  if (!fetchedDocuments) {
    notFound();
  }

  return (
    <SanctionPageStore
      documents={fetchedDocuments}
      searchingZone="eu"
      searchingZoneTitle="Санкции ЕС"
    />
  );
}
