"use client";
import Link from "next/link";
import links from "@/utils/links";

const HeaderLoginButton = ({ children, burger, close }) => {
  return (
    <>
      <Link
        href={links.login}
        className={`bg-white-orange py-[11px] w-[120px] lg:flex items-center justify-center ${
          burger ? "flex" : "hidden"
        } hover:drop-shadow-roundedButton active:bg-darker-orange`}
        onClick={() => {
          if (close) {
            close();
          }
        }}
      >
        {children}
      </Link>
    </>
  );
};

export default HeaderLoginButton;
