"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "@/services/actions";
import token from "@/utils/token";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { status, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (status === "loading") {
    return null;
  }

  return <>{children}</>;
};

export default AuthProvider;
