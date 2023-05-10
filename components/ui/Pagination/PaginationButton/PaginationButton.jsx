const PaginationButton = ({ isCurrentPage, onClick, children, ...rest }) => {
  const classForButton = `flex items-center justify-center w-full h-full font-text text-[16px] leading-[20px] ${isCurrentPage &&
    "bg-white-orange rounded-[2px]"}`;
  return (
    <li className="flex items-center justify-center w-[32px] h-[32px] mx-[2px] cursor-pointer">
      <button className={classForButton} onClick={onClick} {...rest}>
        {children}
      </button>
    </li>
  );
};

export default PaginationButton;
