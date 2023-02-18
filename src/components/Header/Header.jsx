import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { Select } from "../Select";
import { useLocation } from "react-router";
import { useContext, useEffect } from "react";
import { Context } from "../..";
import { logout } from "../../actions/actions";
import { Logout } from "../Logout";

const getClasses = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "20px",
    gap: "20px",
  },
  headerSelectContainer: {
    width: "120px",
  },
}));

export const Header = () => {
  const classes = getClasses();
  const authenticationStatus = useSelector((state) => state.isAuthenticated);
  const location = useLocation();
  const { store } = useContext(Context);

  useEffect(() => {
    if (location.pathname === "/") {
      store.dispatch(logout());
    }
  }, [location.pathname]);

  return (
    <header className={classes.header}>
      {authenticationStatus ? <Logout /> : null}
      <div className={classes.headerSelectContainer}>
        <Select />
      </div>
    </header>
  );
};
