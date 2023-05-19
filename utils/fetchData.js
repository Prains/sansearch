export async function fetchDocument(id) {
  try {
    const resp = await fetch(`http://45.91.8.76:1337/api/documents/${id}`, {
      next: { revalidate: 60 },
    });

    const json = await resp.json();
    const data = await json.data;

    return data;
  } catch (e) {
    return new Error("Ошибка получения данных");
  }
}

export async function fetchDocuments() {
  try {
    const resp = await fetch(`http://45.91.8.76:1337/api/documents`, {
      next: { revalidate: 60 },
    });

    const data = await resp.json();

    return data;
  } catch (e) {
    return new Error("Ошибка получения данных");
  }
}

export async function getFileUrl(id) {
  try {
    const resp = await fetch(
      `http://45.91.8.76:1337/api/documents/${id}?populate=*`,
      {
        next: { revalidate: 60 },
      }
    );

    const url = await resp
      .json()
      .then((json) => json.data)
      .then((data) => data.attributes)
      .then((attributes) => attributes.documentFile)
      .then((dataFile) => dataFile.data)
      .then((fileAttributes) => fileAttributes.attributes)
      .then((url) => url.url)
      .catch((e) => {
        throw new Error("Ошибка получения адреса");
      });

    return url;
  } catch (error) {
    return new Error("Ошибка получения адреса");
  }
}
