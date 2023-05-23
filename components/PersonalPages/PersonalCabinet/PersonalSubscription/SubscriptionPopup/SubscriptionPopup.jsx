import Overlay from "@/components/ui/Overlay";
import BurgerCloseButton from "@/components/Header/HeaderBurger/BurgerCloseButton/BurgerCloseButton";
import FormSend from "./FormSend/FormSend";

const SubscriptionPopup = ({ close, user }) => {
  return (
    <Overlay>
      <div className="bg-white w-[300px] lg:w-[606px] flex-center rounded-3xl relative">
        <BurgerCloseButton
          className="absolute top-3 right-3 hover:w-[10%] lg:hover:w-[5%]"
          close={close}
        />
        <article className="w-[280px] lg:w-[500px] flex-center-col my-[30px] lg:my-[50px]">
          <h4 className="text-[20px] mb-6 text-center lg:text-[32px]">
            Оставьте нам свои контактные данные, мы скоро свяжемся с Вами!
          </h4>
          <FormSend user={user} />
          <p className="text-[#7a6a6a] text-[11px] mt-[15px] lg:text-[18px]">
            *Поля со звёздочкой обязательны для заполнения
          </p>
        </article>
      </div>
    </Overlay>
  );
};
export default SubscriptionPopup;
