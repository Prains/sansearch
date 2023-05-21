"use client";

const InputSend = ({
    label,
    placeholder,
    htmlType,
    onChange = null,
    defaultValue = null,
    className,
  }) => {
    return (
        <>
            <label className="flex justify-between items-center mb-[20px] text-[16px] flex-wrap leading-none lg:flex-nowrap lg:text-[24px]">
            {label}
            <input
                placeholder={placeholder}
                type={htmlType}
                onChange={onChange}
                defaultValue={defaultValue}
                className={
                className="border border-b border-b-white-black text-black text-[14px] lg:text-[20px] h-[45px] pl-2 ml-4 py-2 w-[175px] lg:w-[350px] lg:ml-0 lg:py-0"
                +
                `${className}`
                }
                required
            />
            </label>      
        </>
    )

  };
  
  export default InputSend;
  