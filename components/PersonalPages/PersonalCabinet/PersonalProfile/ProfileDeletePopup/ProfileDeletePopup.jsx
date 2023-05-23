"use client";
import BurgerCloseButton from "@/components/Header/HeaderBurger/BurgerCloseButton/BurgerCloseButton";
import Buttons from "@/components/PersonalPages/Buttons";
import Overlay from "@/components/ui/Overlay";
import auth from "@/utils/auth";
import links from "@/utils/links";
import token from "@/utils/token";
import { useRouter } from "next/navigation";

const ProfileDeletePopup = ({ close, user }) => {
  const router = useRouter();
  return (
    <Overlay>
      <div className="bg-white w-[300px] lg:w-[606px] flex-center rounded-3xl relative">
        <BurgerCloseButton
          className="absolute top-3 right-3 hover:w-[10%] lg:hover:w-[5%]"
          close={close}
        />
        <article className="w-[280px] lg:w-[500px] flex-center-col my-[30px] lg:my-[50px]">
          <h4 className="text-[20px] mb-6 text-center lg:text-[32px]">
            Вы уверены, что хотите удалить свой аккаунт?
          </h4>
          <p className="text-[#7a6a6a] text-[14px] mb-[15px] lg:text-[18px]">
            Нам Вас будет не хватать :(
          </p>
          <Buttons
            type="grey"
            className="px-4"
            onClick={() => {
              auth.changeProfileData({ blocked: true }, user.id).then((res) => {
                token.logOut();
                router.push(links.mainpage);
                window.location.reload();
              });
            }}
          >
            Да, удаляем
          </Buttons>
        </article>
      </div>
    </Overlay>
  );
};
export default ProfileDeletePopup;
