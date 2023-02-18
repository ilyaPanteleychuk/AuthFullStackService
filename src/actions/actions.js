import { SET_PRODUCTS, SET_AUTHENTICATION_STATUS, SET_LOADING_STATUS } from "../constants/actionTypes";
import { AuthService } from "../services/AuthSerice";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setAuthenticationStatus = (status) => ({
  type: SET_AUTHENTICATION_STATUS,
  payload: status,
});

export const setLoadingStatus = (status) => ({
  type: SET_LOADING_STATUS,
  payload: status,
});

export const getProducts = () => (dispatch) => {
  AuthService.getProducts().then((response) => {
    dispatch(setProducts(response.data));
  });
};

export const addNewProduct = (title, manufacturer, categoryTitle) => (dispatch) => {
    dispatch(checkAuth());
    AuthService.addNewProduct(title, manufacturer, categoryTitle)
    .then(() => {
      dispatch(getProducts());
    })
};

export const login = (username, password) => (dispatch) => {
  AuthService.login(username, password).then((response) => {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    dispatch(setAuthenticationStatus(true));
  });
};

export const register = (username, password) => (dispatch) => {
  AuthService.register(username, password).then( (response) => {
    console.log(response);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    dispatch(setAuthenticationStatus(true));
  });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  dispatch(setAuthenticationStatus(false));
};

export const refreshTokens = () => (dispatch) => {
  AuthService.refresh().then((response) => {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    dispatch(setAuthenticationStatus(true));
  });
};

export const checkAuth = () => (dispatch) => {
  AuthService.isTokenExpired(localStorage.getItem("token")).then((response) => {
    if(response.data == true){
      dispatch(refreshTokens());
    }else {
      dispatch(setAuthenticationStatus(true));
    }
  });
}

export const deleteProduct = (id) => (dispatch) => {
  dispatch(checkAuth());
  AuthService.deleteProduct(id).then(() => {
    dispatch(getProducts());
  });
};

export const updateProduct = (title, manufacturer, categoryTitle, id) => (dispatch) => {
  dispatch(checkAuth());
  AuthService.updateProduct(title, manufacturer, categoryTitle, id).then(() => {
    dispatch(getProducts())
  });
};
