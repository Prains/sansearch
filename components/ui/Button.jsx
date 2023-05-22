"use client";

const Button = ({
  children,
  onClick,
  className,
  htmlType = "button",
  type = "primary",
  disabled,
  required,
  ...rest
}) => {
  if (type === "secondary") {
    return (
      <button
        className={
          "bg-white-orange flex items-center justify-center text-[20px] w-[280px] h-[40px] lg:w-[290px] lg:h-[60px] hover:drop-shadow-roundedButton active:bg-darker-orange" +
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
          " w-[280px] lg:w-[120px] flex items-center justify-center py-3 text-sm leading-[14px] bg-white rounded-xl drop-shadow-roundedButton hover:bg-white-orange active:drop-shadow-none disabled:bg-transparent disabled:text-[#939393] disabled:border disabled:border-[#939393] disabled:border-solid" +
          ` ${className}`
        }
        type={htmlType}
        onClick={onClick}
        required
      >
        {children}
      </button>
    );
  }

  if (type === "long") {
    return (
      <button
        onClick={onClick}
        className="text-[20px] w-[280px] h-[44px] mb-[16px] text-white-orange bg-white border-[1px] border-white-orange text-white md:rounded-[5px] xl:w-[416px]"
        {...rest}
      >
        {children}
      </button>
    );
  }

  if (type === "long-fill") {
    return (
      <button
        onClick={onClick}
        className="text-[20px] w-[280px] h-[44px] mb-[16px] bg-white-orange text-white disabled:text-white-black disabled:bg-white disabled:border-white-black disabled:border-[1px] md:rounded-[5px] xl:w-[416px]"
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={
        "bg-white-orange flex items-center justify-center text-base leading-4 w-[120px] py-[11px] hover:drop-shadow-roundedButton active:bg-darker-orange" +
        ` ${className}`
      }
      type={htmlType}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
