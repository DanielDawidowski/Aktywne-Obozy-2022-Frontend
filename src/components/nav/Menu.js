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
    <motion.ul
      className={grid ? "menu-nav" : "menu"}
      variants={variants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
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
                    exit={{ opacity: 0, x: -100 }}
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
                    exit={{ opacity: 0, x: -100 }}
                  >
                    <Moon color={"#24242a"} />
                  </motion.span>
                )}
              </motion.div>
            )}
          </ThemeContext.Consumer>
        </div>
      </li>
      {user && (
        <>
          <motion.li
            className="logout menu-item"
            onClick={() => logout(grid)}
            variants={item}
          >
            <LogoutSVG color={!theme ? "#24242a" : "#fff"} />
          </motion.li>
          <motion.li
            className="menu-item"
            onClick={grid ? () => setToggleMenu(!toggleMenu) : null}
            variants={item}
          >
            <Link style={{ textDecoration: "none" }} to="/admin/dashboard">
              <h2 style={{ color: !theme ? "#24242a" : "#fff" }}>Admin</h2>
            </Link>
          </motion.li>
        </>
      )}
      <motion.li
        className="menu-item"
        onClick={grid ? () => setToggleMenu(!toggleMenu) : null}
        variants={item}
      >
        {/* <Link to={"/event/kajaki"}> */}
        <Link style={{ textDecoration: "none" }} to="/events/polkolonie">
          <h2 style={{ color: !theme ? "#24242a" : "#fff" }}>Półkolonie</h2>
        </Link>
      </motion.li>
      <motion.li
        className="menu-item"
        onClick={grid ? () => setToggleMenu(!toggleMenu) : null}
        variants={item}
      >
        <Link to={"/events/splywy"}>
          {/* <Link style={{ textDecoration: "none" }} to="/event/gory/polkolonie"> */}
          <h2 style={{ color: !theme ? "#24242a" : "#fff" }}>Mazury</h2>
        </Link>
      </motion.li>
      <motion.li
        className="menu-item"
        onClick={grid ? () => setToggleMenu(!toggleMenu) : null}
        variants={item}
      >
        {/* <Link to="/event/gory"> */}
        <Link style={{ textDecoration: "none" }} to="/events/gory">
          <h2 style={{ color: !theme ? "#24242a" : "#fff" }}>Góry</h2>
        </Link>
      </motion.li>
      <motion.li
        className="menu-item"
        onClick={grid ? () => setToggleMenu(!toggleMenu) : null}
        variants={item}
      >
        {/* <Link to="/event/morze"> */}
        <Link style={{ textDecoration: "none" }} to="/events/morze">
          <h2 style={{ color: !theme ? "#24242a" : "#fff" }}>Morze</h2>
        </Link>
      </motion.li>
      <motion.li
        className="menu-item menu-item-contact"
        onClick={grid ? () => setToggleMenu(!toggleMenu) : null}
        variants={item}
      >
        <Link style={{ textDecoration: "none" }} to="/contact">
          <h2 style={{ color: !theme ? "#24242a" : "#fff" }}>Kontakt</h2>
        </Link>
      </motion.li>
    </motion.ul>
  );
};

export default Menu;
