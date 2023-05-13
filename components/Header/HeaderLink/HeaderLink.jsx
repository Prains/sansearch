"use client";
import Link from "next/link";

const HeaderLink = ({ children, href, close }) => {
  return (
    <li>
      <Link
        href={href}
        className="text-[18px]"
        onClick={() => {
          if (close) {
            close();
          }
        }}
      >
        {children}
      </Link>
    </li>
  );
};

export default HeaderLink;
