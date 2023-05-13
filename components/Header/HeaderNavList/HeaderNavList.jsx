import HeaderLink from "../HeaderLink/HeaderLink";

const HeaderNavList = ({ list, close }) => {
  return (
    <>
      {list.map((item) => {
        return (
          <HeaderLink href={item.link} key={item.name} close={close}>
            {item.name}
          </HeaderLink>
        );
      })}
    </>
  );
};

export default HeaderNavList;
