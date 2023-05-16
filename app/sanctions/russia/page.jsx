import Main from "@/components/Main/Main";
import SanctionsPage from "@/components/SanctionsPage/SanctionsPage";

const Russia = () => {
  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main searchingZone="Russia" searchingZoneTitle="Санкции РФ" />
      <SanctionsPage />
    </main>
  );
};

export default Russia;
