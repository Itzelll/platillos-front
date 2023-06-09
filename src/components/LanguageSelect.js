import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const languageMap = {
  en: { label: "English", dir: "ltr", active: true },
  sp: { label: "Espanol", dir: "ltr", active: false },
  fr: { label: "Français", dir: "ltr", active: false }
};

const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "en";
  //const { t } = useTranslation();

  const [menuAnchor] = React.useState(null);

  React.useEffect(() => {
    if(selected && languageMap[selected] && languageMap[selected].dir){
      document.body.dir = languageMap[selected].dir;
    } 
  }, [menuAnchor, selected]);

  function changeLang(value) {
    //alert(value);
    i18next.changeLanguage(value);

  }
  return (
    <div>
          <select name="select" 
                    onChange={e => changeLang(e.target.value)}>

	  {Object.keys(languageMap)?.map(item => (
              <option value={item}  key={item}>
                {languageMap[item].label}
              </option>
            ))}

	  </select>

    </div>
  );
};

export default LanguageSelect;
