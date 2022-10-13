import React from "react";
import firebase from "firebase";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LogoutSVG from "../../assets/SVG/Logout/Logout";
import Sun from "../../assets/SVG/Sun/Sun";
import Moon from "../../assets/SVG/Moon/Moon";
import { ThemeContext, themes } from "../../context/theme";

const item = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2.6,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

//Variants
const variants = {
  active: {
    x: "-20px",
  },
  inActive: {
    x: "20px",
  },
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Menu = ({ grid = false, toggleMenu, setToggleMenu }) => {
  let dispatch = useDispatch();
  let { user, theme } = useSelector((state) => ({ ...state }));

  const toggleTheme = (theme) => {
    dispatch({
      type: "TOGGLE_THEME",
      payload: theme,
    });
    localStorage.setItem("theme", JSON.stringify(theme));
    // console.log("theme ---", theme);
  };

  let history = useHistory();

  const logout = (grid) => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/");
    logoutAndClose(grid);
  };

  const logoutAndClose = (grid) => {
    let close = grid ? () => setToggleMenu(!toggleMenu) : null;
    return close;
  };

  return (
    <ul className={grid ? "menu-nav" : "menu"}>
      <li className="menu-item">
        <div id="toggle-theme">
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <motion.div
                onClick={() => {
                  changeTheme(theme === false ? themes.light : themes.dark);
                  toggleTheme(!theme);
                }}
                animate={theme === false ? "active" : "inActive"}
                variants={variants}
                initial="hidden"
                id="toggle-theme"
              >
                {theme ? (
                  <motion.span
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        ease: [0.6, 0.01, -0.05, 0.95],
                        duration: 1.8,
                      },
                    }}
                  >
                    <Sun color={"#fff"} />
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        ease: [0.6, 0.01, -0.05, 0.95],
                        duration: 1.8,
                      },
                    }}
                  >
                    <Moon color={"#24242a"} />
                  </motion.span>
                )}
              </motion.div>
            )}
          </ThemeContext.Consumer>
        </div>
      </li>
      <li
        className="menu-item"
        onClick={grid ? () => setToggleMenu(!toggleMenu) : null}
      >
        {/* <Link to={"/event/kajaki"}> */}
        <Link to="/splywy">
          <h2 style={{ color: !theme ? "#24242a" : "#fff" }}>Spływy</h2>
        </Link>
      </li>
      <li
        className="menu-item"
        onClick={grid ? () => setToggleMenu(!toggleMenu) : null}
      >
        {/* <Link to="/event/gory"> */}
        <Link to="/gory">
          <h2 style={{ color: !theme ? "#24242a" : "#fff" }}>Góry</h2>
        </Link>
      </li>
      <li
        className="menu-item"
        onClick={grid ? () => setToggleMenu(!toggleMenu) : null}
      >
        {/* <Link to="/event/morze"> */}
        <Link to="/morze">
          <h2 style={{ color: !theme ? "#24242a" : "#fff" }}>Morze</h2>
        </Link>
      </li>
      <li
        className="menu-item"
        onClick={grid ? () => setToggleMenu(!toggleMenu) : null}
      >
        <Link to="/">
          <h2 style={{ color: !theme ? "#24242a" : "#fff" }}>Kontakt</h2>
        </Link>
      </li>
      {user && (
        <li className="logout menu-item" onClick={() => logout(grid)}>
          <LogoutSVG color={!theme ? "#24242a" : "#fff"} />
        </li>
      )}
    </ul>
  );
};

export default Menu;
