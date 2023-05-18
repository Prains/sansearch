import Logo from "../ui/Logo";
import HeaderLoginButton from "./HeaderLoginButton/HeaderLoginButton";
import links from "@/utils/links";
import HeaderNavList from "./HeaderNavList/HeaderNavList";
import HeaderOpenBurgerButton from "./HeaderOpenBurgerButton/HeaderOpenBurgerButton";

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
      <nav className="w-2/4 hidden lg:block">
        <ul className="flex items-center justify-between">
          <HeaderNavList list={menuList} />
        </ul>
      </nav>
      <HeaderOpenBurgerButton list={menuList} />
      <HeaderLoginButton href="/">Войти</HeaderLoginButton>
    </header>
  );
};

export default Header;
