import AvailableDocuments from "./AvailableDocuments/AvailableDocuments";
import Checks from "./Checks/Cheks";
import PersonalTitle from "../PersonalTitle";
const MyDocument = () => {
    return (
        <section className="text-center w-full mx-auto">
            <PersonalTitle className="mb-[30px] mt-[30px]">Мои документы</PersonalTitle>
            <article className="">
                <AvailableDocuments/>
                <Checks/>
            </article>
        </section>
    )
}
export default MyDocument;