import Overlay from "@/components/ui/Overlay";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import LoginLink from "../LoginPopup/LoginLink/LoginLink";
import links from "@/utils/links";

const RegistrationPopup = ({ policyUrl, concentToDataUrl }) => {
  return (
    <Overlay>
      <div className="bg-white w-[300px] lg:w-[606px] flex-center rounded-3xl relative">
        <article className="w-[256px] lg:w-[480px] flex-center-col my-[30px]">
          <h4 className="mb-6 text-2xl lg:text-[32px] lg:mb-12">Регистрация</h4>
          <RegistrationForm
            policyUrl={policyUrl}
            concentToDataUrl={concentToDataUrl}
          />
          <LoginLink href={links.forgotPassword}>Забыли пароль?</LoginLink>
          <LoginLink href={links.login}>Войти с логином и паролем</LoginLink>
        </article>
      </div>
    </Overlay>
  );
};

export default RegistrationPopup;
