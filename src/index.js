import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./reducers/mainReducer";
import "./i18n/i18n";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: mainReducer,
});

export const Context = createContext({ store });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);