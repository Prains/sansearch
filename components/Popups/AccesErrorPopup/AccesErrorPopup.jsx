import Overlay from "@/components/ui/Overlay";
import LoginForm from "../LoginPopup/LoginForm/LoginForm";
import LoginLink from "../LoginPopup/LoginLink/LoginLink";
import Link from "next/link";
import links from "@/utils/links";

const AccesErrorPopup = ({ name }) => {
  if (name) {
    return (
      <Overlay>
        <div className="bg-white w-[300px] lg:w-[606px] flex-center rounded-3xl relative">
          <article className="w-[256px] lg:w-[480px] flex-center-col my-[50px]">
            <h4 className="mb-6 lg:mb-[42px] lg:text-[32px] text-center">
              Подписка
            </h4>
            <p>{name}, у Вас не оплачена подписка!</p>
            <p>
              Подписку можно оплатить в
              <Link href={links.profile}>личном кабинете</Link>
            </p>
          </article>
        </div>
      </Overlay>
    );
  }

  return (
    <Overlay>
      <div className="bg-white w-[300px] lg:w-[606px] flex-center rounded-3xl relative">
        <article className="w-[256px] lg:w-[480px] flex-center-col my-[50px]">
          <h4 className="mb-6 lg:mb-[42px] lg:text-[32px] text-center">
            Для просмотра данной страницы необходимо войти в систему и оплатить
            подписку
          </h4>
          <LoginForm />
          <div className="flex-center-col w-full gap-4">
            <p className="text-[#7a6a6a] text-[12px] lg:text-[18px]">
              Не зарегистрированы или забыли пароль?
            </p>
            <div className="flex-center justify-between w-full">
              <LoginLink href={"/"}>Регистрация</LoginLink>
              <LoginLink href={"/"}>Забыл пароль</LoginLink>
            </div>
          </div>
        </article>
      </div>
    </Overlay>
  );
};

export default AccesErrorPopup;
