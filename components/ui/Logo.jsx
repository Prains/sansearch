import Image from "next/image";
import {
  footerDesktop,
  footerMobile,
  headerDesktop,
  headerMobile,
} from "@/images/icons/logo/logo";

const Logo = ({ type = "primary" }) => {
  if (type === "secondary") {
    return (
      <>
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
      </>
    );
  }

  return (
    <>
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
    </>
  );
};

export default Logo;
