import AvailableDocuments from "./AvailableDocuments/AvailableDocuments";
import Checks from "./Checks/Cheks";

const MyDocument = () => {
    return (
        <section>
            <PersonalTitle className="mb-[15px] mt-[15px] lg:mb-[30px] lg:mt-[30px]">Мои документы</PersonalTitle>
            <AvailableDocuments/>
            <Checks/>
        </section>
    )
}
export default MyDocument;