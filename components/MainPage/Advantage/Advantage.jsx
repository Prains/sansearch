import Button from "@/components/ui/Button";
import Subtitle from "@/components/ui/Subtitle";
import AdvantageList from "./AdvantageList/AdvantageList";

const Advantage = () => {
  const advantages = [
    "Просмотр санкционных документов РФ, США, ЕС (включая разъяснения)",
    "Просмотр торговых ограничений РФ, США, ЕС",
    "Расчёт критерия контроля (ЕС)",
    "Расчёт критерия владения (критерий 50%)",
    "Проверка факта включения в санкционные списки",
  ];
  return (
    <div className="pb-[30px] pt-[28px] lg:pt-[58px] lg:pb-[53px] bg-silver bg-no-repeat bg-cover bg-center w-full">
      <section className="flex flex-col items-center w-[75%] lg:w-[87%] mx-auto lg:items-start">
        <Subtitle>Возможности</Subtitle>
        <AdvantageList list={advantages} />
        <Button type="secondary" className="text-white uppercase">
          Попробовать
        </Button>
      </section>
    </div>
  );
};

export default Advantage;
