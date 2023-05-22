"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "@/services/actions";
import Loader from "@/components/ui/Loader";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <main className="absolute top-0 left-0 h-full w-full flex-center">
        <Loader className="mt-[30px]" />
      </main>
    );
  }

  return <>{children}</>;
};

export default AuthProvider;
