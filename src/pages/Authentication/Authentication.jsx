import { makeStyles } from "@mui/styles";
import { AuthenticationForm } from "../../components/AutheticationForm";

const getClasses = makeStyles(() => ({
  auth: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: "20px 0 0 0",
  },
}));

export const Authentication = () => {
  const classes = getClasses();

  return (
    <div className={classes.auth}>
      <AuthenticationForm />
    </div>
  );
};
