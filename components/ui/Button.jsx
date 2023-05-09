'use client'

const Button = ({
  children,
  onClick,
  className,
  htmlType = "button",
  type = "primary",
  disabled,
}) => {
  if (type === "secondary") {
    return (
      <button
        className={
          "bg-white-orange flex items-center justify-center text-[20px] leading-[14px] w-[280px] md:w-[290px] py-[13px] md:py-[18px]" +
          ` ${className}`
        }
        type={htmlType}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (type === "rounded") {
    return (
      <button
        className={
          "w-[120px] flex items-center justify-center py-3 text-sm leading-[14px] bg-white rounded-xl drop-shadow-roundedButton hover:bg-white-orange active:drop-shadow-none disabled:bg-transparent disabled:text-[#939393] disabled:border disabled:border-[#939393] disabled:border-solid" +
          ` ${className}`
        }
        type={htmlType}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={
        "bg-white-orange flex items-center justify-center text-base leading-4 w-[120px] py-[11px]" +
        ` ${className}`
      }
      type={htmlType}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
