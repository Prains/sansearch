export async function fetchDocument(id) {
  try {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    if (!resp.ok) {
      return new Error("Ошибка получения данных");
    }

    const data = await resp.json();
    return data;
  } catch (e) {
    return new Error("Ошибка получения данных");
  }
}

export async function fetchDocuments() {
  try {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/`);

    if (!resp.ok) {
      return new Error("Ошибка получения данных");
    }

    const data = await resp.json();
    return data;
  } catch (e) {
    return new Error("Ошибка получения данных");
  }
}
