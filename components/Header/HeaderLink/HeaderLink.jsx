import Link from "next/link";

const HeaderLink = ({ children, href }) => {
  return (
    <li>
      <Link href={href} className="text-[18px]">
        {children}
      </Link>
    </li>
  );
};

export default HeaderLink;
