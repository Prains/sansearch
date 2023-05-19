import links from "./links";

export async function fetchDocument(id) {
  const resp = await fetch(`${links.backend}/api/documents/${id}`, {
    next: { revalidate: 60 },
  });

  const json = await resp.json();
  const data = await json.data;

  return data;
}

export async function fetchDocuments() {
  const resp = await fetch(`${links.backend}/api/documents`, {
    next: { revalidate: 60 },
  });

  const data = await resp.json();

  return data;
}

export async function getFileUrl(id) {
  const resp = await fetch(`${links.backend}/api/documents/${id}?populate=*`, {
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
