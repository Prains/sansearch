"use client";
import { useSelector, useDispatch } from "react-redux";
import { exitButton } from "@/images/icons";
import { useRouter } from "next/navigation";
import { setUser } from "@/services/reducers/User";
import Image from "next/image";
import token from "@/utils/token";
import Link from "next/link";
import links from "@/utils/links";
import Dropdown from "./Dropdown/Dropdown";

const HeaderLoginButton = ({ children, burger, close }) => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  if (user && close) {
    return (
      <div className="flex-center gap-[6px]">
        <Link
          href={links.profile}
          className="text-[#939393] text-[18px]"
          onClick={() => {
            close();
          }}
        >
          {user.username}
        </Link>
        <Image
          src={exitButton}
          alt="стрелочка смотрит в сторону квадратика"
          onClick={() => {
            dispatch(setUser(null));
            token.logOut();
            close();
            router.push(links.mainpage);
            window.location.reload();
          }}
        />
      </div>
    );
  }
  if (user) {
    return <Dropdown user={user} />;
  }
  return (
    <>
      <Link
        href={links.login}
        className={`bg-white-orange py-[11px] w-[120px] lg:flex items-center justify-center ${
          burger ? "flex" : "hidden"
        } hover:drop-shadow-roundedButton active:bg-darker-orange`}
        onClick={() => {
          if (close) {
            close();
          }
        }}
      >
        {children}
      </Link>
    </>
  );
};

export default HeaderLoginButton;
