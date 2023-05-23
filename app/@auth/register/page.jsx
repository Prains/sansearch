import RegistrationPopup from "@/components/Popups/RegistrationPopup/RegistrationPopup";
import { getFileUrlForPrivacyDocuments } from "@/utils/fetchData";
const Register = async () => {
  const policyUrl = await getFileUrlForPrivacyDocuments("policy");
  const concentToDataUrl = await getFileUrlForPrivacyDocuments("concentToData");
  return (
    <RegistrationPopup
      policyUrl={policyUrl}
      concentToDataUrl={concentToDataUrl}
    />
  );
};

export default Register;
