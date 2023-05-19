const PersonalSubtitle = ({ children, className }) => {
    return (
      <h2
        className={
          "text-[24px] leading-[130%] lg:text-[32px] " + ` ${className}`
        }
      >
        {children}
      </h2>
    );
  };
  
  export default PersonalSubtitle;