import Overlay from "@/components/ui/Overlay";
import LoginForm from "./LoginForm/LoginForm";
import LoginLink from "./LoginLink/LoginLink";
import BurgerCloseButton from "@/components/Header/HeaderBurger/BurgerCloseButton/BurgerCloseButton";
import links from "@/utils/links";

const LoginPopup = () => {
  return (
    <Overlay>
      <div className="bg-white w-[300px] lg:w-[606px] flex-center rounded-3xl relative">
        <BurgerCloseButton className="absolute top-3 right-3" />
        <article className="w-[256px] lg:w-[480px] flex-center-col my-[50px]">
          <h4 className="mb-6 lg:text-[32px]">Вход</h4>
          <LoginForm />
          <div className="flex-center-col w-full gap-4">
            <p className="text-[#7a6a6a] text-[12px] lg:text-[18px]">
              Не зарегистрированы или забыли пароль?
            </p>
            <div className="flex-center justify-between w-full">
              <LoginLink href={links.registration}>Регистрация</LoginLink>
              <LoginLink href={"/"}>Забыл пароль</LoginLink>
            </div>
          </div>
        </article>
      </div>
    </Overlay>
  );
};

export default LoginPopup;
