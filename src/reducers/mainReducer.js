import { SET_AUTHENTICATION_STATUS, SET_LOADING_STATUS, SET_PRODUCTS } from "../constants/actionTypes";

export const INITIAL_STATE = {
  products: [],
  isAuthenticated: false,
  isLoading: false,
};

export const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_AUTHENTICATION_STATUS:
      return { ...state, isAuthenticated: action.payload };
    case SET_LOADING_STATUS:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
