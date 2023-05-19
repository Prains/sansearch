"use client";;
import { useSelector, useDispatch } from "react-redux";
import { profileIcon, exitButton } from "@/images/icons";
import { useRouter } from "next/navigation";
import { setUser } from "@/services/reducers/User";
import Image from "next/image";
import token from "@/utils/token";
import Link from "next/link";
import links from "@/utils/links"

const HeaderLoginButton = ({ children, burger, close }) => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  if (user && close) {
    return (
      <div className="flex-center gap-[6px]">
        <Link href={links.profile} className="text-[#939393] text-[18px]">
          {user.username}
        </Link>
        <Image
          src={exitButton}
          alt="стрелочка смотрит в сторону квадратика"
          onClick={() => {
            dispatch(setUser(null));
            token.logOut();
            router.push(links.mainpage);
            router.refresh();
            close();
          }}
        />
      </div>
    );
  }
  if (user) {
    return (
      <div className="hidden lg:flex-center gap-[22px]">
        <p className="text-[18px] text-[#939393]">{user.username}</p>
        <Link href={links.profile}>
          <Image src={profileIcon} alt="Торс человечка внутри кружка" />
        </Link>
      </div>
    );
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
