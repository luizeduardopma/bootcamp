import { useSelector } from "react-redux";
import { State } from "../../../store/store/store.types";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { LoginPath } from "../../../screens/login/login.types";
import { isAuthenticated } from "../../../store/user/user.selectors";

export default function UserGuard({ children }: any) {
  const isUserAuthenticated = useSelector(isAuthenticated);
  const navigate = useNavigate();
  const from = useLocation();

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigate(LoginPath, {
        state: { from },
      });
    }
    console.log(isUserAuthenticated);
  }, [isUserAuthenticated]);
  if (isUserAuthenticated) return children;
  return null;
}
