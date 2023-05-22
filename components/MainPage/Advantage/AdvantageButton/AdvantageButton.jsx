"use client";
import links from "@/utils/links";
import Link from "next/link";
import Button from "@/components/ui/Button";
import useFindUser from "@/hooks/useFindUser";

const AdvantageButton = () => {
  const user = useFindUser();
  return (
    <Link href={user ? links.mainpage : links.login}>
      <Button type="secondary" className="text-white uppercase">
        Попробовать
      </Button>
    </Link>
  );
};

export default AdvantageButton;
