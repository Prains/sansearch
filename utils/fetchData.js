export async function fetchDocument(id) {
  try {
    const resp = await fetch(`http://45.91.8.76:1337/api/documents/${id}`, {
      next: { revalidate: 60 },
    });

    const json = await resp.json();
    const data = await json.data;

    if (data === null) throw new Error("Ошибка получения данных");

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
