import Subtitle from "@/components/ui/Subtitle";
import Image from "next/image";
import { comfort } from "@/images/Mainpage/Valueables";

const VBlock = () => {
  return (
    <article className="flex items-center justify-center flex-col">
      <Image src={comfort} />
      <Subtitle type="secondary" className="mb-2">
        Удобство
      </Subtitle>
      <p className="w-[160px] text-center leading-[15px] text-[12px]">
        Поиск санкционных документов РФ, США, ЕС на одном ресурсе
      </p>
    </article>
  );
};

export default VBlock;
