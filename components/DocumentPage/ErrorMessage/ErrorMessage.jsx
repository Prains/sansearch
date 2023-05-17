const ErrorMessage = ({ message }) => {
  return (
    <p className="text-[14px] text-center w-[88%] mx-auto mt-[20px] lg:text-[24px] lg:w-[94%]">
      Произошла ошибка: {message}
    </p>
  );
};

export default ErrorMessage;
