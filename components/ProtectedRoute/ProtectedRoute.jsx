"use client";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import links from "@/utils/links";
import { usePathname } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const { user, status } = useSelector((state) => state.user);

  const router = useRouter();

  const path = usePathname();

  useEffect(() => {
    if (!user && status === "loading") {
      return null;
    }
    if (!user && status === "resolved" && path === links.profile) {
      router.push(links.mainpage);
    }
    if (!user && status === "resolved") {
      router.push("/access-error");
    }
    if (user && user.subscribed === false && path !== links.profile) {
      router.push(`/access-error?name=${user.username}`);
    }
  }, [user, status]);

  return <>{children}</>;
};

export default ProtectedRoute;
