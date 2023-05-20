import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import MainInput from "./MainInput/MainInput";
import Button from "@/components/ui/Button";
import useInput from "@/hooks/useInput";
import { searchDocuments } from "@/utils/fetchData";
import { setDocuments } from "@/services/reducers/ui/uiReducer";
import { searchIcon } from "@/images/icons";

const SearchBar = () => {
  const [inputValue, setInputValue] = useInput("");
  const dispatch = useDispatch();
  const searchingZone = useSelector((state) => state.ui.searchingZone);

  const handleClickSearchButton = async (e) => {
    if (inputValue.trim()) {
      e.preventDefault();
      const searchedDocuments = await searchDocuments(
        inputValue,
        searchingZone
      );
      dispatch(setDocuments(searchedDocuments));
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
