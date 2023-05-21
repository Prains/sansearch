"use client"
import PersonalSubtitle from "@/components/PersonalPages/PersonalSubtitle";
import Button from "@/components/ui/Button";
import { useState } from "react";
import SubscriptionPopup from "./SubscriptionPopup/SubscriptionPopup";

const PersonalSubscription = () => {
    const [isSubscriptionPopup, isSetSubscriptionPopup] = useState(false);

    const handleClickOpenSubscriptionPupup = () => {
        isSetSubscriptionPopup((isSubscriptionPopup) => (!isSubscriptionPopup));
    }

    return (
        <article className="mt-[30px] mb-[15px] text-center mx-auto w-[280px] lg:mx-0 lg:text-left lg:w-[560px] lg:mt-0">
            <PersonalSubtitle className="mb-[45px]">Подписка</PersonalSubtitle>
            <p className="text-[20px] mb-[55px] lg:text-[24px] lg:mb-[30px]">Оформите подписку для быстрого доступа к документам</p>
            <Button 
                type="secondary" 
                className="text-full-white h-[50px] lg:h-[60px]" 
                onClick={handleClickOpenSubscriptionPupup}
            >
                Оформить
            </Button>
            {isSubscriptionPopup ? <SubscriptionPopup/> : ''}
    
        </article>
    )
}
export default PersonalSubscription