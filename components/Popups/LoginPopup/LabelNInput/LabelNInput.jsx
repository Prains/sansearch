const LabelNInput = ({
  label,
  placeholder,
  htmlType,
  onChange,
  value,
  className,
  minLength,
}) => {
  return (
    <label className="flex-center justify-between w-full lg:text-[24px]">
      {label}
      <input
        placeholder={placeholder}
        type={htmlType}
        onChange={onChange}
        value={value}
        minLength={minLength}
        className={
          "bg-transparent border-b border-b-[#939393] text-[#939393] w-[180px] lg:w-[351px] lg:placeholder:text-2xl lg:h-[45px] " +
          `${className}`
        }
        required
      />
    </label>
  );
};

export default LabelNInput;
