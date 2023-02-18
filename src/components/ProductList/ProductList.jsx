import { useContext } from "react";
import { Context } from "../..";
import { checkAuth, getProducts } from "../../actions/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProductListItem } from "../ProductListItem";

export const ProductList = ({ toggleFormVisibilityStatus }) => {
  const { store } = useContext(Context);
  const products = useSelector((state) => state.products);
  const loadingStatus = useSelector((state) => state.isLoading);
  const authenticationStatus = useSelector((state) => state.isAuthenticated);

  useEffect(() => {
    store.dispatch(checkAuth());
    if (authenticationStatus) {
      store.dispatch(getProducts());
    }
  }, [authenticationStatus]);

  return (
    <>
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} toggleFormVisibilityStatus={toggleFormVisibilityStatus} />
      ))}
    </>
  );
};
