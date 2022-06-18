import { Navigate } from "react-router-dom";

export const UnauthorizedRoute = ({
  user,
  redirectPath = "/home",
  children,
}) => {
  if (user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};