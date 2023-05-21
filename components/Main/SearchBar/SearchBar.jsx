"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MainInput from "./MainInput/MainInput";
import useInput from "@/hooks/useInput";
import Button from "@/components/ui/Button";
import links from "@/utils/links";
import { searchIcon } from "@/images/icons";

const SearchBar = ({ searchingZone }) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useInput("");

  const handleClickSearchButton = async (e) => {
    if (inputValue.trim()) {
      e.preventDefault();
      if (searchingZone === "ru") {
        router.push(
          `${links.sanctionsRussia}/?search=${inputValue}`,
          undefined,
          { shallow: true }
        );
      }
      if (searchingZone === "eu") {
        router.push(`${links.sanctionsES}/?search=${inputValue}`, undefined, {
          shallow: true,
        });
      }
      if (searchingZone === "usa") {
        router.push(`${links.sanctionsUsa}/?search=${inputValue}`, undefined, {
          shallow: true,
        });
      }
    }
  };

  return (
    <article className="flex items-center justify-center flex-col lg:flex-row lg:w-full">
      <MainInput
        value={inputValue}
        onChange={setInputValue}
        placeholder="Введите название документа"
      />
      <Button
        onClick={handleClickSearchButton}
        type="secondary"
        htmlType="submit"
        className="text-white gap-1"
      >
        <Image src={searchIcon} alt="Белая лупа" />
        НАЙТИ
      </Button>
    </article>
  );
};

export default SearchBar;
