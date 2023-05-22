"use client";
import { useDispatch } from "react-redux";
import token from "@/utils/token";
import { setUser } from "@/services/reducers/User";
import links from "@/utils/links";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (setError, res) => {
    if (res.error) {
      setError(true);
    } else {
      token.setAccessToken(res.jwt);
      dispatch(setUser(res.user));
      router.back();
      setTimeout(() => {
        router.push(links.profile);
      }, 200);
    }
  };
};

export default useAuth;
