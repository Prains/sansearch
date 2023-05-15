import Title from "@/components/ui/Title";
import MainInput from "./MainInput/MainInput";
import { background } from "@/images/Mainpage/Main";
import Button from "@/components/ui/Button";
import { searchIcon } from "@/images/icons";
import Image from "next/image";

const Main = ({ searchingZone, searchingZoneTitle }) => {
  const classForTitle = searchingZoneTitle && "mx-auto";
  return (
    <section
      className="flex items-center justify-center w-full mt-5"
      style={{
        background: `url('${background.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[88%] my-[50px] mx-auto flex items-center justify-center flex-col lg:items-start">
        <Title className={`mb-10 lg:mb-5 ${classForTitle}`}>
          {searchingZoneTitle || "поиск документа"}
        </Title>
        <form className="lg:w-full">
          <article className="flex items-center justify-center flex-col lg:flex-row lg:w-full">
            <MainInput placeholder="Введите название документа" />
            <Button
              type="secondary"
              htmlType="submit"
              className="text-white gap-1"
            >
              <Image src={searchIcon} alt="Белая лупа" />
              НАЙТИ
            </Button>
          </article>
          {!searchingZone && (
            <article className="flex items-center justify-center flex-col mt-[25px] gap-4 lg:flex-row lg:justify-start lg:mt-5">
              <Button type="rounded">Санкции РФ</Button>
              <Button type="rounded">Санкции США</Button>
              <Button type="rounded">Санкции ЕС</Button>
            </article>
          )}
        </form>
      </div>
    </section>
  );
};

export default Main;
