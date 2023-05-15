import Overlay from "@/components/ui/Overlay";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import LoginLink from "../LoginPopup/LoginLink/LoginLink";

const RegistrationPopup = () => {
  return (
    <Overlay>
      <div className="bg-white w-[300px] lg:w-[606px] flex-center rounded-3xl relative">
        <article className="w-[256px] lg:w-[480px] flex-center-col my-[30px]">
          <h4 className="mb-6 text-2xl lg:text-[32px] lg:mb-12">Регистрация</h4>
          <RegistrationForm />
          <LoginLink href={"/"}>Забыли пароль?</LoginLink>
        </article>
      </div>
    </Overlay>
  );
};

export default RegistrationPopup;
