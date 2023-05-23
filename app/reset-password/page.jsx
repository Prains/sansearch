"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import auth from "@/utils/auth";
import links from "@/utils/links";
import LabelNInput from "@/components/Popups/LoginPopup/LabelNInput/LabelNInput";
import ErrorMessage from "@/components/ui/ErrorMessage";
import Button from "@/components/ui/Button";
import { useState } from "react";
import useInput from "@/hooks/useInput";
import useAuth from "@/hooks/useAuth";

const ResetPassword = () => {
  const [password, passwordChange] = useInput("");
  const authHandler = useAuth();
  const [error, setError] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const code = params.get("code");
  if (!code) {
    router.push(links.mainpage);
  }

  return (
    <main>
      <section className="flex-center my-40">
        <form
          className="flex-center-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            setError(false);
            auth.ResetPassword(code, password).then((res) => {
              authHandler(setError, res);
            });
          }}
        >
          <h4 className="text-xl font-medium w-full text-center mb-4">
            Обновление пароля
          </h4>
          <input
            placeholder="Введите новый пароль"
            value={password}
            onChange={passwordChange}
            minLength={6}
            className={
              "bg-transparent border-b border-b-[#939393] text-[#939393] w-[180px] lg:w-[351px] lg:placeholder:text-2xl lg:h-[45px] "
            }
            required
          />
          <Button type="secondary" htmlType="submit">
            Обновить пароль
          </Button>
          {error && <ErrorMessage>Время изменения пароля истекло</ErrorMessage>}
        </form>
      </section>
    </main>
  );
};

export default ResetPassword;
