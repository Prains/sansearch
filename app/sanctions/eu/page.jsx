import Main from "@/components/Main/Main";
import SanctionsPage from "@/components/SanctionsPage/SanctionsPage";
import { fetchDocuments } from "@/utils/fetchData";

export default async function Eu() {
  const documents = await fetchDocuments();

  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main searchingZone="Eu" searchingZoneTitle="Санкции ЕС" />
      <SanctionsPage documents={documents} />
    </main>
  );
}
