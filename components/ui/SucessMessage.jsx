const SucessMessage = ({ children, className }) => {
  return (
    <article
      className={
        "hover:red-yellow-500 w-full mb-2 select-none border-l-4 border-green-400 bg-green-100 p-4 font-medium" +
        ` ${className}`
      }
    >
      {children}
    </article>
  );
};

export default SucessMessage;
