import { notFound } from "next/navigation";
import Main from "@/components/Main/Main";
import SanctionsPage from "@/components/SanctionsPage/SanctionsPage";
import { fetchDocuments } from "@/utils/fetchData";

export default async function Usa() {
  const documents = await fetchDocuments();

  if (!documents) {
    notFound();
  }

  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main searchingZone="Usa" searchingZoneTitle="Санкции США" />
      <SanctionsPage documents={documents} />
    </main>
  );
}
