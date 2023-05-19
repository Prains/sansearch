"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "@/services/actions";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (status === "loading") {
    return null;
  }

  return <>{children}</>;
};

export default AuthProvider;
