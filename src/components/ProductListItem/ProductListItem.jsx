import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { Context } from "../..";
import { updateProduct, deleteProduct, checkAuth } from "../../actions/actions";
import { makeStyles } from "@mui/styles";
import { UpdateProduct } from "../UpdateProduct";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const getClasses = makeStyles({
  product: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    background: "#f2f2f2",
    margin: "10px 0",
  },
  productInfoSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",
  },
});

export const ProductListItem = ({ product }) => {
  const classes = getClasses();
  const { t } = useTranslation();
  const { store } = useContext(Context);
  const [updateFormVisibilityStatus, showForm] = useState(false);
  const authenticationStatus = useSelector(state => state.isAuthenticated);

  const toggleUpdateFormVisibilityStatus = () => {
    showForm(!updateFormVisibilityStatus);
  };

  const handleDelete = (id) => {
    store.dispatch(deleteProduct(id));  
  };

  return (
    <>
      {updateFormVisibilityStatus ? (
        <UpdateProduct product={product} toggleUpdateFormVisibilityStatus={toggleUpdateFormVisibilityStatus} />
      ) : null}
      <div key={product.id} className={classes.product}>
        <div className={classes.productInfoSection}>
          <div>Title: {product.title}</div>
          <div>Manufacturer: {product.manufacturer}</div>
          <div>Category title: {product.category.title}</div>
        </div>
        <div className={classes.productInfoSection}>
          <Button onClick={toggleUpdateFormVisibilityStatus} variant="contained">
            {t("update")}
          </Button>
          <Button onClick={() => handleDelete(product.id)} variant="contained">
            {t("delete")}
          </Button>
        </div>
      </div>
    </>
  );
};
