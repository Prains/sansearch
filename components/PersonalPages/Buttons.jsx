"use client";

const Buttons = ({
  children,
  onClick,
  className,
  htmlType = "button",
  type = "orange",
  disabled,
  required,
}) => {
  if (type === "orange") {
    return (
      <button
        className={
          "bg-full-white flex items-center text-[20px] justify-center border border-white-orange text-white-orange h-[45px] mb-[15px] lg:w-[416px] w-[280px] lg:h-[60px] active:bg-darker-orange hover:bg-white-orange hover:text-full-white" +
          ` ${className}`
        }
        type={htmlType}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (type === "grey") {
    return (
      <button
        className={
            "bg-full-white flex items-center text-[20px] justify-center border border-white-black text-white-black h-[45px] mb-[15px] lg:w-[416px] w-[280px] lg:h-[60px] active:bg-full-black hover:bg-white-black hover:text-full-white" + 
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

  return (
    <button
      className={
        "bg-full-white flex items-center justify-center text-base leading-4 w-[120px] py-[11px]" +
        ` ${className}`
      }
      type={htmlType}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Buttons;
