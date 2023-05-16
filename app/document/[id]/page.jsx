"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Main from "@/components/Main/Main";
import Link from "next/link";
import Loader from "@/components/ui/Loader";

const Document = () => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const id = useParams().id;

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(false);
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );

        if (resp.status !== 200) {
          setError(true);
          return;
        }
        const data = await resp.json();
        setDocument(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  return (
    <>
      <Main searchingZone="Russia" searchingZoneTitle="Санкции РФ" />
      {loading && (
        <Loader className="w-full flex items-center justify-center mt-[30px]" />
      )}
      {error && (
        <p className="w-[88%] mx-auto mt-[20px] lg:w-[94%]">
          Ошибка получения данных...
        </p>
      )}
      {document && (
        <article className="w-[88%] mx-auto mt-[20px] lg:w-[94%] lg:mt-[100px]">
          <h2 className="font-bold text-[20px] mb-[20px] lg:mb-[43px] lg:text-[28px]">
            {document.title}
          </h2>
          <p className="text-[14px] mb-[12px] line-clamp-20 lg:text-[24px] lg:mb-[127px] lg:line-clamp-12">
            {JSON.stringify(document)}
          </p>
          {document && (
            <Link
              href={`https://jsonplaceholder.typicode.com/todos/${id}`}
              target="_blank"
              className="block flex items-center justify-center text-[20px] w-[280px] h-[40px] mx-auto text-white-orange border-[1px] border-white-orange lg:text-[24px] lg:w-[450px] lg:h-[50px]"
            >
              Посмотреть документ
            </Link>
          )}
        </article>
      )}
    </>
  );
};
export default Document;
