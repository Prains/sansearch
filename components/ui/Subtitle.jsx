const Subtitle = ({ children, className, type = "primary" }) => {
  if (type === "secondary") {
    return (
      <h3 className={"font-bold text-base leading-4" + ` ${className}`}>
        {children}
      </h3>
    );
  }

  return <h2 className={"text-2xl uppercase text-center lg:text-4xl" + ` ${className}`}>{children}</h2>;
};

export default Subtitle;
