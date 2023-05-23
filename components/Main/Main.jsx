"use client";
import { useState } from "react";
import Title from "@/components/ui/Title";
import { background } from "@/images/Mainpage/Main";
import SearchBar from "./SearchBar/SearchBar";
import MainButtons from "./MainButtons/MainButtons";

const Main = ({ searchingZone, searchingZoneTitle }) => {
  const [zone, setZone] = useState(searchingZone ?? "ru");

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
          <SearchBar searchingZone={zone} />
          {!searchingZone && <MainButtons zone={zone} setZone={setZone} />}
        </form>
      </div>
    </section>
  );
};

export default Main;
