import { notFound } from "next/navigation";
import Main from "@/components/Main/Main";
import DocumentBody from "../../../components/DocumentPage/DocumentBody/DocumentBody";
import { fetchDocument } from "@/utils/fetchData";

export default async function Document({ params: { id } }) {
  const document = await fetchDocument(id);

  if (!document) {
    notFound();
  }

  return (
    <>
      <Main searchingZone="Russia" searchingZoneTitle="Санкции РФ" />
      <DocumentBody document={document} />
    </>
  );
}
