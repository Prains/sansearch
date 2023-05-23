import PersonalTitle from "@/components/PersonalPages/PersonalTitle";
import { background } from "@/images/PersonalPages";
import PersonalProfile from "./PersonalProfile/PersonalProfile";
import PersonalSubscription from "./PersonalSubscription/PersonalSubscription";

const PersonalCabinet = () => {
  return (
    <section className="text-center w-full mx-auto ">
      <PersonalTitle className="mb-[15px] mt-[15px] lg:mb-[30px] lg:mt-[30px]">
        Личный кабинет
      </PersonalTitle>
      <article
        className="pb-[15px] pt-[25px] lg:flex lg:gap-[70px] lg:pl-[30px] lg:ml-[75px] lg:mr-[75px] lg:mx-auto lg:pt-[50px] lg:flex-center"
        style={{
          background: `url('${background.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <PersonalProfile />
        <PersonalSubscription />
      </article>
    </section>
  );
};
export default PersonalCabinet;
