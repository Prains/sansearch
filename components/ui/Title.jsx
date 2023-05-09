const Title = ({ children, className }) => {
  return (
    <h1 className={"text-4xl uppercase" + ` ${className ? className : ""}`}>
      {children}
    </h1>
  );
};

export default Title;
