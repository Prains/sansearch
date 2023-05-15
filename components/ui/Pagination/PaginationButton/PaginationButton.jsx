const PaginationButton = ({
  isCurrentPage,
  onClick,
  children,
  disabled = false,
  ...rest
}) => {
  const classForButton = `flex items-center justify-center w-full h-full font-text text-[16px] leading-[20px] bg-white rounded-[2px] hover:border-[2px] hover:border-white-orange ${disabled &&
    "hover:!border-white"}  ${isCurrentPage &&
    "bg-white-orange hover:!border-white-orange"}`;

  return (
    <li className="flex items-center justify-center w-[32px] h-[32px] mx-[2px]  cursor-pointer">
      <button
        className={classForButton}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </li>
  );
};

export default PaginationButton;
