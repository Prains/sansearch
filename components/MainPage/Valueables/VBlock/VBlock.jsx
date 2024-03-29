import Subtitle from "@/components/ui/Subtitle";
import Image from "next/image";

const VBlock = ({ image, title, subtitle }) => {
  return (
    <article className="w-[280px] flex items-center justify-center flex-col gap-2 p-10 bg-white-grey rounded-2xl h-[240px] lg:h-[270px] lg:w-1/4">
      <Image src={image} alt={title} />
      <Subtitle type="secondary" className="text-center">
        {title}
      </Subtitle>
      <p className="text-center leading-[15px] text-[12px] lg:text-[14px] lg:leading-[17px]">
        {subtitle}
      </p>
    </article>
  );
};

export default VBlock;
