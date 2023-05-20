import SearchingDocument from "./SearchingDocument/SearchingDocument";

const SanctionsPage = ({ documents }) => {
  return (
    <div className="w-[88%] mx-auto">
      <p className="text-[20px] mt-[-26px] mb-[20px] lg:mt-[-52px] lg:text-[28px]">
        Результаты поиска
      </p>
      {documents?.length === 0 && <p>Документов не найдено</p>}
      {documents?.length > 0 && <SearchingDocument documents={documents} />}
    </div>
  );
};

export default SanctionsPage;
