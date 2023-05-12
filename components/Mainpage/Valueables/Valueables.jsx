import Subtitle from "@/components/ui/Subtitle";
import VBlock from "./VBlock/VBlock";
import { financial, time, comfort, access } from "@/images/Mainpage/Valueables";

const Valueables = () => {
  const blockData = [
    {
      image: comfort,
      title: "Удобство",
      subtitle: "Поиск санкционных документов РФ, США, ЕС на одном ресурсе",
    },
    {
      image: time,
      title: "Время",
      subtitle: "Быстрый анализ информации относительно введенных ограничений",
    },
    {
      image: access,
      title: "Доступность",
      subtitle: "Возможность доступа к информации в любое время",
    },
    {
      image: financial,
      title: "Снижение рисков",
      subtitle: "Помогаем найти нужную информацию для минимизации Ваших рисков",
    },
  ];

  return (
    <section className="w-[75%] lg:w-[87%] mx-auto my-0 flex items-center justify-center flex-col">
      <Subtitle className="w-[200px] mb-[15px] text-center lg:text-left lg:w-max lg:self-start">
        наши ценности
      </Subtitle>
      <div className="flex items-center justify-center flex-col gap-5 lg:flex-row lg:gap-9">
        {blockData.map((block) => {
          return <VBlock {...block} key={block.title} />;
        })}
      </div>
    </section>
  );
};

export default Valueables;
