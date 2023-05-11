import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Link from "next/link";
import links from "@/utils/links";

const Footer = () => {
  return (
    <footer className="w-[88%] lg:w-[94%] my-0 mx-auto flex items-center justify-center flex-col gap-[15px] lg:gap-5 mt-[30px] lg:mt-[57px] mb-2 lg:mb-7 ">
      <Logo type="secondary" />
      <Button type="secondary" className="text-[#fff]">
        Войти
      </Button>
      <Link href={links.privacy} className="text-[#939393]">
        Политика конфиденциальности
      </Link>
      <p className="text-[#000] ">©2023. SanSearch</p>
    </footer>
  );
};

export default Footer;
