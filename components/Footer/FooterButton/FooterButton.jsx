"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import useFindUser from "@/hooks/useFindUser";
import links from "@/utils/links";

const FooterButton = () => {
  const user = useFindUser();
  return (
    <Link href={user ? links.mainpage : links.login}>
      <Button type="secondary" className="text-[#fff]">
        {user ? "Найти" : "Войти"}
      </Button>
    </Link>
  );
};

export default FooterButton;
