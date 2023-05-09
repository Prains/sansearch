'use client'

const Input = ({
  placeholder = "123",
  htmlType = "text",
  className,
  onChange,
}) => {
  return (
    <input
      type={htmlType}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Input;
