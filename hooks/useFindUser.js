import { useSelector } from "react-redux";

const useFindUser = () => {
  const { user, status } = useSelector((state) => state.user);
  if (status === "loading") {
    return null;
  }
  if (!user && status === "resolved") {
    return null;
  }
  return user;
};

export default useFindUser
