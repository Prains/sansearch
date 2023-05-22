"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { profileIcon } from "@/images/icons";
import Image from "next/image";
import links from "@/utils/links";
import Link from "next/link";
import token from "@/utils/token";

const Dropdown = ({ user }) => {
  const exitProfile = () => {
    token.logOut();
    window.history.pushState("", "", links.mainpage);
    window.location.reload();
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Menu as="div" className="relative hidden lg:inline-block text-left">
      <div className="hidden lg:block">
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 hover:bg-gray-50">
          <div className="hidden lg:flex-center gap-[22px]">
            <p className="text-[18px] text-[#939393]">{user.username}</p>
            <Image src={profileIcon} alt="Торс человечка внутри кружка" />
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={links.profile}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Личный кабинет
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={links.controlTest}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Тест ЕС - критерий контроля
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                  onClick={exitProfile}
                >
                  Выйти
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
