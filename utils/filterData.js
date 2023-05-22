export const filterData = (documents, searchValue) => {
  const includedValue = documents.filter((doc) => {
    if (
      doc?.attributes?.title
        ?.toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      doc?.attributes?.description
        ?.toLowerCase()
        .includes(searchValue.toLowerCase())
    ) {
      return true;
    }

    return false;
  });

  return includedValue;
};
