"use client";
import PersonalSubtitle from "@/components/PersonalPages/PersonalSubtitle";
import Button from "@/components/ui/Button";
import Buttons from "../../Buttons";
import token from "@/utils/token";
import links from "@/utils/links";

const PersonalSubscription = () => {
  const exitProfile = () => {
    token.logOut();
    window.history.pushState("", "", links.mainpage);
    window.location.reload();
  };
  return (
    <article className="mt-[30px] mb-[15px] text-center mx-auto w-[280px] lg:mx-0 lg:text-left lg:w-[560px] lg:mt-0">
      <PersonalSubtitle className="mb-[45px]">Подписка</PersonalSubtitle>
      <p className="text-[20px] mb-[55px] lg:text-[24px] lg:mb-[30px]">
        Оформите подписку для быстрого доступа к документам
      </p>
      <Button type="secondary" className="text-full-white h-[50px] lg:h-[60px]">
        Оформить
      </Button>
      <Buttons
        type="grey"
        className="h-[50px] lg:h-[60px] mt-10"
        onClick={exitProfile}
      >
        Выйти
      </Buttons>
    </article>
  );
};
export default PersonalSubscription;
