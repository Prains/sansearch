import Subtitle from "@/components/ui/Subtitle";
import Image from "next/image";

const VBlock = ({ image, title, subtitle }) => {
  return (
    <article className="flex items-center justify-center flex-col gap-2 p-10 bg-white-grey rounded-2xl h-[270px]">
      <Image src={image} alt={title} />
      <Subtitle type="secondary">{title}</Subtitle>
      <p className="w-[188px] text-center leading-[15px] text-[12px] lg:text-[14px] lg:leading-[17px]">
        {subtitle}
      </p>
    </article>
  );
};

export default VBlock;
