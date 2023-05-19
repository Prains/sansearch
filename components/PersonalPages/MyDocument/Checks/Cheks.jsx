import PersonalSubtitle from "../../PersonalSubtitle";
import ChecksLink from "./ChecksLink/ChecksLink";

const Checks = (close) => {
    const checksItems = [
        {
            title: "Законодательство и иные нормативно-правовые акты",
            link: null,
        },
        {
            title: "Проверка контрагента на наличие в санкционных списках",
            link: null,
        },
        {
            title: "Проверка контрагента на критерий владения",
            link: null,
        },
        {
            title: "Проверка контрагента на критерий контроля",
            link: null,
        },
        {
            title: "Проверка на наличие экспортных и импортных ограничений",
            link: null,
        },
        {
            title: "Проверка  банков на наличие против них санкций",
            link: null,
        },
        {
            title: "Проверка перечня услуг запрещенных к предоставлению",
            link: null,
        },

    ]
    return (
        <article>
            <PersonalSubtitle className="mb-[30px] lg:text-left">Проверки</PersonalSubtitle>
            {/* {checksItems.map((item) => {
                return (
                <ChecksLink key={item.title} close={close}>
                    {item.title}
                </ChecksLink>
                );
            })}    */}
        </article>    
    )
}
export default Checks;