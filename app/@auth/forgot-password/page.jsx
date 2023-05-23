"use client";
import Button from "@/components/ui/Button";
import Overlay from "@/components/ui/Overlay";
import useInput from "@/hooks/useInput";
import LoginLink from "@/components/Popups/LoginPopup/LoginLink/LoginLink";
import links from "@/utils/links";
import auth from "@/utils/auth";
import LabelNInput from "@/components/Popups/LoginPopup/LabelNInput/LabelNInput";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SucessMessage from "@/components/ui/SucessMessage";

const Password = () => {
  const [email, emailChange] = useInput("");
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);
  const router = useRouter();

  return (
    <Overlay>
      <article className="bg-white w-[300px] lg:w-[606px] flex-center rounded-3xl relative py-10 flex-center-col gap-10">
        <h4 className="text-xl font-medium">Восстановление пароля</h4>
        <form
          className="flex-center-col gap-4 w-4/5 lg:w-3/4"
          onSubmit={(e) => {
            e.preventDefault();
            setError(false);
            auth.forgotPassword(email).then((res) => {
              if (res.error) {
                setError(true);
              } else {
                setSucess(true);
                setTimeout(() => {
                  router.push(links.mainpage);
                }, 2000);
              }
            });
          }}
        >
          <LabelNInput
            placeholder="Введите ваш Email"
            label="Email:"
            onChange={emailChange}
          />
          <Button type="secondary" htmlType="submit">
            Отправить
          </Button>
        </form>
        {error && <ErrorMessage>Введите валидный e-mail адрес</ErrorMessage>}
        {sucess && (
          <SucessMessage>
            Письмо успешно отправлено! Проверьте Вашу почту
          </SucessMessage>
        )}
        <div className="w-[256px] lg:w-[480px] flex-center justify-between">
          <LoginLink href={links.registration}>Регистрация</LoginLink>
          <LoginLink href={links.login}>Войти с логином и паролем</LoginLink>
        </div>
      </article>
    </Overlay>
  );
};

export default Password;
