import Image from "next/image";
import Link from "next/link";
import { dotSvg } from "@/images/icons";

const SearchingDocumentItem = ({ document }) => {
  return (
    <li className="line-clamp-4 mb-[10px] lg:line-clamp-2 lg:mb-[30px]">
      <Link href="/">
        <Image src={dotSvg} alt="новый пункт" className="inline mr-[10px]" />
        <strong className="text-[14px] lg:text-[20px]">
          {document.type}
        </strong>{" "}
        <p className="inline text-[14px] lg:text-[20px]">{document.by}</p>
        <p className="inline ml-[10px] text-[14px] lg:text-[20px]">
          {document.title}
        </p>
      </Link>
    </li>
  );
};

export default SearchingDocumentItem;
