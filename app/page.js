import Advantage from "@/components/Mainpage/Advantage/Advantage.jsx";
import Main from "@/components/Mainpage/Main/Main";
import Valueables from "@/components/Mainpage/Valueables/Valueables";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main />
      <Valueables />
      <Advantage />
    </main>
  );
}
