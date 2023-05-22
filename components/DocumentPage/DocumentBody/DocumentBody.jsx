import Link from "next/link";
import { getFileUrl } from "@/utils/fetchData";
import links from "@/utils/links";

const DocumentBody = async ({ document }) => {
  const uploadedFileUrl = await getFileUrl(document.id);

  return (
    <article className="w-[88%] mx-auto mt-[20px] lg:w-[94%] lg:mt-[100px]">
      {document?.attributes?.title && (
        <h2 className="font-bold text-[20px] mb-[20px] lg:mb-[43px] lg:text-[28px]">
          {document.attributes.title}
        </h2>
      )}

      {document?.attributes?.description && (
        <p className="text-[14px] mb-[12px] line-clamp-20 lg:text-[24px] lg:mb-[127px] lg:line-clamp-12">
          {document.attributes.description}
        </p>
      )}

      {uploadedFileUrl && (
        <Link
          href={`${links.backend}${uploadedFileUrl}`}
          target="_blank"
          className="flex items-center justify-center text-[20px] w-[280px] h-[40px] mx-auto text-white-orange border-[1px] border-white-orange lg:text-[24px] lg:w-[450px] lg:h-[50px]"
        >
          Посмотреть документ
        </Link>
      )}
    </article>
  );
};

export default DocumentBody;
