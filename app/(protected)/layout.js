import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

const Layout = ({ children }) => {
  return <ProtectedRoute>{children}</ProtectedRoute>;
};

export default Layout;
