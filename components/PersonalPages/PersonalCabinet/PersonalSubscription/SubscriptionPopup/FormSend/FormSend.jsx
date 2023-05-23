"use client";
import Button from "@/components/ui/Button";
import Buttons from "@/components/PersonalPages/Buttons";
import useInput from "@/hooks/useInput";
import { useState } from "react";
import InputSend from "./InputSend/InputSend";
import { sendFormToEmailjs } from "@/utils/sendFormToEmailjs";

const FormSend = ({ user }) => {
  const [name, nameChange] = useInput(user.username);
  const [email, emailChange] = useInput(user.email);
  const [phone, setPhone] = useInput("");

  const [isSendInfoForSubscription, isSetSendInfoForSubscription] =
    useState(false);

  if (!user) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFormToEmailjs({ name, email, phone });
    isSetSendInfoForSubscription(
      (isSendInfoForSubscription) => !isSendInfoForSubscription
    );
  };

  const inputInfoForSubscription = [
    {
      label: "Имя*:",
      htmlType: "name",
      placeholder: "Введите ваше имя",
      defaultValue: name,
      onChange: (e) => {
        nameChange(e);
      },
    },
    {
      label: "Почта*:",
      htmlType: "email",
      placeholder: "Введите ваш email",
      defaultValue: email,
      onChange: (e) => {
        emailChange(e);
      },
    },
    {
      label: "Телефон*:",
      htmlType: "tel",
      placeholder: "Введите ваш телефон",
      defaultValue: "",
      onChange: (e) => {
        setPhone(e);
      },
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="m-h-[305px]">
      <div className="w-[280px] max-h-[600px] mx-auto text-left lg:w-[500px]">
        {inputInfoForSubscription.map((input) => {
          return <InputSend {...input} key={input.label} />;
        })}
      </div>
      <div className="mt-[45px]">
        {isSendInfoForSubscription ? (
          <Buttons
            type="orange"
            className="mx-auto text-[20px] lg:text-[24px] h-[45px] lg:w-[416px]"
            disabled={isSendInfoForSubscription}
          >
            Данные отправлены
          </Buttons>
        ) : (
          <Button
            type="secondary"
            className="mx-auto text-full-black text-[20px] lg:text-[24px] h-[45px] lg:w-[416px]"
            htmlType="submit"
          >
            Отправить
          </Button>
        )}
      </div>
    </form>
  );
};
export default FormSend;
