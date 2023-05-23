"use client";
import Image from "next/image";
import { avatar } from "@/images/PersonalPages";
import Button from "@/components/ui/Button";
import Buttons from "@/components/PersonalPages/Buttons";
import useInput from "@/hooks/useInput";
import LabelInput from "./LabelInput/LabelInput";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "@/components/ui/Loader";
import ProfileDeletePopup from "../ProfileDeletePopup/ProfileDeletePopup";
import auth from "@/utils/auth";
import { setUser } from "@/services/reducers/User";
import ErrorMessage from "@/components/ui/ErrorMessage";
import SucessMessage from "@/components/ui/SucessMessage";

const FormProfile = () => {
  const { user } = useSelector((state) => state.user);
  const dispath = useDispatch();
  const [name, nameChange] = useInput(user?.username);
  const [email, emailChange] = useInput(user?.email);
  const [password, passwordChange] = useInput(user?.password);
  const [isAddButtons, isSetAddButtons] = useState(false);
  const [isOpenPopupDeleteProfile, isSetOpenPopupDeleteProfile] =
    useState(false);
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);

  if (!user) {
    return <Loader />;
  }
  const handleClickAddButtons = () => {
    isSetAddButtons((isAddButtons) => !isAddButtons);
  };

  const handleClickOpenDeleteProfile = () => {
    isSetOpenPopupDeleteProfile(
      (isOpenPopupDeleteProfile) => !isOpenPopupDeleteProfile
    );
  };

  const inputInfo = [
    {
      label: "Имя:",
      htmlType: "name",
      placeholder: "Введите ваше имя",
      defaultValue: name,
      onChange: (e) => {
        nameChange(e);
      },
    },
    {
      label: "Почта:",
      htmlType: "email",
      placeholder: "Введите ваш email",
      defaultValue: email,
      onChange: (e) => {
        emailChange(e);
      },
    },
    {
      label: "Пароль:",
      htmlType: "password",
      placeholder: "Введите ваш пароль",
      deafultValue: password,
      onChange: (e) => {
        passwordChange(e);
      },
    },
  ];
  const inputCorrect = [
    {
      label: "Имя:",
      htmlType: "name",
      placeholder: "Введите ваше имя",
      defaultValue: name,
      onChange: (e) => {
        nameChange(e);
      },
    },
    {
      label: "Почта:",
      htmlType: "email",
      placeholder: "Введите ваш email",
      defaultValue: email,
      onChange: (e) => {
        emailChange(e);
      },
    },
    {
      label: "Новый пароль:",
      htmlType: "text",
      placeholder: "Введите новый пароль",
      defaultValue: password,
      minLength: 6,
      onChange: (e) => {
        passwordChange(e);
      },
    },
  ];

  return (
    <form
      className="m-h-[800px]"
      onSubmit={(e) => {
        e.preventDefault();
        const updated = {
          username: name,
          email: email,
          password: password,
        };
        setError(false);
        auth.changeProfileData(updated, user.id).then((res) => {
          if (res.error) {
            setError(true);
          } else {
            setSucess(true);
            setUser(res);
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        });
      }}
    >
      <Image
        className="w-[100px] h-[100px] mx-auto mb-[20px]"
        src={avatar}
        alt="Фотография пользователя"
      />
      <div className="w-[270px] max-h-[600px] mx-auto text-left lg:w-[416px]">
        {isAddButtons
          ? inputCorrect.map((input) => {
              return (
                <LabelInput
                  {...input}
                  key={input.label}
                  isAddButtons={isAddButtons}
                />
              );
            })
          : inputInfo.map((input) => {
              return (
                <LabelInput
                  {...input}
                  key={input.label}
                  isAddButtons={isAddButtons}
                />
              );
            })}
        {error && <ErrorMessage>Введенная почта уже используется</ErrorMessage>}
        {sucess && <SucessMessage>Данные успешно изменены!</SucessMessage>}
        <label className="text-[22px] mr-1 lg:inline-block lg:w-[178px]">
          Подписка:
        </label>
        {user?.subscribed ? (
          <span className="text-[20px] text-[#69D443]">Есть</span>
        ) : (
          <span className="text-[20px] text-white-black">Нет</span>
        )}
      </div>
      <div className="mt-[30px]">
        {isAddButtons ? (
          <div>
            <Buttons type="orange" htmlType="submit">
              Сохранить изменения
            </Buttons>
            <Buttons
              type="grey"
              className="w-[280px] lg:w-[416px]"
              onClick={handleClickOpenDeleteProfile}
            >
              Удалить аккаунт
            </Buttons>
          </div>
        ) : (
          <Button
            type="secondary"
            className="mx-auto text-full-white h-[45px] lg:w-[416px]"
            onClick={handleClickAddButtons}
          >
            Изменить данные
          </Button>
        )}
      </div>
      {isOpenPopupDeleteProfile && (
        <ProfileDeletePopup close={handleClickOpenDeleteProfile} />
      )}
    </form>
  );
};
export default FormProfile;
