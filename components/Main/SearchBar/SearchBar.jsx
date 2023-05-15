import Image from "next/image";
import MainInput from "./MainInput/MainInput";
import Button from "@/components/ui/Button";
import { searchIcon } from "@/images/icons";

const SearchBar = () => {
  return (
    <article className="flex items-center justify-center flex-col lg:flex-row lg:w-full">
      <MainInput placeholder="Введите название документа" />
      <Button type="secondary" htmlType="submit" className="text-white gap-1">
        <Image src={searchIcon} alt="Белая лупа" />
        НАЙТИ
      </Button>
    </article>
  );
};

export default SearchBar;
