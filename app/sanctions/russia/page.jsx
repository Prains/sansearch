import Main from "@/components/Main/Main";
import SearchingDocuments from "@/components/SearchingDocuments/SearchingDocuments";

const Russia = () => {
  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main searchingZone="Russia" searchingZoneTitle="Санкции РФ" />
      <SearchingDocuments />
    </main>
  );
};

export default Russia;
