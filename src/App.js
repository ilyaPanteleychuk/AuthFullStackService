import { Routes, Route } from "react-router-dom";
import { Authentication } from "./pages/Authentication";
import { ProductListPage } from "./pages/ProductListPage";
import "./assets/styles/main.css";
import { makeStyles } from "@mui/styles";
import { Header } from "./components/Header";

const useGlobalStyles = makeStyles({
  "@global": {
    body: {
      padding: "0",
      margin: "0",
      boxSizing: "border-box",
      width: "100vw",
      height: "100vh",
    },
    a: {
      textDecoration: "none",
    },
  },
});

export const App = () => {
  useGlobalStyles();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Authentication />} /> 
        <Route path="/list" element={<ProductListPage />} />
      </Routes>
    </>
  );
};
