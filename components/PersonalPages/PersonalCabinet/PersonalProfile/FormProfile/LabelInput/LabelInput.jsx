"use client";

const LabelInput = ({
  label,
  placeholder,
  htmlType,
  onChange = null,
  defaultValue = null,
  className,
  isAddButtons,
  minLength,
}) => {
  return (
    <>
      {isAddButtons ? (
        <label className="flex justify-between items-center mb-[20px] text-[22px] flex-wrap leading-none lg:flex-nowrap lg:text-[24px]">
          {label}
          <input
            placeholder={placeholder}
            type={htmlType}
            onChange={onChange}
            defaultValue={defaultValue}
            className={
              (className =
                "border border-b border-b-white-black text-black text-[20px] h-[45px] pl-2 ml-4 py-2 w-[242px] lg:ml-0 lg:py-0" +
                `${className}`)
            }
            required
            minLength={minLength}
          />
        </label>
      ) : (
        <label className="flex justify-between items-center mb-[20px] text-[22px] flex-wrap leading-none lg:flex-nowrap lg:text-[24px]">
          {label}
          <input
            placeholder={placeholder}
            type={htmlType}
            onChange={onChange}
            defaultValue={defaultValue}
            disabled
            className={
              (className =
                "border border-b border-b-white-black text-white-black text-[20px] h-[45px] pl-2 ml-4 py-2 w-[242px] lg:ml-0 lg:py-0" +
                `${className}`)
            }
            required
            minLength={minLength}
          />
        </label>
      )}
    </>
  );
};

export default LabelInput;
