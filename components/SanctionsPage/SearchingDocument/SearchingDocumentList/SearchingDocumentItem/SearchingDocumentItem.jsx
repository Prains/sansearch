import Link from "next/link";
import links from "@/utils/links";

const SearchingDocumentItem = ({ document }) => {
  return (
    <li className="mb-[10px] lg:mb-[30px]">
      <Link
        href={links.document + "/" + document.id}
        className="line-clamp-4 lg:line-clamp-2"
      >
        {document?.attributes?.title && (
          <strong className="text-[14px] lg:text-[20px]">
            {document.attributes.title}
          </strong>
        )}

        {document?.attributes?.createdAt && (
          <p className="inline text-[14px] lg:text-[20px]">
            {document.attributes.createdAt}
          </p>
        )}

        {document?.attributes?.description && (
          <p className="inline ml-[10px] text-[14px] lg:text-[20px]">
            {document.attributes.description}
          </p>
        )}
      </Link>
    </li>
  );
};

export default SearchingDocumentItem;
