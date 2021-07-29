import { Route, Redirect, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { loginSuccess } from "../login/loginSlice";
import {
  getUserProfile,
  refreshAccessJWT,
} from "../../pages/dashboard/userAction";

/*===================================*
        END OF IMPORTS
*===================================*/

export const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    const updateJWT = async () => {
      const res = await refreshAccessJWT();

      res && dispatch(loginSuccess());
    };

    !user._id && dispatch(getUserProfile());

    !sessionStorage.getItem("accessJWT") &&
      localStorage.getItem("crmSite") &&
      updateJWT();

    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch, isAuth, user._id, history]);

  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
};
