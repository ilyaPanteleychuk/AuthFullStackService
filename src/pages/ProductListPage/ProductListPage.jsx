import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import { ProductList } from "../../components/ProductList";
import { CreateProduct } from "../../components/CreateProduct";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { Context } from "../..";


const getClasses = makeStyles(() => ({
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    gap: "20px",
  },
  listContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "600px",
  },
}));

export const ProductListPage = () => {
  const classes = getClasses();
  const { t } = useTranslation();
  const [createFormVisibilityStatus, showForm] = useState(false);
  const { store } = useContext(Context);

  const toggleCreateFormVisibilityStatus = () => {
    showForm(!createFormVisibilityStatus);
  };

  return (
    <>
      {createFormVisibilityStatus ? (
        <CreateProduct toggleCreateFormVisibilityStatus={toggleCreateFormVisibilityStatus} />
      ) : null}
      <div className={classes.list}>
        <Button variant="contained" onClick={toggleCreateFormVisibilityStatus}>
          {t("create")}
        </Button>
        <div className={classes.listContainer}>
          <ProductList />
        </div>
      </div>
    </>
  );
};
