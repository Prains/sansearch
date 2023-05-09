const PaginationButton = ({ children }) => {
  return (
    <button className="w-7 h-7 flex items-center justify-center">
      {children}
    </button>
  );
};

export default PaginationButton;
