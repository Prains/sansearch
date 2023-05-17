export async function fetchDocument(id) {
  try {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      { next: { revalidate: 60 } }
    );
    console.log("STATUS" + resp.status);
    if (resp.status !== 200) throw new Error("Ошибка получения данных");
    if (!resp.ok) throw new Error("Ошибка получения данных");

    const data = await resp.json();
    return data;
  } catch (e) {
    return new Error("Ошибка получения данных");
  }
}

export async function fetchDocuments() {
  try {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/`, {
      next: { revalidate: 60 },
    });

    if (!resp.ok) {
      return new Error("Ошибка получения данных");
    }

    const data = await resp.json();
    return data;
  } catch (e) {
    return new Error("Ошибка получения данных");
  }
}
