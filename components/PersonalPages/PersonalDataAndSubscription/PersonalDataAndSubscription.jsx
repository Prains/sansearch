import PersonalTitle from "@/components/ui/PersonalTitle";
import { background } from "@/images/PersonalPages";
import PersonalData from "./PersonalData/PersonalData";
import PersonalSubscription from "./PersonalSubscription/PersonalSubscription";

const PersonalDataAndSubscription = () => {
    return (
        <section className="text-center w-full mx-auto">
            <PersonalTitle className="mb-[15px] mt-[15px] lg:mb-[30px] lg:mt-[30px]">Личный кабинет</PersonalTitle>
            <article 
                className="pb-[15px] pt-[25px] lg:flex lg:gap-[70px] lg:pl-[30px] lg:ml-[75px] lg:mr-[75px] lg:mx-auto lg:pt-[50px]" 
                style={{
                    background: `url('${background.src}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
                    <PersonalData/>
                    <PersonalSubscription/>
            </article>
        </section>
    );
}
export default PersonalDataAndSubscription;