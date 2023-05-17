const PersonalTitle = ({ children, className }) => {
    return (
      <h4 className={"text-[32px] lg:text-4xl" + ` ${className ? className : ""}`}>
        {children}
      </h4>
    );
  };
  
  export default PersonalTitle;
  