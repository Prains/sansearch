import { notFound } from "next/navigation";
import Main from "@/components/Main/Main";
import DocumentBody from "../../../components/DocumentPage/DocumentBody/DocumentBody";
import { fetchDocument } from "@/utils/fetchData";
import { getZoneAndTitle } from "@/utils/getZoneAndTitle";

export default async function Document({ params: { id } }) {
  const document = await fetchDocument(id);

  if (!document) {
    notFound();
  }

  return (
    <>
      <Main
        searchingZone={getZoneAndTitle(document.attributes.type).searchingZone}
        type={document.attributes.type}
        searchingZoneTitle={
          getZoneAndTitle(document.attributes.type).searchingZoneTitle
        }
      />
      <DocumentBody document={document} />
    </>
  );
}
