"use client";
import useInput from "@/hooks/useInput";
import LabelNInput from "../../LoginPopup/LabelNInput/LabelNInput";
import Link from "next/link";
import links from "@/utils/links";

const RegistrationForm = () => {
  const [name, nameChange] = useInput("");
  const [surname, surnameChange] = useInput("");
  const [email, emailChange] = useInput("");
  const [password, passwordChange] = useInput("");

  const inputList = [
    {
      label: "Имя:",
      htmlType: "text",
      placeholder: "Введите ваше Имя",
      onChange: (e) => {
        nameChange(e);
      },
      value: name,
    },
    {
      label: "Фамилия:",
      htmlType: "text",
      placeholder: "Введите вашу Фамилию",
      onChange: (e) => {
        surnameChange(e);
      },
      value: surname,
    },
    {
      label: "Имя",
      htmlType: "name",
      placeholder: "Введите адрес эл.почты",
      onChange: (e) => {
        emailChange(e);
      },
      value: email,
    },
    {
      label: "Пароль",
      htmlType: "password",
      placeholder: "Введите пароль",
      onChange: (e) => {
        passwordChange(e);
      },
      value: password,
    },
  ];

  return (
    <form className="mb-[42px] lg:mb-5 flex-center-col gap-[17px] lg:gap-6 w-full">
      {inputList.map((input) => {
        return (
          <LabelNInput
            {...input}
            key={input.label}
            className="w-[162px] lg:w-[309px]"
          />
        );
      })}
      <div className="flex-center items-start gap-[10px]">
        <input type="checkbox" className="mt-2 w-[20px] h-[20px]" required />
        <span className="my-0 text-[12px] flex-center-col items-start text-[#939393] lg:text-[18px]">
          Оставляя свои контактные данные, Вы даёте согласие на
          <Link className="text-sky-600 underline" href={links.privacy}>
            обработку персональных данных
          </Link>
        </span>
      </div>
      <button
        type="submit"
        className="bg-white-orange py-[8px] w-[256px] flex items-center justify-center hover:drop-shadow-roundedButton active:bg-darker-orange text-[20px] lg:text-[24px] lg:w-[403px] lg:mt-5"
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegistrationForm;
