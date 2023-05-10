export const paginate = (documents, currentPage, documentsPerPage) => {
  const lastDocumentIndex = currentPage * documentsPerPage;
  const firstDocumentIndex = lastDocumentIndex - documentsPerPage;
  const currentDocuments = documents.slice(
    firstDocumentIndex,
    lastDocumentIndex
  );
  // возвращаем массив элементов, согласно текущей странице в пагинации
  return currentDocuments;
};
