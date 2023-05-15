import Advantage from "@/components/MainPage/Advantage/Advantage";
import Main from "@/components/MainPage/Main/Main";
import Valueables from "@/components/MainPage/Valueables/Valueables";
import RegistrationPopup from "@/components/Popups/RegistrationPopup/RegistrationPopup";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <RegistrationPopup />
      <Main />
      <Valueables />
      <Advantage />
    </main>
  );
}
