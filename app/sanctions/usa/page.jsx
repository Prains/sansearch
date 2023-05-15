import Main from "@/components/Main/Main";
import SearchingDocuments from "@/components/SearchingDocuments/SearchingDocuments";

const Usa = () => {
  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main searchingZone="Usa" searchingZoneTitle="Санкции США" />
      <SearchingDocuments />
    </main>
  );
};

export default Usa;
