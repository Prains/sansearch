const SearchTitle = ({ search }) => {
  if (search) {
    return (
      <p className="text-[20px] mt-[-26px] mb-[20px] lg:mt-[-52px] lg:text-[28px]">
        Результаты поиска по запросу: <i>{search}</i>
      </p>
    );
  }

  return (
    <p className="text-[20px] mt-[-26px] mb-[20px] lg:mt-[-52px] lg:text-[28px]">
      Результаты поиска
    </p>
  );
};

export default SearchTitle;
