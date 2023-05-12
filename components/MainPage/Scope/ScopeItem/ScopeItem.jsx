import Image from "next/image";
import { doneSvg } from "@/images/icons/logo";

const ScopeItem = ({ text }) => {
  return (
    <li className="flex flex-row items-start mb-[18px] last:mb-0">
      <Image
        className="w-[20px] h-[20px] mt-[4px] mr-[9px] xl:h-[26px] xl:w-[26px] xl:mr-[18px]"
        src={doneSvg}
        alt="начало пункта в виде галочки"
      />
      <p className="text-[16px] leading-[156%] xl:text-[24px]">{text}</p>
    </li>
  );
};

export default ScopeItem;
