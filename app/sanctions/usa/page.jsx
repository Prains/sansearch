import Main from "@/components/Main/Main";
import SanctionsPage from "@/components/SanctionsPage/SanctionsPage";
import { fetchDocuments } from "@/utils/fetchData";

export default async function Usa() {
  const documents = await fetchDocuments();

  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main searchingZone="Usa" searchingZoneTitle="Санкции США" />
      <SanctionsPage documents={documents} />
    </main>
  );
}
