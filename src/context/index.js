import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { themes, ThemeContext } from "./theme";

export default function ThemeContextWrapper(props) {
  const [themeName, setTheme] = useState(themes.dark);

  //redux
  let { theme } = useSelector((state) => ({ ...state }));

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (themeName) {
      case themes.light:
        document.body.classList.add("white-content");
        break;
      case themes.dark:
      default: {
        theme === true
          ? document.body.classList.add("white-content")
          : document.body.classList.remove("white-content");
      }
    }
  }, [themeName, theme]);

  return (
    <ThemeContext.Provider
      value={{ theme: themeName, changeTheme: changeTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
