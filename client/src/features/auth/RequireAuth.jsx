import { useLocation, Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const RequireAuth = () => {
  const token = Cookies.get("token");

  isValidateToken(token);

  function isValidateToken(token) {
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.exp < Date.now() / 1000) {
        Cookies.remove("token");
      }
    }
  }

  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default RequireAuth;
