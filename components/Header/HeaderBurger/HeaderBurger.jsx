import Logo from "@/components/ui/Logo";
import BurgerCloseButton from "./BurgerCloseButton/BurgerCloseButton";
import HeaderNavList from "../HeaderNavList/HeaderNavList";
import HeaderLoginButton from "../HeaderLoginButton/HeaderLoginButton";
import HeaderBurgerWrapper from "./HeaderBurgerWrapper/HeaderBurgerWrapper";

const HeaderBurger = ({ close, list }) => {
  return (
    <HeaderBurgerWrapper>
      <div className="w-[88%] flex items-center justify-center flex-col my-[25px] mx-auto gap-20">
        <article className="flex items-center justify-between w-full">
          <Logo />
          <BurgerCloseButton close={close} />
        </article>
        <ul className="flex items-center justify-center flex-col gap-10">
          <HeaderNavList list={list} close={close} />
        </ul>
        <HeaderLoginButton href="/" burger close={close}>
          Войти
        </HeaderLoginButton>
      </div>
    </HeaderBurgerWrapper>
  );
};

export default HeaderBurger;
