import Advantage from "@/components/MainPage/Advantage/Advantage";
import Main from "@/components/Main/Main";
import Valueables from "@/components/MainPage/Valueables/Valueables";
import QuestionsOfControl from "@/components/Popups/QuestionsOfControl/QuestionsOfControl";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]">
      <Main />
      <Valueables />
      <Advantage />
      <QuestionsOfControl />
    </main>
  );
}
