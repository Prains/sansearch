const Subtitle = ({ children, className, onClick, type = "primary" }) => {
  if (type === "secondary") {
    return (
      <h3
        className={"font-bold text-base leading-4" + ` ${className}`}
        onClick={onClick}
      >
        {children}
      </h3>
    );
  }

  return (
    <h2 className={"text-3xl uppercase" + ` ${className}`} onClick={onClick}>
      {children}
    </h2>
  );
};

export default Subtitle;
