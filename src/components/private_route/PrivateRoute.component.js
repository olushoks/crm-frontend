import { Route, Redirect } from "react-router-dom";
import { DefaultLayout } from "../../layout/DefaultLayout";

const isAuth = false;

export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
};
