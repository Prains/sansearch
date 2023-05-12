"use client";

import HeaderLink from "../HeaderLink/HeaderLink";

const HeaderNavList = ({ list }) => {
  return (
    <>
      {list.map((item) => {
        return (
          <HeaderLink href={item.link} key={item.name}>
            {item.name}
          </HeaderLink>
        );
      })}
    </>
  );
};

export default HeaderNavList;
