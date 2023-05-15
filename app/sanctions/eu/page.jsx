import Main from "@/components/Main/Main";
import SearchingDocuments from "@/components/SearchingDocuments/SearchingDocuments";

const Eu = () => {
  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main searchingZone="Eu" searchingZoneTitle="Санкции ЕС" />
      <SearchingDocuments />
    </main>
  );
};

export default Eu;
