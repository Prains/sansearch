"use client"
import BurgerCloseButton from "@/components/Header/HeaderBurger/BurgerCloseButton/BurgerCloseButton";
import Buttons from "@/components/PersonalPages/Buttons";
import Overlay from "@/components/ui/Overlay";
import { useState } from "react";

const ProfileDeletePopup = (isOpenPopupDeleteProfile) => {
    const [isDeleteProfile, isSetDeleteProfile] = useState(false);

    const handleClickDeleteProfile = () => {
        isSetDeleteProfile((isDeleteProfile) => (!isDeleteProfile))
    }

    return (
        <Overlay isOpenPopupDeleteProfile={isOpenPopupDeleteProfile}>
            <div className="bg-white w-[300px] lg:w-[606px] flex-center rounded-3xl relative">
                <BurgerCloseButton className="absolute top-3 right-3 hover:w-[10%] lg:hover:w-[5%]" />
                {isDeleteProfile ? (
                        <article className="w-[280px] lg:w-[400px] my-[15px] lg:my-[20px]">
                            <h4 className="text-[20px] text-center lg:text-[32px]">Ваш профиль удален!</h4>
                        </article>
                    ) : (
                        <article className="w-[280px] lg:w-[500px] flex-center-col my-[30px] lg:my-[50px]">
                            <h4 className="text-[20px] mb-6 text-center lg:text-[32px]">Вы уверены, что хотите удалить свой аккаунт?</h4>
                            <p className="text-[#7a6a6a] text-[14px] mb-[15px] lg:text-[18px]">
                                Нам Вас будет не хватать :(
                            </p>
                            <Buttons
                                type="grey"
                                onClick={handleClickDeleteProfile}
                            >
                                Да, удаляем
                            </Buttons>
                        </article>
                )}
            </div>
        </Overlay>
    )
}
export default ProfileDeletePopup;