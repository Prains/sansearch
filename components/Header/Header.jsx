import Logo from "../ui/Logo";
import burgerMenu from "../../images/icons/menu.svg";
import Image from "next/image";
import HeaderLink from "./HeaderLink/HeaderLink";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-[88%] my-0 mx-auto flex items-center justify-between mt-6 lg:w-[94%]">
      <Logo />
      <nav className="w-2/4">
        <ul className="hidden lg:flex items-center justify-between">
          <HeaderLink href={"/"}>О сервисе</HeaderLink>
          <HeaderLink href={"/"}>Санкции рф</HeaderLink>
          <HeaderLink href={"/"}>Санкции сша</HeaderLink>
          <HeaderLink href={"/"}>Санкции ес</HeaderLink>
        </ul>
      </nav>
      <Image
        src={burgerMenu}
        alt="Бургер меню - три короткие черные черточки"
        className="lg:hidden"
      />
      <Link
        href={"/"}
        className="bg-white-orange py-[11px] w-[120px] lg:flex items-center justify-center hidden "
      >
        Войти
      </Link>
    </header>
  );
};

export default Header;
