const Subtitle = ({ children, className, type = "primary" }) => {
  if (type === "secondary") {
    return (
      <h3 className={"font-bold text-base leading-4" + ` ${className}`}>
        {children}
      </h3>
    );
  }


  return (
    <h2
      className={
        "text-[24px] leading-[130%] uppercase xl:text-[36px]" + ` ${className}`
      }
    >
      {children}
    </h2>
  );

  return <h2 className={"text-2xl uppercase text-center lg:text-4xl" + ` ${className}`}>{children}</h2>;

};

export default Subtitle;
