import SearchingDocumentItem from "./SearchingDocumentItem/SearchingDocumentItem";

const SearchingDocumentList = ({ slicedDocuments }) => {
  return (
    <ul className="list-disc mt-[20px] mb-[40px]">
      {slicedDocuments?.map((document) => (
        <SearchingDocumentItem document={document} key={document.id} />
      ))}
    </ul>
  );
};

export default SearchingDocumentList;
