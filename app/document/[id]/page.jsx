"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Main from "@/components/Main/Main";
import Loader from "@/components/ui/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import DocumentBody from "./DocumentBody/DocumentBody";

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
          setLoading(false);
          return;
        }
        const data = await resp.json();
        setDocument(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }

    load();
  }, [id]);

  return (
    <>
      <Main searchingZone="Russia" searchingZoneTitle="Санкции РФ" />
      {loading && <Loader className="mt-[30px]" />}
      {error && <ErrorMessage />}
      {document && <DocumentBody document={document} />}
    </>
  );
};
export default Document;
