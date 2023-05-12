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
      required={required}
      maxLength={254}
      onChange={onChange}
      className="w-[280px] placeholder:pl-4 py-2 border-darker-orange border rounded-sm rounded-ee-none rounded-es-none lg:w-full lg:py-0 lg:h-[60px] lg:rounded-e-none lg:rounded-es-sm"
    />
  );
};

export default MainInput;
