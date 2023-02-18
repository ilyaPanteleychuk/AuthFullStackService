import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../..";
import { updateProduct } from "../../actions/actions";

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

export const UpdateProduct = ({ product, toggleUpdateFormVisibilityStatus }) => {
  const classes = getClasses();
  const [title, setTitle] = useState(product.title);
  const [manufacturer, setManufacturer] = useState(product.manufacturer);
  const [categoryTitle, setCategoryTitle] = useState(product.category.title);
  const { store } = useContext(Context);
  const { t } = useTranslation();

  const handleUpdate = () => {
    store.dispatch(updateProduct(title, manufacturer, categoryTitle, product.id));
    toggleUpdateFormVisibilityStatus();
  };

  return (
    <form className={classes.form}>
      <div className={classes.formContainer}>
        <Button onClick={toggleUpdateFormVisibilityStatus} variant="contained" fullWidth>
          {t("back")}
        </Button>
        <TextField label={t("title")} value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField label={t("manufacturer")} value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
        <TextField label={t("category")} value={categoryTitle} onChange={(e) => setCategoryTitle(e.target.value)} />
        <Button onClick={handleUpdate} variant="contained" fullWidth>
          {t("update")}
        </Button>
      </div>
    </form>
  );
};
