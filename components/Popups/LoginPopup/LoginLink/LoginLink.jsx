import Link from "next/link";

const LoginLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="text-[#939393] text-[12px] hover:text-[#FFC56D]"
    >
      {children}
    </Link>
  );
};

export default LoginLink;
