import Logo from "../ui/Logo";
import burgerMenu from "../../images/icons/menu.svg";
import Image from "next/image";
import Link from "next/link";
import links from "@/utils/links";
import HeaderNavList from "./HeaderNavList/HeaderNavList";

const Header = () => {
  const menuList = [
    {
      name: "О сервисе",
      link: links.about,
    },
    {
      name: "Санкции РФ",
      link: links.sanctionsRussia,
    },
    {
      name: "Санкции США",
      link: links.sanctionsUsa,
    },
    {
      name: "Санкции ЕС",
      link: links.sanctionsES,
    },
  ];

  return (
    <header className="w-[88%] my-0 mx-auto flex items-center justify-between mt-6 lg:w-[94%]">
      <Logo />
      <nav className="w-2/4">
        <ul className="hidden lg:flex items-center justify-between">
          <HeaderNavList list={menuList} />
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
