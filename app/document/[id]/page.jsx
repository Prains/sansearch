import { Suspense } from "react";
import Main from "@/components/Main/Main";
import Loader from "@/components/ui/Loader";
import ErrorMessage from "../../../components/DocumentPage/ErrorMessage/ErrorMessage";
import DocumentBody from "../../../components/DocumentPage/DocumentBody/DocumentBody";
import { fetchDocument } from "@/utils/fetchData";

export default async function Document({ params: { id } }) {
  const document = await fetchDocument(id);

  return (
    <>
      <Main searchingZone="Russia" searchingZoneTitle="Санкции РФ" />
      <Suspense fallback={<Loader className="mt-[30px]" />}>
        {document?.title ? (
          <DocumentBody document={document} />
        ) : (
          <ErrorMessage />
        )}
      </Suspense>
    </>
  );
}
