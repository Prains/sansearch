"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Title from "@/components/ui/Title";
import { background } from "@/images/Mainpage/Main";
import SearchBar from "./SearchBar/SearchBar";
import MainButtons from "./MainButtons/MainButtons";
import { setSearchingZone } from "@/services/reducers/ui/uiReducer";

const Main = ({ searchingZone, searchingZoneTitle }) => {
  const dispatch = useDispatch();
  const classForTitle = searchingZoneTitle && "mx-auto";

  useEffect(() => {
    dispatch(setSearchingZone(searchingZone));
  }, []);
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
          <SearchBar />
          {!searchingZone && <MainButtons />}
        </form>
      </div>
    </section>
  );
};

export default Main;
