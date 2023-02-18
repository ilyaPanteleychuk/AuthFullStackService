import { useState } from "react";
import { Login } from "../../components/Login";
import { Register } from "../../components/Register";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useTranslation } from "react-i18next";

const AVAILABLE_PAGES = {
  login: "login",
  register: "register",
};

export const AuthenticationForm = () => {
  const [value, setValue] = useState("login");
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange}>
        <Tab label={t("loginButton")} value={AVAILABLE_PAGES.login} />
        <Tab label={t("register")} value={AVAILABLE_PAGES.register} />
      </TabList>
      <TabPanel value={AVAILABLE_PAGES.login}>
        <Login />
      </TabPanel>
      <TabPanel value={AVAILABLE_PAGES.register}>
        <Register />
      </TabPanel>
    </TabContext>
  );
};
