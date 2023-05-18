"use client";
import useInput from "@/hooks/useInput";
import LabelNInput from "../LabelNInput/LabelNInput";
import auth from "@/utils/auth";

const LoginForm = () => {
  const [email, emailChange] = useInput("");
  const [password, passwordChange] = useInput("");

  const inputList = [
    {
      label: "Почта:",
      htmlType: "email",
      placeholder: "Введите адрес эл.почты",
      onChange: (e) => {
        emailChange(e);
      },
      value: email,
    },
    {
      label: "Пароль:",
      htmlType: "password",
      placeholder: "Введите пароль",
      onChange: (e) => {
        passwordChange(e);
      },
      value: password,
    },
  ];

  return (
    <form
      className="mb-[42px] lg:mb-5 flex-center-col gap-[17px] lg:gap-6 w-full"
      onSubmit={(e) => {
        e.preventDefault();
        auth.login(email, password);
      }}
    >
      {inputList.map((input) => {
        return <LabelNInput {...input} key={input.label} />;
      })}
      <button
        type="submit"
        className="bg-white-orange py-[8px] w-[160px] flex items-center justify-center hover:drop-shadow-roundedButton active:bg-darker-orange text-[20px] lg:text-[24px] lg:w-[318px] lg:mt-5"
      >
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
