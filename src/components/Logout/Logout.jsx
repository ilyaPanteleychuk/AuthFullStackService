import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../..";
import { logout } from "../../actions/actions";

export const Logout = () => {
  const { store } = useContext(Context);

  const handleClick = () => {
    store.dispatch(logout());
  };

  return (
    <Link to="/">
      <Button variant="contained" onClick={handleClick}>
        Logout
      </Button>
    </Link>
  );
};
