import { Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { loginSuccess } from "../login/loginSlice";
import axios from "axios";

/*===================================*
        END OF IMPORTS
*===================================*/

const refreshAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshJWT } = JSON.parse(localStorage.getItem("crmSite"));

      if (!refreshJWT) {
        reject("You need to be signed in");
      }

      const res = await axios.get(
        "http://localhost:5000/v1/token/new-access-jwt",
        {
          headers: {
            Authorization: refreshJWT,
          },
        }
      );
      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
      }
      resolve(true);
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        localStorage.removeItem("crmSite");
      }
      reject(false);
    }
  });
};

export const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);

  useEffect(() => {
    const updateJWT = async () => {
      const res = await refreshAccessJWT();
      res && dispatch(loginSuccess());
    };

    !sessionStorage.getItem("accessJWT") &&
      localStorage.getItem("crmSite") &&
      updateJWT();

    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch, isAuth]);

  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
};
