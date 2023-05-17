import PersonalSubtitle from "@/components/ui/PersonalSubtitle";
import FormProfile from "./FormProfile/FormProfile";

const PersonalData = () => {
    return (
        <article className="text-center w-[280px] mx-auto border-white-black lg:border-r lg:mx-0 lg:w-[460px]">
            <div className="lg:w-[416px]">
                <PersonalSubtitle className="mb-[40px] lg:mb-[70px] lg:text-left">Личные данные</PersonalSubtitle>
                <FormProfile/>
            </div>
        </article>
    )
}
export default PersonalData;