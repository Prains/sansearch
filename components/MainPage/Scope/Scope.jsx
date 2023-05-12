"use client";

import React from "react";
import Subtitle from "@/components/ui/Subtitle";
import Button from "@/components/ui/Button";
import Scopeitem from "./ScopeItem/ScopeItem";

const Scope = () => {
  const scopes = [
    "Просмотр санкционных документов РФ, США, ЕС (включая разъяснения)",
    "Просмотр торговых ограничений РФ, США, ЕС",
    "Расчёт критерия контроля (ЕС)",
    "Расчёт критерия владения (критерий 50%)",
    "Проверка факта включения в санкционные списки",
  ];
  return (
    <div className=" pb-[30px] pt-[28px] xl:pt-[58px] xl:pb-[53px] bg-silver bg-no-repeat bg-cover bg-center">
      <section className="flex flex-col items-center w-[88%] mx-auto lg:w-[91%] xl:items-start">
        <Subtitle>Возможности</Subtitle>
        <ul className="max-w-[90%] mt-[28px] mb-[30px] xl:my-[52px]">
          {scopes.map((scope, i) => (
            <Scopeitem key={i} text={scope} />
          ))}
        </ul>
        <Button
          type="secondary"
          className="text-white uppercase"
          onClick={() => {
            console.log("xDDDDDD");
          }}
        >
          Попробовать
        </Button>
      </section>
    </div>
  );
};

export default Scope;
