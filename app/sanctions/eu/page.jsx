import Main from "@/components/Main/Main";
import SanctionsPage from "@/components/SanctionsPage/SanctionsPage";

const Eu = () => {
  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main searchingZone="Eu" searchingZoneTitle="Санкции ЕС" />
      <SanctionsPage />
    </main>
  );
};

export default Eu;
