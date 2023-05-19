const ErrorMessage = ({ children }) => {
  return (
    <p className="text-[14px] text-center w-[88%] mx-auto mt-[20px] lg:text-[24px] lg:w-[94%]">
      {children}
    </p>
  );
};

export default ErrorMessage;
