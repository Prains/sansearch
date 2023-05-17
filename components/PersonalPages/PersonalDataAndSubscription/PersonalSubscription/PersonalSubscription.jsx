import PersonalSubtitle from "@/components/ui/PersonalSubtitle";
import Button from "@/components/ui/Button";

const PersonalSubscription = () => {
    return (
        <article className="mt-[30px] mb-[15px] text-center mx-auto w-[280px] lg:mx-0 lg:text-left lg:w-[560px] lg:mt-0">
            <PersonalSubtitle className="mb-[45px]">Подписка</PersonalSubtitle>
            <p className="text-[20px] mb-[55px] lg:text-[24px] lg:mb-[30px]">Оформите подписку для быстрого доступа к документам</p>
            <Button type="secondary" className="text-full-white h-[50px] lg:h-[60px]">Оформить</Button>
        </article>
    )
}
export default PersonalSubscription