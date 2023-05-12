"use client";

const MainInput = ({
  placeholder,
  htmlType = "text",
  onChange,
  required = true,
}) => {
  return (
    <input
      type={htmlType}
      placeholder={placeholder}
      minLength={2}
      required
      maxLength={254}
      onChange={onChange}
      className="w-[280px] lg:w-full placeholder:pl-4 py-2 lg:py-0 lg:h-[60px] border-[#FFB443] border rounded-sm"
    />
  );
};

export default MainInput;
