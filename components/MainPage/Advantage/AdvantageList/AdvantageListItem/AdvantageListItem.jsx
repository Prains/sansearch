import Image from "next/image";
import { doneSvg } from "@/images/icons";

const AdvantageListItem = ({ text }) => {
  return (
    <li className="flex flex-row items-start mb-[18px] last:mb-0">
      <Image
        className="w-[20px] h-[20px] mt-[4px] mr-[9px] lg:h-[26px] lg:w-[26px] lg:mr-[18px]"
        src={doneSvg}
        alt="начало пункта в виде галочки"
      />
      <p className="text-[16px] leading-[156%] lg:text-[24px]">{text}</p>
    </li>
  );
};

export default AdvantageListItem;
