import Main from "@/components/Main/Main";
import SanctionsPage from "@/components/SanctionsPage/SanctionsPage";

const Usa = () => {
  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main searchingZone="Usa" searchingZoneTitle="Санкции США" />
      <SanctionsPage />
    </main>
  );
};

export default Usa;
