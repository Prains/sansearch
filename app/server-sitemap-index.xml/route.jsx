import { getServerSideSitemapIndex } from "next-sitemap";
import { fetchDocuments } from "@/utils/fetchData";

export async function GET(request) {
  const ruDocuments = await fetchDocuments("ru");
  const usaDocuments = await fetchDocuments("usa");
  const euDocuments = await fetchDocuments("eu");
  const documents = [...ruDocuments, ...usaDocuments, ...euDocuments];

  const linksArray = [];

  documents.forEach((document) => {
    linksArray.push(`https://sansearch.ru/document/${document.id}`);
  });

  return getServerSideSitemapIndex(linksArray);
}
