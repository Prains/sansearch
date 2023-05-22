const ErrorMessage = ({ children, className }) => {
  return (
    <article
      className={
        "hover:red-yellow-500 w-full mb-2 select-none border-l-4 border-red-400 bg-red-100 p-4 font-medium" +
        ` ${className}`
      }
    >
      {children}
    </article>
  );
};

export default ErrorMessage;
