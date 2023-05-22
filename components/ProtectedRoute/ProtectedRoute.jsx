"use client";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const { user, status } = useSelector((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    if (!user && status === "loading") {
      return null;
    }
    if (!user && status === "resolved") {
      router.push("/access-error");
    }
  }, [user, status]);

  return <>{children}</>;
};

export default ProtectedRoute;
