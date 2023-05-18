"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";

import { avatar } from "@/images/PersonalPages";
import useInput from "@/hooks/useInput";
import LabelInput from "./LabelInput/LabelInput";
import { useState } from "react";
import Buttons from "@/components/ui/PersonalPage/Buttons";


const FormProfile = () => {

    const [name, nameChange] = useInput("");
    const [surname, surnameChange] = useInput("");
    const [email, emailChange] = useInput("");
    const [password, passwordChange] = useInput("");
    const [newPassword, newPasswordChange] = useInput("");
    const [company, companyChange] = useInput("");

    const [isAddButtons, isSetAddButtons] = useState(false);

    const handleClickAddButtons = () => {
        isSetAddButtons((isAddButtons) => (!isAddButtons))
    }
    const users = [
        {
            id: 0,
            avatar: avatar,
            name: "Александр",
            surname: "Иванченко",
            email: "sansearch@yandex.ru",
            password: "123456",
            newPassword: "",
            company: "SanSearch",
            subscription: true
        }
    ]

    const inputInfo = [
        {
            label: "Имя:",
            htmlType: "name",
            placeholder: "Введите ваше имя",
            defaultValue: users[0].name,
            onChange: (e) => {
                nameChange(e);
            },
        },
        {
            label: "Фамилия:",
            htmlType: "text",
            placeholder: "Введите вашу фамилию",
            defaultValue: users[0].surname,
            onChange: (e) => {
                surnameChange(e);
            },
        },
        {
            label: "Почта:",
            htmlType: "email",
            placeholder: "Введите ваш email",
            defaultValue: users[0].email,
            onChange: (e) => {
                emailChange(e);
            },
        },
        {
            label: "Пароль:",
            htmlType: "password",
            placeholder: "Введите ваш пароль",
            defaultValue: users[0].password,
            onChange: (e) => {
                passwordChange(e);
            },
        },
        {
            label: "Новый пароль:",
            htmlType: "text",
            placeholder: "Введите новый пароль",
            defaultValue: users[0].newPassword,
            onChange: (e) => {
                newPasswordChange(e);
            },
        },
        {
            label: "Компания:",
            htmlType: "text",
            placeholder: "Введите вашу компанию",
            defaultValue: users[0].company,
            onChange: (e) => {
                companyChange(e);
            },
        },

    ]

    return (
        <form className="m-h-[800px]">
            <Image 
                className="w-[100px] h-[100px] mx-auto mb-[20px]" 
                src={users[0].avatar} 
                key={users[0].id}
                alt="Фотография пользователя"
            />
            <div className="w-[270px] max-h-[600px] mx-auto text-left lg:w-[416px]">
                {inputInfo.map((input) => {
                    return (
                    <LabelInput
                        {...input}
                        key={input.label}
                        isAddButtons={isAddButtons}
                    />
                    );
                })}
                <label className="text-[22px] mr-1 lg:inline-block lg:w-[178px]">Подписка:</label>
                {users[0].subscription ? (
                    <span className="text-[20px] text-[#69D443]">Есть</span>
                    ) : (
                    <span className="text-[20px] text-white-black">Нет</span>
                )}
            </div>
            <div className="mt-[30px]">
                {isAddButtons ? (
                <div>
                    <Buttons type="orange" onClick={handleClickAddButtons}>Сохранить изменения</Buttons>
                    <Buttons type="grey">Удалить аккаунт</Buttons>
                </div>
                    ) : (
                    <Button type="secondary" className="mx-auto text-full-white h-[45px] lg:w-[416px]" onClick={handleClickAddButtons}>Изменить данные</Button>
                )}
            </div>
        </form>
    )
}
export default FormProfile;