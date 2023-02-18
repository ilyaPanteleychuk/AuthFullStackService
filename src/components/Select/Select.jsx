import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import * as LANGUAGES from "../../constants/languages";
import { useTranslation } from "react-i18next";

export const Select = () => {
  const [lang, setLang] = useState(localStorage.getItem("language") || "en");

  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    localStorage.setItem("language", event.target.value);
    i18n.changeLanguage(event.target.value);
    setLang(event.target.value);
  };

  return (
    <>
      <TextField id="select-language" label={t("language")} value={lang} onChange={handleChange} fullWidth select>
        <MenuItem value={LANGUAGES.en}>en</MenuItem>
        <MenuItem value={LANGUAGES.ru}>ru</MenuItem>
        <MenuItem value={LANGUAGES.ua}>ua</MenuItem>
      </TextField>
    </>
  );
};
