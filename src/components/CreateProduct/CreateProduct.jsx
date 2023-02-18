import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../..";
import { addNewProduct } from "../../actions/actions";

const getClasses = makeStyles(() => ({
  form: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "white",
    zIndex: "2",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",
  },
}));

export const CreateProduct = ({ toggleCreateFormVisibilityStatus }) => {
  const classes = getClasses();
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("");
  const { store } = useContext(Context);

  const addProduct = () => {
    store.dispatch(addNewProduct(title, manufacturer, categoryTitle));
    toggleCreateFormVisibilityStatus();
  };

  return (
    <form className={classes.form}>
      <div className={classes.formContainer}>
        <Button onClick={toggleCreateFormVisibilityStatus} variant="contained" fullWidth>
          {t("back")}
        </Button>
        <TextField label={t("title")} value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField label={t("manufacturer")} value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
        <TextField label={t("category")} value={categoryTitle} onChange={(e) => setCategoryTitle(e.target.value)} />
        <Button onClick={addProduct} variant="contained" fullWidth>
          {t("create")}
        </Button>
      </div>
    </form>
  );
};
