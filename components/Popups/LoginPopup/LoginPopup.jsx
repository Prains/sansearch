import Overlay from "@/components/ui/Overlay";
import Link from "next/link";
import LabelNInput from "./LabelNInput/LabelNInput";
import LoginLink from "./LoginLink/LoginLink";

const LoginPopup = () => {
  const inputList = [
    {
      label: "Почта:",
      htmlType: "email",
      placeholder: "Введите адрес эл.почты",
    },
    {
      label: "Пароль:",
      htmlType: "password",
      placeholder: "Введите пароль",
    },
  ];

  return (
    <Overlay>
      <div className="bg-white w-[300px] lg:w-[606px] flex-center rounded-3xl">
        <article className="w-[256px] lg:w-[480px] flex-center-col my-[50px]">
          <h4 className="mb-6">Вход</h4>
          <form className="mb-[42px] flex-center-col gap-[17px] w-full">
            {inputList.map((input) => {
              return <LabelNInput {...input} key={input.label} />;
            })}
            <button className="bg-white-orange py-[8px] w-[160px] flex items-center justify-center hover:drop-shadow-roundedButton active:bg-darker-orange text-[20px] lg:text-[24px] lg:w-[318px]">
              Войти
            </button>
            <div className="flex-center-col w-full gap-4">
              <p className="text-[#939393] text-[12px]">
                Не зарегистрированы или забыли пароль?
              </p>
              <div className="flex-center justify-between w-full">
                <LoginLink href={"/"}>Регистрация</LoginLink>
                <LoginLink href={"/"}>Забыл пароль</LoginLink>
              </div>
            </div>
          </form>
        </article>
      </div>
    </Overlay>
  );
};

export default LoginPopup;
