'use client'
import Image from "next/image";
import {
  footerDesktop,
  footerMobile,
  headerDesktop,
  headerMobile,
} from "@/images/icons/logo";
import Link from "next/link";

const Logo = ({ type = "primary", href = "/", close }) => {
  if (type === "secondary") {
    return (
      <Link
        href={href}
        onClick={() => {
          if (close) {
            close();
          }
        }}
      >
        <Image
          src={footerMobile}
          className="md:hidden"
          alt="Логотип SanSearch - три книжки лежащие друг на друге и название компании"
        />
        <Image
          src={footerDesktop}
          className="hidden md:block"
          alt="Логотип SanSearch - три книжки лежащие друг на друге и название компании"
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={() => {
        if (close) {
          close();
        }
      }}
    >
      <Image
        src={headerMobile}
        className="md:hidden"
        alt="Логотип SanSearch - три книжки лежащие друг на друге и название компании"
      />
      <Image
        src={headerDesktop}
        className="hidden md:block"
        alt="Логотип SanSearch - три книжки лежащие друг на друге и название компании"
      />
    </Link>
  );
};

export default Logo;
