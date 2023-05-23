import apiToken from "./apiToken";
import links from "./links";

export async function fetchDocument(id) {
  const resp = await fetch(`${links.backend}/api/documents/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: apiToken,
    },
    next: { revalidate: 60 },
  });

  const json = await resp.json();
  const data = await json.data;

  return data;
}

export async function fetchDocuments(zone) {
  const resp = await fetch(`${links.backend}/api/documents`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: apiToken,
    },
    next: { revalidate: 60 },
  });

  const data = await resp.json();

  const filterData = () => {
    const filteredData = data.data.filter(
      (doc) => doc.attributes.type === zone
    );
    return filteredData;
  };

  const filteredData = filterData();

  return filteredData;
}

export async function getFileUrl(id) {
  const resp = await fetch(`${links.backend}/api/documents/${id}?populate=*`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: apiToken,
    },
    next: { revalidate: 60 },
  });

  const url = await resp
    .json()
    .then((json) => json.data)
    .then((data) => data.attributes)
    .then((attributes) => attributes.documentFile)
    .then((dataFile) => dataFile.data)
    .then((fileAttributes) => fileAttributes.attributes)
    .then((url) => url.url);

  return url;
}

/**
 * @param {string}  documentType - "policy" | "concentToData"
 */

export async function getFileUrlForPrivacyDocuments(documentType) {
  const documentUrl =
    documentType === "policy"
      ? "confidential-policy"
      : "personal-data-processing";

  const resp = await fetch(
    `https://sansearch.ru/strapi/api/${documentUrl}/?populate=*`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: apiToken,
      },
      next: { revalidate: 60 },
    }
  );

  const url = await resp
    .json()
    .then((json) => json.data)
    .then((data) => data.attributes)
    .then((attributes) => attributes.pdfFile)
    .then((pdfFile) => pdfFile.data)
    .then((fileAttributes) => fileAttributes.attributes)
    .then((url) => url.url);

  return url;
}
