"use client";
import Link from "next/link";

const ChecksLink = ({ children, href, close }) => {
  return (
    <li>
      <Link
        href={href}
        className="text-[24px]"
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

export default ChecksLink;
