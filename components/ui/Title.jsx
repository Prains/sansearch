const Title = ({ children, onClick, className }) => {
  return (
    <h1
      className={"text-4xl uppercase" + ` ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </h1>
  );
};

export default Title;
