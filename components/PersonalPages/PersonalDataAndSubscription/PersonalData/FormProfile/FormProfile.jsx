import Image from "next/image";
import Button from "@/components/ui/Button";

import { avatar } from "@/images/PersonalPages";
import { useForm } from "react-hook-form";

const FormProfile = () => {
    const users = [
        {
            id: 0,
            avatar: avatar,
            name: "Александр",
            surname: "Иванченко",
            email: "sansearch@yandex.ru",
            password: "123456",
            newPassword: "222222",
            company: "SanSearch",
            subscription: true
        }
    ]

    const labelInput = [
        "Имя:",
        "Фамилия:",
        "Почта:",
        "Пароль:",
        "Компания:",
        "Подписка:"
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
                <label className="text-[22px] lg:inline-block lg:w-[120px]">{labelInput[0]}</label>
                <input 
                    disabled 
                    defaultValue={users[0].name} 
                    type="text" 
                    placeholder="Введите ваше имя"
                    className="border ml-[25px] w-[242px] mb-[22px] h-[45px] pl-2 py-2 lg:w-[270px] lg:py-0"
                />
                <label className="text-[22px] lg:inline-block lg:w-[120px]">{labelInput[1]}</label>
                <input 
                    disabled 
                    defaultValue={users[0].surname} 
                    type="text" 
                    placeholder="Введите вашу фамилию"
                    className="border ml-[25px] w-[242px] h-[45px] mb-[22px] pl-2 py-2 lg:w-[270px] lg:py-0"
                />
                <label className="text-[22px] lg:inline-block lg:w-[120px]">{labelInput[2]}</label>
                <input 
                    disabled 
                    defaultValue={users[0].email} 
                    type="email" 
                    placeholder="Введите вашу электронную почту"
                    className="border ml-[25px] w-[242px] h-[45px] pl-2 py-2 mb-[22px] lg:w-[270px] lg:py-0"
                />
                <label className="text-[22px] lg:inline-block lg:w-[120px]">{labelInput[3]}</label>
                <input 
                    disabled 
                    defaultValue={users[0].password} 
                    type="password" 
                    placeholder="Введите пароль"
                    className="border ml-[25px] w-[242px] h-[45px] pl-2 py-2 mb-[22px] lg:w-[270px] lg:py-0"
                />
                <label className="text-[22px] lg:inline-block lg:w-[120px]">{labelInput[4]}</label>
                <input 
                    disabled 
                    defaultValue={users[0].company} 
                    type="text" 
                    placeholder="Введите название вашей компании"
                    className="border ml-[25px] w-[242px] h-[45px] pl-2 py-2 mb-[22px] lg:w-[270px] lg:py-0"
                />
                <label className="text-[22px] mr-1 lg:inline-block lg:w-[150px]">{labelInput[5]}</label>
                <span className="text-[#69D443]">Есть</span>
            </div>
            <div className="mt-[30px]">
                <Button type="secondary" className="mx-auto text-full-white h-[45px] lg:w-[416px]">Изменить данные</Button>
            </div>
        </form>
    )
}
export default FormProfile;