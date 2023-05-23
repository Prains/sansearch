import links from "@/utils/links";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import FooterButton from "./FooterButton/FooterButton";
import { getFileUrlForPrivacyDocuments } from "@/utils/fetchData";

const Footer = async () => {
  const policyUrl = await getFileUrlForPrivacyDocuments("policy");
  return (
    <footer className="w-[88%] lg:w-[94%] my-0 mx-auto flex-center-col gap-[15px] lg:gap-5 mt-[30px] lg:mt-[57px] mb-2 lg:mb-7 ">
      <Logo type="secondary" />
      <FooterButton />
      <Link
        target="_blank"
        href={links.backend + policyUrl}
        className="text-[#939393]"
      >
        Политика конфиденциальности
      </Link>
      <p className="text-[#000]">©2023. SanSearch</p>
    </footer>
  );
};

export default Footer;
