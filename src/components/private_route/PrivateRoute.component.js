import { Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { loginSuccess } from "../login/loginSlice";

/*===================================*
        END OF IMPORTS
*===================================*/

export const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);

  useEffect(() => {
    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [isAuth, dispatch]);

  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
};
