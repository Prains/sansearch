"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLink = ({ children, href, close, className }) => {
  const path = usePathname();
  return (
    <li className={className}>
      <Link
        href={href}
        className={
          "text-[18px]" +
          ` ${path === href ? "border-b-[2px] border-[#FFC56D] " : ""}`
        }
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
